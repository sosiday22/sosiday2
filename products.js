import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

const site = 'https://vue3-course-api.hexschool.io/v2/';
const path = 'so22'
const token = document.cookie.replace(/(?:(?:^|.*;\s*)so22Token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
axios.defaults.headers.common['Authorization'] = token;

const app = createApp({
    data() {
        return {
            products: [],
            tempProduct: {}
        }
    },
    methods: {
        checkLogin() {
            const url = `${site}api/user/check`;
            axios.post(url)
                .then(res => {
                    this.getProducts();
                });
        },

        getProducts() {
            const url = `${site}api/${path}/admin/products/all`;
            axios.get(url)
                .then(res => {
                    this.products = res.data.products
                });
        },
    },
    mounted() {

        this.checkLogin();

    }

});

app.mount('#app') 
