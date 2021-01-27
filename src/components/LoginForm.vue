<template>
    <div class='container'>
        <div class='row content'>
            <div class='col-md-6 mb-3'>
                <img src='../assets/images/signin-image.jpg' class='img-fluid' alt='image'>
            </div>
            <div class="col-md-6">
                <h3 class='signin-text mb-3'> Login </h3>
                <form>
                    <div class="form-group">
                        <label for="formGroupExampleInput">Email</label>
                        <input type="email" class='form-control' id="formGroupExampleInput" placeholder="Type in your email...">
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput2">Password</label>
                        <input type="password" class='form-control' id="formGroupExampleInput2" placeholder="Type in your password...">
                    </div>
                    <button class='btn btn-class'>Login</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'LoginForm'
}
</script>

<style scoped>

</style>
