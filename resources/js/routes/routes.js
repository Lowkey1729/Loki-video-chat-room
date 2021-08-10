import Vue from 'vue';
import VueRouter from 'vue-router';
import Room from '../views/VideoChatRoom/Room.vue';
import LandingPage from '../views/LandingPage/LandingPage.vue';


Vue.use(VueRouter);


let routes = [

    {
        path: '/',
        component: LandingPage,
    },

    {
        path: '/video_chat_room',
        component: Room,

    },







]


const router = new VueRouter({

    mode:'history',
    routes
})






  export default router
