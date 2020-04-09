<template>
    <div>
        <footer class="footer">
          <covid-global></covid-global>
          <!-- <div class="content has-text-centered">
            <p>
              <strong>Covid-19</strong> by <a href="">Fatkur Rohman</a>. The source code is available at
              <a href="https://github.com/Fatkur94/Covid-19-id">Github</a>. The website content.
            </p>
          </div> -->
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
