<template>
    <div class="search">
        <article class="panel is-primary">

            <div class="tabs is-centered is-toggle">
                <ul>
                    <li class="is-active"><a>ALL</a></li>
                    <li><a>Provinsi</a></li>
                    <li><a>Kota</a></li>
                </ul>
            </div>
            <div class="panel-block">
                <p class="control has-icons-left">
                <input class="input is-primary is-medium" type="text" placeholder="Cari Wilayah">
                <span class="icon is-left">
                    <i class="fas fa-search" aria-hidden="true"></i>
                </span>
                </p>
            </div>

            <div class="panel-block columns">
                <covid-wilayah></covid-wilayah>
                <covid-wilayah></covid-wilayah>
                <covid-wilayah></covid-wilayah>
            </div>

        </article>

    </div>
</template>

<script>
    import Wilayah from "./Wilayah.vue"
    export default {
        components: {
            CovidWilayah: Wilayah
        }
    }
</script>

<style scoped>
.search {
    margin-top: 3rem;
    background-color: #f1f1f1 !important;
}
article {
    padding-top: 3rem;
    padding-bottom: 3rem;
}
</style>
