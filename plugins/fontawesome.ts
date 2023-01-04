import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome';
import {
	faArrowUp,
	faChildren,
	faCircleCheck,
	faCircleXmark,
	faCopy,
	faGift,
	faHandsBubbles,
	faHeadSideMask,
	faImages,
	faLocationDot,
	faMaximize,
	faMinimize,
	faMusic,
	faPaperPlane,
	faPeopleArrows,
	faRing,
	faShareNodes,
	faSlash,
	faThermometer,
	faWandMagicSparkles,
	faWineGlass,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;

library.add(
	faArrowUp,
	faChildren,
	faCircleCheck,
	faCircleXmark,
	faCopy,
	faFacebook,
	faGift,
	faHandsBubbles,
	faHeadSideMask,
	faImages,
	faInstagram,
	faLocationDot,
	faMaximize,
	faMinimize,
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
	faWineGlass
);

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon).component('FontAwesomeLayers', FontAwesomeLayers);
});
