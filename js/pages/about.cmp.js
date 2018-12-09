


export default {

    template: `
    <section class="about-container">
        <img class="img-profile" src="/img/profiletom.png">
        <h4 class="about-title">Tom Manger</h4>
        <div class="social-container">
            <a :href="'//' + 'www.linkedin.com/in/tommanger'" target="_blank">
                <i @click="goTo('linkedin')" class="fab fa-linkedin about-icon"></i>
            </a>
            <a :href="'//' + 'www.github.com/tommanger'" target="_blank">
                <i @click="goTo('github')" class="fab fa-github-square about-icon"></i>
            </a>
        </div>
    </section>
    `,
    data() {
        return {

        }
    },
    methods: {

    },
    created() {
        console.log('koko')
    },
}