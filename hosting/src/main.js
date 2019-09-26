import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import * as firebase from "firebase/app";
import "firebase/auth";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyAzAraWDMxamXd41F8r6qsvks67IgIUbcc",
  authDomain: "studium-develop.firebaseapp.com",
  databaseURL: "https://studium-develop.firebaseio.com",
  projectId: "studium-develop",
  storageBucket: "",
  messagingSenderId: "9470441095",
  appId: "1:9470441095:web:bb6675abfaadeb167eea22",
  measurementId: "G-8K68Z6NBRD",
};
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount("#app");
