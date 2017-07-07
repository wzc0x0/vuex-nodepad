import Vue from "vue"
import App from "./App.vue"
import Vuex from "vuex"
import store from "./store/index"

Vue.use(Vuex);
new Vue({
    el:"#app",
    store:store,
    template:'<App/>',
    components:{App}
});
