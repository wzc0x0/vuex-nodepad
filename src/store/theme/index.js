/**
 * Created by dell、 on 2017/7/6.
 */
import * as func from "../function"
import actions from "./actions"
import mutations from "./mutations"
import getters from "./getters"

const state = func.theme.get() || {
    theme:'green'
}

export default {
    state,
    actions,
    mutations,
    getters
}
