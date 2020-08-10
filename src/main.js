import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextAreaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextAreaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyDNi8Nhd5nqg4fQk_-irBEzHdHbyjnuaj0",
  authDomain: "vue-calendar-35533.firebaseapp.com",
  databaseURL: "https://vue-calendar-35533.firebaseio.com",
  projectId: "vue-calendar-35533",
  storageBucket: "vue-calendar-35533.appspot.com",
  messagingSenderId: "1039593377584",
  appId: "1:1039593377584:web:c55d937c5b9e11375542f5"

});


export const db = firebase.firestore();
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
