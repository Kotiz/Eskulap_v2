<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">Brand</a>
        <button class="navbar-toggler" type="button" 
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" 
            @click="visible=!visible"
            >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse" :class="!visible?'collapse':''" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
                <router-link to="/" class="nav-link" @click="visible=!visible">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/about" class="nav-link" @click="visible=!visible">About</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/more" class="nav-link" @click="visible=!visible">More</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'HeaderNavbar'
}
</script>