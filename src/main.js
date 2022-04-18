import { createApp } from "vue";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import App from "./App.vue";
import router from "./Router/index";
import store from './store'

import './index.css';

const firebaseConfig = {
  apiKey: 'AIzaSyBBCTyBXAmUnHraFAjclo_uYPC8lLUPIM4',
  authDomain: 'login-user-authenticate.firebaseapp.com',
  projectId: 'login-user-authenticate',
  storageBucket: 'login-user-authenticate.appspot.com',
  messagingSenderId: '558784634009',
  appId: '1:558784634009:web:10cede62602bd89fd66c08'
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
