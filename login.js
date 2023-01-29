import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

const url = 'https://vue3-course-api.hexschool.io/v2/';

createApp({
    data() {
        return {
            user: {
                username: '',
                password: '',
            },
        }
    },
    methods: {
        login() {
            const api = `${url}admin/signin`;
            axios.post(api, this.user)
                .then((res) => {
                    const { token, expired } = res.data;
                    document.cookie = `so22Token=${token};expires=${new Date(expired)}; path=/`;
                    window.location = './products.html';
                })
        },
    },
}).mount('#app');