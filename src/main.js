/*import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
const routes = {
    '/': Home,
    '/about': About
}

new Vue({
    render: h => h(App),
}).$mount('#app')
*/
import Vue from 'vue'
const NotFound = { template: '<p>Page not found</p>' }
import addInterest from './components/addInterest'
import Home from './App.vue'

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
    render(h) { return h(this.ViewComponent) }
})