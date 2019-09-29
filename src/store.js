import Vue from 'vue'
import Vuex from 'vuex'
import drawersetting from "./models/drawersetting";

Vue.use(Vuex);

export default new Vuex.Store({
  modules : {
    drawersetting
  }
});
