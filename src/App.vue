<template>
  <div id="app">
    <section class="section">
        <covid-main></covid-main>
      <div class="container">
        <covid-footer></covid-footer>
      </div>
    </section>
    <div class="has-text-centered">
        <span>
          <strong>Covid-19</strong> by <a href="">Fatkur Rohman</a>. Source code : 
          <a href="https://github.com/Fatkur94/Covid-19-id">github</a>. Data source : 
          <a href="https://github.com/mathdroid/indonesia-covid-19-api">mathdroid</a>
        </span>
    </div>
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
