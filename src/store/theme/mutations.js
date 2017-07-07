/**
 * Created by dell、 on 2017/7/6.
 */
import * as func from "../function"
export default {
    SWITCHTHEME(states,obj){
        states.theme = obj.theme;
        func.theme.set(states)
    }
}
