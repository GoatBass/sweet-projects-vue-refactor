
    const app = Vue.createApp({
        data() {
            return {
                filter: 'all'
            }
        },
        methods: {
            clickedFilter(event) {
                this.filter = event.target.dataset.filter
            },
            mustShow(item) {
                if(this.filter != 'all'){
                    return item == this.filter
                } else {
                    return true
                }  
            }
        },
    })


    app.mount('#store')

