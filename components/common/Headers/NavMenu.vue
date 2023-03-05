<template>
  <ul class="navbar-nav">
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
        >Poradnie</a
      >
      <ul class="dropdown-menu">
        <li v-for="(menu, index) in portfolio_data" :key="index">
          <router-link :to="menu.url" class="dropdown-item" >{{
            menu.title
          }}</router-link>
        </li>
      </ul>
      <!-- /.dropdown-menu -->
    </li>
    <li class="nav-item dropdown mega-dropdown-md">
      <a class="nav-link" href="#footer">Kontakt</a>
    </li>
  </ul>
</template>

<script>
// import megaMenus from "./mega-menus.vue";

export default {
  name: "NavMenu",
  components: {
    // megaMenus,
  },
  data() {
    return {
      portfolio_data: [
      {
          url: "/okulistyczna",
          title: "Okulistyczna",
        },
        {
          url: "/kardiologiczna",
          title: "Kardiologiczna",
        },
        {
          url: "/urologiczna",
          title: "Urologiczna",
        },
        {
          url: "/ginekologiczna",
          title: "Ginekologiczna",
        },
        {
          url: "/ortopedyczna",
          title: "Ortopedyczna",
        },
        {
          url: "/chirurgii",
          title: "Chirurgii",
        },
        {
          url: "/radiologiczna",
          title: "Radiologiczna",
        },
        {
          url: "/medycynypracy",
          title: "Medycyny Pracy",
        },
        {
          url: "/reumatologiczna",
          title: "Reumatologiczna",
        },
        {
          url: "/internistyczna",
          title: "Internistyczna",
        },
        {
          url: "/dietetyczna",
          title: "Dietetyczna",
        },
        {
          url: "/stomatologii",
          title: "Stomatologii",
        },
        {
          url: "/ortodontyczna",
          title: "Ortodontyczna",
        }
      ],
    };
  },
};
</script>
