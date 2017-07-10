/**
 * Created by dell、 on 2017/7/6.
 */
import * as type from './mutations_type'
import * as func from '../function'

export default {
    [type.ADDEVENT](states,obj){
        states.count++;
        obj.items.id = states.count;
        states.event.unshift(obj.items);
        func.local.set(states)
    },
    [type.EVENTDONE](states,obj){
        states.event.forEach((item,i,arr) =>{
            if(arr[i].id === obj.id){
                arr[i].type = 2;
                arr[i].time = func.getDate();
                arr.splice(i,1,arr[i]);
            }
        });
        func.local.set(states);
    },
    [type.EVENTTODO](states,obj){
        states.event.forEach((item,i,arr) =>{
            if(arr[i].id === obj.id){
                arr[i].type = 1;
                arr[i].time = func.getDate();
                arr.splice(i,1,arr[i]);
            }
        });
        func.local.set(states);
    },
    [type.EVENTCANCEL](states,obj){
        states.event.forEach((item,i,arr) =>{
            if(arr[i].id === obj.id){
                arr[i].type = 3;
                arr[i].time = func.getDate();
                arr.splice(i,1,arr[i]);
            }
        });
        func.local.set(states);
    },
    [type.CLEAREVENT](states){
        states.event = [];
        func.local.clear();
    },
    [type.DELEVENT](states,info){
        if(states.event[info.index].id === info.id){
            states.event.splice(info.index,1)
        }else {
            states.event.filter((item,i)=>{
                if(d.id === info.id){
                    states.event.splice(i,1)
                }
            })
        }
        func.local.set(states);
    },
    [type.EDITEVENT](states,info){
        if(states.event[info.index].id === info.id){
                states.event[info.index].content = info.content;
        }else {
            states.event.filter(item=>{
                if(item.id === info.id){
                    item.content = info.content;
                }
            })
        }
        func.local.set(states);
    },
    [type.UPLOADEVENT](states,data){
        data = JSON.parse(data);
        states.event = data.event.event;
        states.count = data.event.count;
        func.local.set(states);
    }

}
