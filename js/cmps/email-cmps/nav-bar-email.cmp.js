
export default {
    template: `
    <section>
        <div class="nav-bar-email">
            <button @click="isMenuShow" class="toggel-menu-btn"><i class="fas fa-bars"></i></button>
            <input placeholder="Search mail" class="filter-emails" type="text" v-model="filter.by" @input="emitFilter">
        </div>
    </section>
    `,
    data() {
        return {
            filter: {by: ''}

        }
    },
    methods:{
        emitFilter(){
            this.$emit('filterEmails', this.filter)
        },
        isMenuShow(){
            document.querySelector('#menu-email').classList.toggle('hide')
        }
    },
    created() {
    },
}
