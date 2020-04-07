<template>
  <div id="app">
    <section class="section">
        <covid-main></covid-main>
      <div class="container">
        <!-- <covid-search></covid-search> -->
        <covid-footer></covid-footer>
      </div>
    </section>
  </div>
</template>

<script>
import Footer from './Footer.vue'
import Hero from './Hero.vue'

export default {
  name: 'app',
  components: {
    covidFooter:  Footer,
    covidMain: Hero,
    // covidSearch: Search
  }
}
</script>
<style>
#app {
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
</style>
