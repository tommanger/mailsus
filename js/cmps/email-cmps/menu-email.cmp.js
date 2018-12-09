
export default {
    props:['counter'],
    template: `
    <section>
        <div class="manu-email">
        <router-link @click.native="compose" class="btn-send-email" to="/sendEmail">
        <span class="air-send-btn"><i class="fab fa-telegram-plane"></i></span>compose</router-link>

            <router-link to="/">
                <button @click="readClick({by: null})" class="btn-manu-email">Inbox - {{counter.all}}</button>
                <button @click="readClick({by: true, type: 'read'})" class="btn-manu-email">Read - {{counter.read}}</button>
                <button @click="readClick({by: false, type: 'read'})" class="btn-manu-email">Unread - {{counter.unread}}</button>
                <button @click="readClick({by: true, type: 'star'})" class="btn-manu-email">Starred - {{counter.starred}}</button>
                <select class="select-btn btn-manu-email" v-model="selectedSort" @change="sortBy">
                    <option value="date">Date</option>
                    <option value="title">Title</option>
                </select>
            </router-link>
        </div>
    </section>
    `,
    data() {
        return {
            selectedSort: 'date',

        }
    },
    methods:{
        readClick(val){
            this.$emit('filterByRead', val)
            document.querySelector('#menu-email').classList.toggle('hide')
        },
        sortBy(){
            // console.log(this.selectedSort)
            this.$emit('sortBy', this.selectedSort)
            document.querySelector('#menu-email').classList.toggle('hide')
        },
        compose(){
            document.querySelector('#menu-email').classList.toggle('hide')
        }
    },
    created() {
    },
}
