import axios from '@/api/axios.js'
import Swal from 'sweetalert2'

export default {
  fetchProducts (context) {
    Swal.queue([
      {
        title: 'Now Loading...',
        text: 'Keep calm because we are fetching our products.',
        showConfirmButton: false,
        didOpen: async () => {
          Swal.showLoading()
          try {
            const { data } = await axios({
              method: 'GET',
              url: '/product'
            })

            context.commit('fetchProducts', data)
            Swal.close()
          } catch (err) {
            console.error(err.response.data.errors)
            const errMsg = err.response.data.errors

            Swal.fire({
              icon: 'error',
              title: 'Oops..',
              text: errMsg
            })
          }
        }
      }
    ])
  }
}
