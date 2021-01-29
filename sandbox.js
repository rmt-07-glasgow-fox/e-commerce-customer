const axios = require('axios')

axios({
    method: 'POST',
    url: 'https://ecommerce-customer-mine.herokuapp.com/users/login',
    data: {
        email: "admin@gmail.com",
        password: "1234",
        // role: 'admin'
    },
})
    .then(({ data }) => {
        console.log(data, 'ini hasill login')
        // localStorage.setItem('access_token', data.access_token)
        // router.push('/products')
    })
    .catch((err) => console.log(err))