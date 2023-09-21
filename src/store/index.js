import { createStore } from 'vuex';
import test from "@/store/modules/test.js";

const store = createStore({
    modules:{
        test:test,
    }
})

export default store
