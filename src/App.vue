<template>
    <div id="app" :class="[getTheme]">
        <v-header @tools="changePages"></v-header>
        <section class="container" :class="{hide:table}">
            <v-add></v-add>
            <v-list></v-list>
            <v-sidebar :is-show="tools"
                       @cleardialog="clearData"
                       @uploadData="uploadData"
                       @opentable="table=true;tools=true"
                       @opentheme="theme=true;tools=true"
            ></v-sidebar>
        </section>
        <transition name="dialog">
            <v-dialog v-show="dialog" :msg="tips" @cancel="dialog = false" @sure="sureDialog"></v-dialog>
        </transition>
        <v-table @deldialog="delData" :is-show="table" @close="table = false"></v-table>
        <v-theme :is-show="theme" @close="theme = false"></v-theme>
        <v-footer></v-footer>
    </div>
</template>
<script>
    import vHeader from "components/header.vue"
    import vFooter from "components/footer.vue"
    import vAdd from "components/event_add.vue"
    import vList from  "components/event_list.vue"
    import vSidebar from "components/sidebar.vue"
    import vTheme from "components/theme.vue"
    import vDialog from "components/dialog.vue"
    import vTable from "components/event_table.vue"

    export default{
        data(){
            return{
                tools:false,
                dialog:false,
                table:false,
                theme:false,
                dialog_type:"",
                tips:"",
                del_info:{
                    index:0,
                    id:0
                }
            }
        },
        components:{
            vHeader,vFooter,vAdd,vList,
            vTheme,vDialog,vTable,vSidebar
        },
        computed:{
            getTheme(){
                return this.$store.getters.getTheme;
            }
        },
        methods:{
            clearData(){
                this.tools = false;
                this.dialog = true;
                this.dialog_type = 'clear';
                this.tips = '清空后无法恢复，确认清空吗？';
            },
            delData(index,id){
                this.dialog = true;
                this.dialog_type = 'del';
                this.tips = '删除后无法恢复，确认删除吗？';
                this.del_info = {
                    index: index,
                    id : id
                }
            },
            uploadData(){
                this.tools = false;
                this.dialog = true;
                this.dialog_type = 'upload';
                this.tips = 'upload';
            },
            sureDialog(){
                const self = this;
                switch (self.dialog_type){
                    case 'clear':
                        self.$store.dispatch('clearevent');
                        break;
                    case 'del':
                        self.$store.dispatch('delevent',self.del_info);
                        break;
                }
                this.dialog = false;
            },
            changePages(){
                if(this.table){
                    this.table = !this.table;
                }else if(this.theme){
                    this.theme = !this.theme;
                }else{
                    this.tools = !this.tools
                }
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss" src="../static/theme.scss"></style>
<style lang="scss" rel="stylesheet/scss">
    html,body,ul,li,input,p{
        margin:0;
        padding:0;
    }
    body{
        font-size: 16px;
        font-family: "Helvetica Neue", Helvetica, "microsoft yahei", arial, STHeiTi, sans-serif;
    }
    input,button{
        -webkit-tap-highlight-color: transparent;
    }
    input[type=text]{
        -webkit-appearance: none;
    }
    button{
        padding:7px 0;
        outline: none;
        text-align: center;
        border-radius: 4px;
        box-sizing: border-box;
        font:{
            size:inherit;
            family: inherit;
        }
        cursor: pointer;
    }
    html,body{
        height: 100%;
    }
    ::-webkit-scrollbar{
        width: 0;
    }
    body,#app{
        width:100%;
        overflow-x: hidden;
    }
    #app{
        height: 100%;
        padding-bottom: 60px;
        box-sizing: border-box;
    }

    ul{
        list-style: none;
    }
    .container{
        width:100%;
        padding: 0 10px;
        max-width:800px;
        margin:auto;
        box-sizing: border-box;
        &.hide{
            display: none;
        }
    }
    .dialog-enter-active, .dialog-leave-active {
        transition: opacity .3s;
    }
    .dialog-enter, .dialog-leave-to{
        opacity: 0;
    }
</style>
