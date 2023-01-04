import AOS from 'aos';

export default defineNuxtPlugin((nuxtApp) => {
	if (typeof window !== 'undefined') {
		nuxtApp.AOS = AOS.init({
			once: true,
			easing: 'ease-in-out-cubic',
		});
	}
});
