import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import { VitePWA } from 'vite-plugin-pwa'
import replace from '@rollup/plugin-replace'

const pwaOptions = {
	mode: 'development',
	base: '/',
	includeAssets: ['favicon.ico', '*.svg'],
	manifest: {
		name: 'Movie Series',
		short_name: 'Movie Series',
		theme_color: '#ffffff',
		icons: [
			{
				src: 'ms-192x192.png', // <== don't add slash, for testing
				sizes: '192x192',
				type: 'image/png',
			},
			{
				src: '/ms-512x512.png', // <== don't remove slash, for testing
				sizes: '512x512',
				type: 'image/png',
			},
			{
				src: 'ms-512x512.png', // <== don't add slash, for testing
				sizes: '512x512',
				type: 'image/png',
				purpose: 'any maskable',
			},
		],
	},
	devOptions: {
		enabled: process.env.SW_DEV === 'true',
		/* when using generateSW the PWA plugin will switch to classic */
		type: 'module',
		navigateFallback: 'index.html',
	},
}

const replaceOptions = { __DATE__: new Date().toISOString() }
const claims = process.env.CLAIMS === 'true'
const reload = process.env.RELOAD_SW === 'true'
const selfDestroying = process.env.SW_DESTROY === 'true'

if (process.env.SW === 'true') {
	pwaOptions.srcDir = 'src'
	pwaOptions.filename = claims ? 'claims-sw.ts' : 'prompt-sw.ts'
	pwaOptions.strategies = 'injectManifest'
		(pwaOptions.manifest).name = 'PWA Inject Manifest'
			(pwaOptions.manifest).short_name = 'PWA Inject'
}

if (claims)
	pwaOptions.registerType = 'autoUpdate'

if (reload) {
	// @ts-expect-error just ignore
	replaceOptions.__RELOAD_SW__ = 'true'
}

if (selfDestroying)
	pwaOptions.selfDestroying = selfDestroying

export default defineConfig({
	build: {
		sourcemap: process.env.SOURCE_MAP === 'true',
		target: 'esnext',
		polyfillDynamicImport: false,
	},
	plugins: [
		solidPlugin(),
		VitePWA(pwaOptions),
		replace(replaceOptions),
	],
})

// import { defineConfig } from 'vite'
// import solidPlugin from 'vite-plugin-solid'

// export default defineConfig({
//   plugins: [solidPlugin()],
//   server: {
//     port: 3000,
//   },
//   build: {
//     target: 'esnext',
//   },
// })
