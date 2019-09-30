const state = {
    drawer : false
};
const mutations = {
    SET_DRAWER: (state, payload) => {
        state.drawer = payload.drawer;
    }
};
const actions = {
    draw({ commit }, drawer) {
        commit('SET_DRAWER', { drawer });
    }
};
export default {
    namespaced: true,
    state,
    mutations,
    actions,
}
