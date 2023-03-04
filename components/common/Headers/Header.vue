<template>
  <div>
    <div :class="`${isSticky ? `theme-main-menu sticky-menu theme-menu-one fixed 
    ${center_white ? 'center-white' : ''}` 
    : `theme-main-menu sticky-menu theme-menu-one ${center_white ? 'center-white' : ''}`}`">
      <div :class="`d-flex align-items-center ${center_white ? 'justify-content-center' : 'justify-content-between'}`">
        <div class="logo">
          <routerLink to="/">
            <h4 class="logotext">Zespół Specjalistycznych Gabinetów Lekarskich</h4>
          </routerLink>
        </div>
        <nav id="mega-menu-holder" class="navbar navbar-expand-lg">
          <div class="nav-container">
            <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar"
            :class="menuActive ? 'navbar-toggler open' : 'navbar-toggler'" @click="menuActive = !menuActive">
            <span></span>
          </button>
            <div class="navbar-collapse collapse" id="collapsibleNavbar">
              <div class="d-lg-flex align-items-center">
                <!-- nav menu start -->
                <NavMenu/>
                <!-- nav menu end -->
                <ul class="right-button-group d-flex align-items-center justify-content-center">
                  <li>
                    <button class="telephoneButton d-flex align-items-center">
                      tel. 33 842 43 42
                    <img class="telephoneImg" src="../../../assets/images/logos_/white/icons/phone-icon.svg" alt="">
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import NavMenu from './NavMenu.vue';

export default {
  name: "HeaderComponent",
  props:{center_white:Boolean},
  components:{
    NavMenu
  },
  data() {
    return {
      isSticky: false,
      menuActive: false,
    }
  },
  methods: {
    handleSticky() {
      if (window.scrollY > 80) {
        this.isSticky = true;
      }
      else {
        this.isSticky = false;
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleSticky)
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.logotext {
  font-family: 'Bebas Neue', cursive;
  font-size: 2vw;
  background-image: linear-gradient(rgba(168, 210, 203, 0.637), rgb(168, 210, 203));
  background-size: 100% 10px;
  background-repeat: no-repeat;
  background-position: 100% 0%;
   transition: background-size .7s, background-position .5s ease-in-out;
}

.logotext:hover {
  background-size: 100% 100%;
  background-position: 0% 100%;
  transition: background-position .7s, background-size .5s ease-in-out;
}

@media screen and (max-width: 991px) {
  .logotext {
    font-size: 20px;
  }
}
</style>