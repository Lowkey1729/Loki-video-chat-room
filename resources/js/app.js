import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes/routes';
import Vuex from 'Vuex';
import Axios from 'axios';

Vue.use(VueRouter);
Vue.component('video-chat-room', require('./views/VideoChatRoom/Room.vue').default);
// Vue.component('register-modal', require('./views/Modals/RegisterModal.vue').default);
Vue.use(Vuex);


//tokens
Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = token
  }


// axios

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.withCredentials = true;



const app = new Vue({
    el: '#app',
    router: routes,


});





