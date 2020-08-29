/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

Vue.component('menu-component', require('./components/header/menu.vue').default);
Vue.component('header-component', require('./components/header/header.vue').default);
Vue.component('footer-component', require('./components/header/footer.vue').default);
Vue.component('main-component', require('./components/page/main.vue').default);

////////////////////// Section ///////////////////////////////////////////

Vue.component('about-component', require('./components/page/section/about.vue').default);
Vue.component('skill-component', require('./components/page/section/skill.vue').default);
Vue.component('resume-component', require('./components/page/section/resume.vue').default);
Vue.component('portfolio-component', require('./components/page/section/portfolio.vue').default);
Vue.component('reference-component', require('./components/page/section/reference.vue').default);
Vue.component('contact-component', require('./components/page/section/contact.vue').default);


////////////////////// Portfolio ///////////////////////////////////////////

Vue.component('portfolio-1', require('./components/page/portfolio/portfolio-1.vue').default);
Vue.component('portfolio-2', require('./components/page/portfolio/portfolio-2.vue').default);
Vue.component('portfolio-3', require('./components/page/portfolio/portfolio-3.vue').default);

const app = new Vue({
    el: '#vue',
});
