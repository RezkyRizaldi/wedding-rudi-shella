import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome';
import {
	faArrowUp,
	faCircleCheck,
	faCircleXmark,
	faCopy,
	faGift,
	faHandsBubbles,
	faHeadSideMask,
	faLocationDot,
	faMaximize,
	faMinimize,
	faMusic,
	faPaperPlane,
	faPeopleArrows,
	faRing,
	faSlash,
	faThermometer,
	faWineGlass,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;

library.add(
	faArrowUp,
	faCircleCheck,
	faCircleXmark,
	faCopy,
	faFacebook,
	faGift,
	faHandsBubbles,
	faHeadSideMask,
	faInstagram,
	faLocationDot,
	faMaximize,
	faMinimize,
	faMusic,
	faPaperPlane,
	faPeopleArrows,
	faRing,
	faSlash,
	faThermometer,
	faWineGlass
);

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon).component('FontAwesomeLayers', FontAwesomeLayers);
});
