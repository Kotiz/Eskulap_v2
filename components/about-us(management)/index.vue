<template>
  <div class="main-page-wrapper overflow-hidden">
    <Header/>
    <!-- <FancyHero/> -->
    <FancyTextBlock/>
    <!-- <FancyTextBlockTwo/> -->
  </div>
</template>

<script>
import Header from '../common/Headers/Header.vue';
// import FancyHero from './fancy-hero.vue';
import FancyTextBlock from './fancy-text-block.vue';
// import FancyTextBlockTwo from './fancy-text-block-2.vue';

export default {
    name: "AboutUsManagementMain",
    components: { Header, FancyTextBlock, }
}
</script>