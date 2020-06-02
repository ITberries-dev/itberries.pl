import React from 'react';
import { IncomingMessage } from 'http';
import { Client } from '../prismic';

export default class extends React.Component<{ home: any, configuration: any, pageURL: string, error: any }> {

	static async getInitialProps({ req, res, query, pathname }: { req: IncomingMessage, res: any, query: any, pathname: string }) {
		try {
            console.log(query.language)
			const home = await Client(req).getSingle('homepage', { lang: query.language });

			const pageURL = req ? req.protocol + '://' + req.headers.host + req.url : window.location.origin + pathname;

			if (!home) {
				res.statusCode = 404;

				const error = {
					statusCode: 404
				};

				return { error }
			}

			return { home, pageURL };
		} catch (error) {
			return { error: true };
		}
	}

	render() {
        return (
        <div>
            index.html
            {console.log(this.props)}
        </div>
        );
	}
}

// const Index = (props: any) => {
//     return (
//         <div>
//             index.html
//         </div>
//     )
// };

// Index.getInitialProps = async ({ req, res, query, pathname }: { req: IncomingMessage, res: any, query: any, pathname: string })  => {
//     console.log("ELO")
//     try {
//         const home = await Client(req).getSingle('homepage', { lang: query.language });

//         const pageURL = req ? req.protocol + '://' + req.headers.host + req.url : window.location.origin + pathname;

//         if (!home) {
//             res.statusCode = 404;

//             const error = {
//                 statusCode: 404
//             };

//             return { error }
//         }

//         console.log(home)

//         return { home, pageURL };
//     } catch (error) {
//         return { error: true };
//     }
// }

// export default Index;