import VueEasyLightbox from 'vue-easy-lightbox';

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.component('LightBox', VueEasyLightbox);
});
