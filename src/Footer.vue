<template>
    <div>
        <footer class="footer">
          <covid-global></covid-global>
          <!-- <covid-asean></covid-asean> -->
        </footer>
    </div>
</template>

<script>
    import Global from './Global.vue'
    // import Asean from './Asean.vue'
    export default {
        components: {
        	CovidGlobal: Global,
			// CovidAsean: Asean
		}
    }
</script>

<style scoped>
footer {
  background-color:#f1f1f1;
}
</style>
