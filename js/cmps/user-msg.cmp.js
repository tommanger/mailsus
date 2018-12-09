
export default {
    template: `
        <section class="user-msg" :class="msg.type" v-if="msg">
            <h6>{{msg.txt}}</h6>
        </section>
    
    `,
    data() {
        return {
            msg: null
        }
    },
    created() {
        eventBus.$on(SHOW_USER_MSG, msg=>{
            this.msg = msg;
            var delay = 3000;
            setTimeout(()=>{
                this.msg = null;
            }, delay)
        })
    }
}