<template>
  <Header />
  <router-view/>
  <Footer />
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import Header from "./components/common/Headers/Header.vue";
import Footer from "./components/common/Footers/Footer.vue";

onMounted(() => {
  AOS.init({
    duration: 1200,
  });
});
</script>

