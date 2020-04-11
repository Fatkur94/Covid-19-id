<template>
    <div>
        <footer class="footer">
          <covid-global></covid-global>
        </footer>
    </div>
</template>

<script>
    import Global from './Global.vue'
    export default {
        components: {
			CovidGlobal: Global
		}
    }
</script>

<style scoped>
footer {
  background-color:#f1f1f1;
}
</style>
