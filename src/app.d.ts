// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface Locals {
			requestId: string;
			log: {
				info: (msg: string, module: string, data?: object) => void;
				error: (msg: string, module: string, data?: object) => void;
				warn: (msg: string, module: string, data?: object) => void;
				debug: (msg: string, module: string, data?: object) => void;
				child: (module: string) => Locals['log'];
			};
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
