<template>
    <div>
        <div id="register">
            <div id="register-box" class="col-4 mx-auto">
                <div id="title-form">
                    <h1 style="font-family: 'Caveat', cursive; border-bottom:2px solid black; display:inline-block; padding-bottom:1px;"><b>BelanjaYuk</b></h1>
                </div>
                <form class="d-flex flex-column" @submit.prevent="register">
                    <div id="form-register">
                        <label for="name" id="form-label-name">name</label>
                        <input v-model="name" type="text" id="form-input-name" placeholder="name">
                        <img src="https://freeiconshop.com/wp-content/uploads/edd/person-outline.png" id="input_img">
                    </div>
                    <div id="form-register">
                        <label for="email" id="form-label-email">email</label>
                        <input v-model="email" type="text" id="form-input-email" placeholder="email">
                        <img style="position:absolute; bottom:11px; left:6px; width:22px; height:20px;" src="https://assets.stickpng.com/images/584856b4e0bb315b0f7675ac.png">
                    </div>
                    <div id="form-register">
                        <label for="password" id="form-label-password">password</label>
                        <input v-model="password" type="password" id="form-input-password" placeholder="password">
                        <img src="https://i.dlpng.com/static/png/6599969_preview.png" id="input_img">
                    </div>
                    <button class="shadow-lg" type="submit" id="btn-register">Register</button>
                </form>
                <div id="navigation">
                  <p>already have an account? <a id="linkTo" @click="toLogin">login</a></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    toLogin () {
      this.$router.push({ path: '/login' })
    },
    errorMessage (errorMessage) {
      Swal.fire({
        title: errorMessage,
        icon: 'error',
        confirmButtonText: 'back'
      })
    },
    register () {
      const payload = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('register', payload)
        .then(({ data }) => {
          this.$router.push({ path: '/login' })
        })
        .catch(error => {
          console.log(error.response)
          this.errorMessage(error.response.data.message)
        })
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');
  #register {
    height: 600px;
  }
  #register-box {
    width: 400px;
    margin-top: 70px;
    height: 550px;
    background-color: rgb(243, 242, 242);
    box-shadow: 0 40px 40px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
  #form-register {
    position: relative;
    padding: 15px 0 0;
    margin-top: 10%;
    width: 60%;
    margin-left: 17%;
  }
  #form-label-password, #form-label-email, #form-label-name {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
  }
  #form-input-email, #form-input-password, #form-input-name {
    margin-top: 10px;
    font-family: inherit;
    width: 110%;
    border: 0;
    border-bottom: 2px solid #9b9b9b;
    outline: 0;
    font-size: 1rem;
    color:black;
    padding: 7px 7px;
    border-radius: 5px;
    padding-left: 34px;
  }
  #input_img {
    position:absolute;
    bottom:15px;
    left:10px;
    width:13px;
    height:14px;
  }
  #btn-register {
    margin-top: 40px;
    width: 30%;
    height: 50px;
    margin-left: 35%;
    outline: none;
    border-radius: 5px;
    font-size: 1.5rem;
    border: 0;
    background-color: black;
    color: white;
  }
  #btn-register:hover {
    background-color: transparent;
    color: black;
    outline: none;
    transition: 0.5s;
  }
  #navigation {
    margin-top: 30px;
  }
  #linkTo {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
    opacity: 0.8;
    transition: 0.3s;
  }
  #linkTo:hover {
    transition: 0.3s;
    color: black;
    opacity: 1;
  }
</style>
