import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import "./assets/global.css";
import { registerComponents } from "./utils/import";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faUserSecret,
  faUser,
  faWallet,
  faArrowRight,
  faToolbox,
  faKey,
  faAddressCard,
  faArrowRightFromBracket,
  faHammer,
  faHouse,
  faBug,
  faBurger,
  faBell
} from "@fortawesome/free-solid-svg-icons";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from './config/firebase';

/* add icons to the library */
library.add(
  faUserSecret,
  faUser,
  faWallet,
  faArrowRight,
  faToolbox,
  faKey,
  faAddressCard,
  faArrowRightFromBracket,
  faHammer,
  faHouse,
  faBug,
  faBurger,
  faBell
);
let app;
onAuthStateChanged(auth,() => {
  if (!app) {
    app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);
    registerComponents(app);
    app.use(router);
    
    app.mount("#app");
  }
})

