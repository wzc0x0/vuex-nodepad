/**
 * Created by dell、 on 2017/7/6.
 */
import * as func from '../function';
import actions from './action'
import mutations from './mutations'
import getters from './getters'

const state = func.local.get() || {
        event:[],
        count:0
};
export default {
    state,
    getters,
    actions,
    mutations
}
