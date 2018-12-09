import emailApp from './pages/Email-app.cmp.js';
import emailDetails from './pages/email-pages/email-details.cmp.js'
import emailList from './cmps/email-cmps/email-list.cmp.js'
import emailSend from './cmps/email-cmps/email-send.cmp.js'
import about from './pages/about.cmp.js'


var routes = [    
    {path: '/about', component: about },
    {path: '/', component: emailApp, children: [
        { path: '', component: emailList },
        { path: 'sendEmail/:emailId?', component: emailSend },
        {path: ':emailId', component: emailDetails},
    ] },
]

export default routes;
