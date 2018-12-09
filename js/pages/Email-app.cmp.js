import emailList from "../cmps/email-cmps/email-list.cmp.js";
import navBarEmail from "../cmps/email-cmps/nav-bar-email.cmp.js";
import menuEmail from "../cmps/email-cmps/menu-email.cmp.js";
import emailService from "../service/email-service.js";

import emailDetails from "../pages/email-pages/email-details.cmp.js";

export default {
  template: `
    <section>
        <nav-bar-email @filterEmails="setFilter"></nav-bar-email>
        <div class="email-container">
          <menu-email id="menu-email" class="hide" :counter="counter" @sortBy="sortBy" @filterByRead="setFilter"></menu-email>
          <transition name="width">
          <router-view @changeEmail="changeEmail"	 
                        @sendEmail="sendEmail" 
                        @readMail="readMail"
                        @unReadMail="unReadMail"
                        @deleteEmail="deleteEmail"
                        @starEmail="starEmail"
                        :emailList="emailList">
            </router-view>
            </transition>


        </div>
    </section>
    `,
  data() {
    return {
      filter: null,
      emailList: null,
      counter: {},
      isMenuShow: false,
    };
  },
  methods: {
    setFilter(filter) {
      this.filter = { ...filter };

      emailService.getEmailsList(this.filter)
        .then(emailsList => (this.emailList = emailsList));
    },

    deleteEmail(emailId) {
      this.emailList = this.emailList.filter(email => {
        return email.id !== emailId;
      });
      emailService.deleteEmail(emailId)
      .then(this.setCounter)
    },

    sendEmail(email){
      this.emailList.unshift(email)
      emailService.sendEmail(email)
      .then(this.setCounter)

    },

    readMail(emailId){
      let email = this.emailList.find(email => email.id === emailId)
      email.isRead = true
      emailService.readMail(emailId)
      .then(this.setCounter)

    },
    unReadMail(emailId){
      let email = this.emailList.find(email => email.id === emailId)
      email.isRead = false
      emailService.unReadMail(emailId)
      .then(this.setCounter)

    },
    starEmail(emailId){
      var email = this.emailList.find(email => email.id === emailId)
      email.isStar = !email.isStar
      emailService.starEmail(emailId)
      .then(this.setCounter)

    },
    changeEmail(emailId, newEmail){
      // console.log(emailId, newEmail)
      var email = this.emailList.find(email => email.id === emailId)
      email.from = newEmail.from
      email.subject = newEmail.subject
      email.body = newEmail.body
      emailService.changeEmail(emailId, newEmail)
    },
    sortBy(val){
      if(val === 'date'){
        this.emailList = this.emailList.sort((a,b)=> b.sentAt - a.sentAt)
      } else if(val === 'title'){
        this.emailList = this.emailList.sort((a,b)=>{
          if(a.subject.toUpperCase() > b.subject.toUpperCase()) return 1;
          else if(a.subject.toUpperCase() < b.subject.toUpperCase()) return -1;
          else return 0
        })
      }
    },
    setCounter(){
      emailService.getEmailsList()
      .then(emailList => {
        this.counter = emailList.reduce((counter, email) => {
          if (email.isRead) counter.read++
          else counter.unread++
          if (email.isStar) counter.starred++
          return counter
        }, {
          all: emailList.length,
          read: 0,
          unread: 0,
          starred: 0
        })
      })
    }
  },
  computed:{
    // show(){
    //   if(!this.isMenuShow) return 'hide'
    // }
  },
  created() {
    emailService.getEmailsList()
      .then(emailList => {
        this.emailList = emailList
        this.setCounter()
      })
  },
  components: {
    emailList,
    emailDetails,
    navBarEmail,
    menuEmail
  },
};
