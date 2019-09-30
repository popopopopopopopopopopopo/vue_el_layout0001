import user_model from "../models/user_model";
const state = {
    currentuser : new user_model("", "", ""),
};
const mutations = {
    SET_CURRENT_USER: (state, payload) => {
        state.currentuser = payload.new_user;
    },
    SET_CURRENT_NAME: (state, payload) => {
        state.currentuser.name = payload.new_name;
    },
    SET_CURRENT_DATE: (state, payload) => {
        state.currentuser.date = payload.new_date;
    },
    SET_CURRENT_ADDRESS: (state, payload) => {
        state.currentuser.address = payload.new_address;
    }
};
const actions = {
    setuser({ commit }, new_user) {
        commit('SET_CURRENT_USER', { new_user });
    },
    setname({ commit }, new_name) {
        commit('SET_CURRENT_NAME', { new_name });
    },
    setdate({ commit }, new_date) {
        commit('SET_CURRENT_DATE', { new_date });
    },
    setaddress({ commit }, new_address) {
        commit('SET_CURRENT_ADDRESS', { new_address });
    },
};
export default {
    namespaced: true,
    state,
    mutations,
    actions,
}
