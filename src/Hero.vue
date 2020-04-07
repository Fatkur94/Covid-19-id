<template>
    <div>
<section class="hero is-white is-medium">
  <!-- Hero head: will stick at the top -->
    <covid-header></covid-header>

  <!-- Hero content: will be in the middle -->
    <div class="hero-body">
        <div class="container has-text-centered">
            <covid-pusat></covid-pusat>
            
            <covid-search></covid-search>
        </div>
    </div>

  <!-- Hero footer: will stick at the bottom -->
    <div class="hero-foot">

    </div>
</section>



    </div>
</template>

<script>
    import CovidPusat from "./Pusat.vue"
    import Search from "./Search.vue"
    import Header from "./Header.vue"

    export default {
        components: {
            CovidPusat: CovidPusat,
            CovidSearch: Search,
            CovidHeader: Header
        }
    }
</script>
