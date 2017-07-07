/**
 * Created by dell、 on 2017/7/6.
 */
export default {
    addevent: ({commit}, param) => commit('ADDEVENT', {items: param}),
    eventdone: ({commit}, param) => commit('EVENTDONE', {id: param}),
    eventtodo: ({commit}, param) => commit('EVENTTODO', {id: param}),
    eventcancel: ({commit}, param) => commit('EVENTCANCEL', {id: param}),
    clearevent: ({commit}) => commit('CLEAREEVENT'),
    delevent: ({commit}, param) => commit('DELEVENT',param),
    editevent:({commit},param) => commit('EDITEVENT',param),
    uploadevent:({commit},param) => commit('UPLOADEVENT',param)
}
