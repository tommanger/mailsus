import emailService from '../../service/email-service.js'


export default {
    template: `
    <section class="send-email-container">
        <form class="email-send-form title-header-email" @submit.prevent="sendEmail">
            <input placeholder="from:" class="input-sent-email input-border-send" type="text" v-model="email.from">
            </span><input placeholder="subject:" class="input-sent-email" type="text" v-model="email.subject">
            <textarea class="body-send-email" v-model="email.body" cols="30" rows="10"></textarea>
            <button class="btn-submit-email" type="submit">Send</button>
        </form>
    </section>
    `,
    data() {
        return {
            email: {
                from: '',
                subject: '',
                body: '',
            },
            currEmail: null,
        }
    },
    methods:{
        sendEmail(){
            // console.log(this.email)
            if(this.currEmail){
                // console.log(this.currEmail.id)
                this.$emit('changeEmail',this.currEmail.id, this.email)
            }else{
                this.$emit('sendEmail',this.email)
            }
            this.$router.push('/')
        },
        getEmail(){
            const emailId = this.$route.params.emailId;
            // console.log(emailId)
            if(emailId){
                emailService.getEmailByID(emailId)
                .then(currEmail => {
                    this.currEmail = currEmail
                    this.email.from = currEmail.from
                    this.email.subject = currEmail.subject
                    this.email.body = currEmail.body
                })
            }
        }
    },
    created() {
        this.getEmail()

    },
    computed:{

    }
}
