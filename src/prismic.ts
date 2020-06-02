import  PrismicLib  from  'prismic-javascript'
import  PrismicConfig  from  './prismic-configuration.json'
import { IncomingMessage } from 'http'
import { ContentDocumentType } from './ContentDocumentType';
import RoutingConfig from './routing-configuration.json';

export  const  Client  = (req : IncomingMessage | null =  null) => {
    const options = {
		req: req,
		accessToken: PrismicConfig.accessToken
    };
    
	return  Prismic.client(PrismicConfig.apiEndpoint, options)
}

export const Prismic = PrismicLib;

export const linkResolver = (doc : { type : ContentDocumentType, uid: string, lang: string }, context? : string) => {
    const page: any = RoutingConfig[context ? `${doc.type}/${context}` : doc.type];

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