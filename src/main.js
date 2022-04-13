import { createApp } from "vue";
import App from "./App.vue";
import './index.css';
import router from "./Router/index";
import * as firebase from "@firebase/app";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDB_G2vrCWeb-eP11maQc18vq7RpNurkpI",
    authDomain: "vue-firebase-authenticat-b2307.firebaseapp.com",
    projectId: "vue-firebase-authenticat-b2307",
    storageBucket: "vue-firebase-authenticat-b2307.appspot.com",
    messagingSenderId: "914290142566",
    appId: "1:914290142566:web:0d6b1848bd082d4e846ca7",
    measurementId: "G-G495868675"
  };

  firebase.initializeApp(firebaseConfig);
const app = createApp(App);

app.use(router);

app.mount("#app");
