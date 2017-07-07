/**
 * Created by dell、 on 2017/7/6.
 */
const localEvent = function (item) {
    this.get = function () {
        return localStorage.getItem(item)?JSON.parse(localStorage.getItem(item)):'';
    }
    this.set = function (obj) {
        localStorage.setItem(item,JSON.stringify(obj));
    }
    this.clear = function () {
        localStorage.removeItem(item);
    }
}

export const local = new localEvent('my_notepad');
export const theme = new localEvent('my_theme');
export const getDate = () =>{
    const date = new Date(),
          month = date.getMonth()+1;
    return `${date.getFullYear()}-${month}-${date.getDate()}`
}
