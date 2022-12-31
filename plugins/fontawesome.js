import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCircleCheck, faCircleXmark, faCopy, faGift, faHandsBubbles, faHeadSideMask, faLocationDot, faPaperPlane, faPeopleArrows, faRing, faThermometer, faWineGlass } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;

library.add(faCircleCheck, faCircleXmark, faCopy, faGift, faHandsBubbles, faHeadSideMask, faInstagram, faLocationDot, faPaperPlane, faPeopleArrows, faRing, faThermometer, faWineGlass);

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon, {});
});
