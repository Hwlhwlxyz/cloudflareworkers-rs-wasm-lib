/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
import init from '../rust_module/wasm-pack-lib/pkg/wasm_pack_lib';
import wasm from '../rust_module/wasm-pack-lib/pkg/wasm_pack_lib_bg.wasm';

export default {
	async fetch(request, env, ctx): Promise<Response> {
		await init(wasm)
		let output = "x"
		const module = await import("../rust_module/wasm-pack-lib/pkg");
		output = module.wasm_print("x");

		console.log("output:", output)
		return new Response('Hello World!' + output);
	},
} satisfies ExportedHandler<Env>;
