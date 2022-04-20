import { createApp } from "vue";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import App from "./App.vue";
import router from "./Router/index";
import store from './store'

import './index.css';

const firebaseConfig = {
  apiKey:import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
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
