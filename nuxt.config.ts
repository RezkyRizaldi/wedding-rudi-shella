// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			bodyAttrs: {
				class: 'overflow-hidden scroll-smooth',
			},
			htmlAttrs: {
				lang: 'en',
				translate: 'no',
			},
			link: [
				{ rel: 'author', href: 'https://github.com/RezkyRizaldi' },
				{ rel: 'icon', href: '/favicon.ico' },
				{ rel: 'shortcut icon', href: '/favicon.ico' },
				{ rel: 'apple-touch-icon', href: '/favicon/favicon-16x16.png', sizes: '16x16x' },
				{ rel: 'apple-touch-icon', href: '/favicon/favicon-32x32.png', sizes: '32x32' },
			],
			meta: [
				{ name: 'robots', content: 'index, follow' },
				{ name: 'author', content: 'Muhammad Rezky Rizaldi' },
				{ name: 'rating', content: 'General' },
				{ name: 'google', content: 'notranslate' },
				{ name: 'apple-mobile-web-app-capable', content: 'yes' },
				{ name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
				{ name: 'format-detection', content: 'telephone=no' },
				{ name: 'msapplication-TileColor', content: '#FFFFFF' },
				{ name: 'application-name', content: process.env.APP_NAME },
				{ name: 'description', content: `${process.env.APP_NAME} Page` },
				{ property: 'og:description', content: `${process.env.APP_NAME} Page` },
				{ property: 'og:image', content: `${process.env.APP_URL}/favicon/favicon.png` },
				{ property: 'og:image:type', content: 'image/png' },
				{ property: 'og:locale', content: 'id_ID' },
				{ property: 'og:site:name', content: process.env.APP_NAME },
				{ property: 'og:title', content: process.env.APP_NAME },
				{ property: 'og:type', content: 'website' },
				{ property: 'og:url', content: process.env.APP_URL },
				{ property: 'twitter:card', content: 'summary_large_image' },
				{ property: 'twitter:description', content: `${process.env.APP_NAME} Page` },
				{ property: 'twitter:title', content: process.env.APP_NAME },
				{ property: 'twitter:image', content: `${process.env.APP_URL}/favicon/favicon.png` },
			],
			title: process.env.APP_NAME,
		},
	},
	build: {
		transpile: ['@fortawesome/vue-fontawesome', '@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons', '@fortawesome/free-regular-svg-icons', '@fortawesome/free-brands-svg-icons'],
	},
	css: ['@fortawesome/fontawesome-svg-core/styles.css'],
	googleFonts: {
		families: {
			Roboto: true,
			Lato: [100, 300],
			Raleway: {
				wght: [100, 400],
				ital: [100],
			},
			Parisienne: true,
		},
	},
	modules: ['@nuxt/image-edge', '@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxtjs/color-mode', 'nuxt-swiper'],
	runtimeConfig: {
		appName: process.env.APP_NAME,
	},
	ssr: false,
	typescript: {
		shim: false,
	},
	vue: {
		compilerOptions: {
			isCustomElement: (tag) => ['sodipodi:namedview', 'dc:format', 'dc:type', 'dc:title', 'cc:Work', 'rdf:RDF'].includes(tag),
		},
	},
});
