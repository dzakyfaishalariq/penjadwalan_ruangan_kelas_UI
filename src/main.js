import "./index.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import icons and add them to the Library */
import {
  faUserSecret,
  faThumbsUp,
  faDoorOpen,
  faHourglassHalf,
  faCircleDot,
  faCalendarCheck,
  faCheck,
  faCheckCircle,
  faClock,
  faUserGraduate,
  faExchangeAlt,
  faUsers,
  faChalkboardTeacher,
  faUserCog,
  faCalendar,
  faInfoCircle,
  faBell,
  faExclamationTriangle,
  faCalendarTimes,
  faRotate,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faCalendarPlus,
  faCalendarWeek,
  faLock,
  faUser,
  faIdCard,
  faGraduationCap,
  faCircleUser,
  faEye,
  faKey,
  faEyeSlash,
  faHouse,
  faDoorClosed,
  faGear,
  faRightFromBracket,
  faUserClock,
  faPlus,
  faChevronLeft,
  faChevronRight,
  faBuilding,
  faCircleXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

library.add(
  faUserSecret,
  faThumbsUp,
  faFacebook,
  faDoorOpen,
  faHourglassHalf,
  faCircleDot,
  faCalendarCheck,
  faCheck,
  faCheckCircle,
  faClock,
  faUserGraduate,
  faExchangeAlt,
  faUsers,
  faChalkboardTeacher,
  faUserCog,
  faCalendar,
  faInfoCircle,
  faBell,
  faExclamationTriangle,
  faCalendarTimes,
  faRotate,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faCalendarPlus,
  faCalendarWeek,
  faLock,
  faUser,
  faIdCard,
  faGraduationCap,
  faCircleUser,
  faEye,
  faKey,
  faEyeSlash,
  faHouse,
  faDoorClosed,
  faGear,
  faRightFromBracket,
  faUserClock,
  faPlus,
  faChevronLeft,
  faChevronRight,
  faBuilding,
  faCircleXmark,
  faMagnifyingGlass
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
