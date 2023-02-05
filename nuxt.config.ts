// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			bodyAttrs: {
				class: 'relative overflow-hidden scroll-smooth scrollbar-thin scrollbar-track-gray-600 scrollbar-thumb-gray-200 scrollbar-track-rounded-full scrollbar-thumb-rounded-full dark:scrollbar-track-slate-800 dark:scrollbar-thumb-gray-100',
			},
			htmlAttrs: {
				class: 'overflow-hidden',
				lang: 'id',
				translate: 'no',
			},
			link: [
				{ rel: 'author', href: 'https://github.com/RezkyRizaldi' },
				{ rel: 'icon', href: '/favicon.ico' },
				{ rel: 'shortcut icon', href: '/favicon.ico' },
				{ rel: 'apple-touch-icon', href: '/favicon/favicon-16x16.png', sizes: '16x16x' },
				{ rel: 'apple-touch-icon', href: '/favicon/favicon-32x32.png', sizes: '32x32' },
				{ rel: 'preload', as: 'image', href: '/images/gallery4.jpg' },
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
				{ property: 'og:image', content: `${process.env.APP_URL}/images/wish.jpg` },
				{ property: 'og:image:type', content: 'image/jpg' },
				{ property: 'og:locale', content: 'id_ID' },
				{ property: 'og:site:name', content: process.env.APP_NAME },
				{ property: 'og:title', content: process.env.APP_NAME },
				{ property: 'og:type', content: 'website' },
				{ property: 'og:url', content: process.env.APP_URL },
				{ property: 'twitter:card', content: 'summary_large_image' },
				{ property: 'twitter:description', content: `${process.env.APP_NAME} Page` },
				{ property: 'twitter:title', content: process.env.APP_NAME },
				{ property: 'twitter:image', content: `${process.env.APP_URL}/images/wish.jpg` },
			],
			title: process.env.APP_NAME,
		},
	},
	build: {
		transpile: ['@fortawesome/vue-fontawesome', '@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons', '@fortawesome/free-regular-svg-icons', '@fortawesome/free-brands-svg-icons'],
	},
	colorMode: {
		classSuffix: '',
	},
	css: ['@fortawesome/fontawesome-svg-core/styles.css', 'aos/dist/aos.css'],
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
		preload: true,
	},
	modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxtjs/color-mode', 'nuxt-swiper', '@nuxtjs/html-validator'],
	runtimeConfig: {
		public: {
			appURL: process.env.APP_URL,
			pusher: {
				appId: process.env.PUSHER_APP_ID,
				key: process.env.PUSHER_KEY,
				secret: process.env.PUSHER_SECRET,
				cluster: process.env.PUSHER_CLUSTER,
			},
		},
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
