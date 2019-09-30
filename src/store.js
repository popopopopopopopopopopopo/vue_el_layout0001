import Vue from 'vue'
import Vuex from 'vuex'
import drawersetting from "./modules/drawersetting";
import current_user from "./modules/current_user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules : {
    drawersetting,
    current_user,
  }
});
