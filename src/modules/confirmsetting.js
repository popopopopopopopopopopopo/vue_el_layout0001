const state = {
    visible : false
};
const mutations = {
    SET_VISIBLE: (state, payload) => {
        state.visible = payload.new_visible;
    }
};
const actions = {
    setvisible({ commit }, new_visible) {
        commit('SET_VISIBLE', { new_visible });
    }
};
export default {
    namespaced: true,
    state,
    mutations,
    actions,
}
