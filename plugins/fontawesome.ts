import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome';
import {
	faArrowUp,
	faChildren,
	faCircleCheck,
	faCircleHalfStroke,
	faCircleXmark,
	faCopy,
	faDesktop,
	faGift,
	faHandsBubbles,
	faHeadSideMask,
	faImages,
	faLocationDot,
	faMagnifyingGlassPlus,
	faMaximize,
	faMinimize,
	faMoon,
	faMusic,
	faPaperPlane,
	faPeopleArrows,
	faRing,
	faShareNodes,
	faSlash,
	faThermometer,
	faWandMagicSparkles,
	faWineGlass,
	faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;

library.add(
	faArrowUp,
	faChildren,
	faCircleCheck,
	faCircleHalfStroke,
	faCircleXmark,
	faCopy,
	faDesktop,
	faFacebook,
	faGift,
	faHandsBubbles,
	faHeadSideMask,
	faImages,
	faInstagram,
	faLocationDot,
	faMagnifyingGlassPlus,
	faMaximize,
	faMinimize,
	faMoon,
	faMusic,
	faPaperPlane,
	faPeopleArrows,
	faRing,
	faShareNodes,
	faSlash,
	faThermometer,
	faTwitter,
	faWandMagicSparkles,
	faWhatsapp,
	faWineGlass,
	faXmark
);

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon);
	nuxtApp.vueApp.component('FontAwesomeLayers', FontAwesomeLayers);
});
