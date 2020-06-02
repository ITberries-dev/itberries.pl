declare module "http" {
	interface IncomingMessage {
		protocol: string;
	}	
}