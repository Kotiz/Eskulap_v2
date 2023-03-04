<template>
  <div class="main-page-wrapper p0 overflow-hidden">
    <div class="error-page d-lg-flex align-items-center">
      <div class="img-holder order-lg-last">
        <img src="../assets/images/media/404.svg" alt="" class="w-100 illustration">
        <img src="../assets/images/media/404-q.svg" alt="" class="shapes qus">
      </div>
      <div class="text-wrapper order-lg-first">
        <div class="logo"><router-link to="/"><img src="../assets/images/logo/deski_05.svg" alt=""></router-link></div>
        <h1 class="font-slab">Sorry, <br>The Page Can’t <br>be Found.</h1>
        <p class="font-rubik">quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
        <router-link to="/" class="back-home font-rubik d-flex align-items-center justify-content-center">
          <span>Back to Home</span>
          <img src="../assets/images/icon/53.svg" alt="">
        </router-link>
      </div> <!-- /.text-wrapper -->
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound"
}
</script>