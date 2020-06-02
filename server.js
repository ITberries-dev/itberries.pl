const next = require("next")
const helmet = require('helmet')
const routes = require("./src/routes")
const app = next({ dir: './src', dev:  process.env.NODE_ENV  !==  "production" })
const handler = routes.getRequestHandler(app)
const express = require("express")
const bodyParser = require('body-parser')
const prismic = require('prismic-javascript')
const prismicConfig = require('./src/prismic-configuration.json')
const RoutingConfig = require('./src/routing-configuration.json')

const linkResolver = (doc, context = null) => {
    const page = RoutingConfig[context ? `${doc.type}/${context}` : doc.type];

	if (page) {
		let pageRoute = page.languages[doc.lang];
		let uid = doc.uid || '';
		let segment = pageRoute.segment ? pageRoute.segment + '/' : '';
		let suffix = pageRoute.suffix ? '/' + pageRoute.suffix : '';

		return '/' + doc.lang + '/' + segment + uid + suffix;
	} else {
		return '/';
	}
}

// Initialize the prismic.io api
function initApi(req) {
  return prismic.getApi(prismicConfig.apiEndpoint, {
    req: req
  });
}

app.prepare().then(() => {
	const exp = express()

	exp.use(bodyParser.json())

	exp.get('/preview', (req, res) => {
		const token = req.query.token;
		initApi(req)
		.then((api) => api.previewSession(token, linkResolver, '/'))
		.then((url) => {
		  res.redirect(302, url);
		});
    });

    exp.use(handler)
	exp.use(helmet())
	exp.listen(process.env.PORT || 3000, () =>  process.stdout.write(`Point your browser to: http://localhost:3000\n`))
})