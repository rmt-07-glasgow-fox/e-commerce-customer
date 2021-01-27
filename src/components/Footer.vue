<template>
  <footer class="relative bg-gray-400 pt-8 pb-6">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4">
          <h5 class="text-medium mt-0 mb-2 text-black">
            Free shipping all over Indonesia
          </h5>
          <img src="../assets/fast-delivery.png" style="width: 35px" alt="">
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <div class="flex flex-wrap items-top mb-6">
            <div class="w-full lg:w-4/12 px-4 ml-auto">
            </div>
            <div class="w-full lg:w-4/12 px-4">
              <span
                class="block uppercase text-gray-200 text-sm font-semibold mb-2"
                >Contact us:</span
              >
              <ul class="list-unstyled">
                <li>
                  <a
                    class="text-gray-300 hover:text-gray-400 block pb-2 text-sm"
                    href="#"
                    >About</a
                  >
                </li>
                <li>
                  <a
                    class="text-gray-300 hover:text-gray-400 block pb-2 text-sm"
                    href="#"
                    >Terms &amp; Conditions</a
                  >
                </li>
                <li>
                  <a
                    class="text-gray-200 hover:text-gray-100 block pb-2 text-sm"
                    href="#"
                    >Track Your Order</a
                  >
                </li>
                <li>
                  <a
                    class="text-gray-200 hover:text-gray-100 block pb-2 text-sm"
                    href="#"
                    >Privacy Policy</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-white" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-white font-semibold py-1">
            E-Commerce Portfolio © {{date}} by Amanda Rizqi
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data () {
    return {
      date: new Date().getFullYear()
    }
  }
}
</script>
