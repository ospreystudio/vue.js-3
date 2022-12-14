const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            confirmName: ''
        }
    },
    methods: {
        add(num) {
            this.counter += num
        },
        reduce(num) {
            this.counter -= num
        },

        setName(event) {
            this.name = event.target.value
        },
        submitForm() {
          alert('Submitted!!!')
        },
        confirmInput() {
            this.confirmName = this.name
        }

    }
});

app.mount('#events')