import emailService from '../../service/email-service.js'

export default {
    template: `
    <section class="email-details-container" v-if="currEmail">
        <div class="btns-header">
            <router-link class="btn-delete btn-det" :to="'/email/'+prevEmailId">Prev Email</router-link>
            <div>
                <button title="Back To Inbox" @click="returnToList"><i class="fas fa-arrow-circle-left btn-delete"></i></button>
                <button title="Mark as starred" class="btn-delete" :class="{star: currEmail.isStar}" @click="starEmail(currEmail.id)"><i class="far fa-star"></i></i></button>
                <button title="Delete" class="btn-delete" @click.prevent="deleteEmail(currEmail.id)"><i class="fas fa-trash-alt"></i></button>
                <button title="Reply" class="btn-delete" @click="replyEmail(currEmail.id)">
                    <i class="fas fa-reply"></i>
                </button>
                <button @click="unReadMail" title="Mark as unread"><i class="fas fa-envelope btn-delete"></i></button>
            </div>
            
            <router-link class="btn-delete btn-det" :to="'/email/'+nextEmailId">Next Email</router-link>

        </div>
       <div class="title-header-email">
           <div class="header-email-det">
               <h2 class="subject-email-det">{{currEmail.from}}</h2>
               <h2 class="subject-email-det">{{currEmail.subject}}</h2>
               <h3 class="subject-email-det">{{timeTostr(currEmail.sentAt)}}</h3>
           </div>
           <p class="body-det">{{currEmail.body}}</p>

       </div>
    </section>
    `,
    data() {
        return {
            currEmail: null,
            nextEmailId: '',
            prevEmailId: '',
        }
    },
    methods:{
        returnToList(){
            this.$router.push('/')
        },
        readMail(emailId){
            this.$emit('readMail',emailId)
        },
        unReadMail(){
            this.$emit('unReadMail', this.currEmail.id)
            this.$router.push('/')
        },
        deleteEmail(emailId){
            this.$emit('deleteEmail',emailId)
            this.$router.push('/')

        },
        starEmail(emailId){
            this.currEmail.isStar = !this.currEmail.isStar
            this.$emit('starEmail',emailId)
        },
        getEmail(){
            const emailId = this.$route.params.emailId;
            emailService.getEmailByID(emailId)
            .then(currEmail => {
                this.currEmail = currEmail
                this.readMail(this.currEmail.id)
            })
            emailService.nextEmail(emailId)
                .then(next => {
                    this.nextEmailId = next.id
                })
            emailService.prevEmail(emailId)
                .then(prev => {
                    this.prevEmailId = prev.id
                })
        },
        timeTostr(time){
            return moment.unix(time).format("MM/DD/YYYY")
        },
        replyEmail(emailId){
            this.$router.push(`/sendEmail/${emailId}`)
        }
    },
    created() {
     this.getEmail()
   },
   watch: {
    '$route.params.emailId': function (id, prevValue) {
        // console.log('Watch - ROUTE PARAM WAS CHANGED', id, 'PREV:', prevValue);
        this.getEmail()
      }
  }
}


