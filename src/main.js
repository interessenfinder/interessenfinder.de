import Vue from 'vue'
const NotFound = { template: '<p>Page not found</p>' }
import Home from './App.vue'
import addInterest from '@/views/ai.vue'
import router from './router'

const routes = {
    '/': Home,
    '/ai': addInterest
}

new Vue({
    el: '#app',

    data: {
        currentRoute: window.location.pathname,
        routes
    },

    computed: {
        ViewComponent() {
            return routes[this.currentRoute] || NotFound
        }
    },

    router,
    render(h) { return h(this.ViewComponent) }
})