import { createApp } from "vue";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import App from "./App.vue";
import router from "./Router/index";
import store from './store'

import './index.css';

const firebaseConfig = {
  apiKey: "AIzaSyDB_G2vrCWeb-eP11maQc18vq7RpNurkpI",
  authDomain: "vue-firebase-authenticat-b2307.firebaseapp.com",
  projectId: "vue-firebase-authenticat-b2307",
  storageBucket: "vue-firebase-authenticat-b2307.appspot.com",
  messagingSenderId: "914290142566",
  appId: "1:914290142566:web:0d6b1848bd082d4e846ca7",
  measurementId: "G-G495868675"
};
  
const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
auth.onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
