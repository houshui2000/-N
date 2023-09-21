const test =  {
    namespaced: true,
    state: {
        type:true,
    },
    getters: {

    },
    mutations: {
        TEST:(state,data) => {
            state.type = data
        }
    },
    actions: {
        test({commit},data) {
            commit('CHANGE_TYPE',data)
        }
    },
    modules: {


    }
}
export default test