const routes = require('next-routes');
const RoutingConfig = require('./routing-configuration.json');

let router = routes();

let generateRoutes = () => {
    let languages;

    for(let pageType in RoutingConfig) {
        if(RoutingConfig.hasOwnProperty(pageType)) {
            languages = RoutingConfig[pageType].languages;

            for(let lang in languages) {
                router.add({name: pageType + '_' + lang, pattern: languages[lang].pattern, page: RoutingConfig[pageType].page});
            }
        }
    }

    router.add('notfound', '/*');
}

generateRoutes();

module.exports = router;