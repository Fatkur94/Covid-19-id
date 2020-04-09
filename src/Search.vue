<template>
    <div class="search">
        <article class="panel is-primary">

            <div class="tabs is-centered is-toggle">
                <ul>
                    <li class="is-active"><a>All</a></li>
                    <li><a>Provinsi</a></li>
                </ul>
            </div>
            <div class="panel-block">
                <p class="control has-icons-left">
                <input class="input is-primary is-medium" type="text" placeholder="Cari Wilayah" v-model="query">
                <span class="icon is-left">
                    <i class="fas fa-search" aria-hidden="true"></i>
                </span>
                </p>
            </div>

            <div class="panel-block">
                <div class="columns is-multiline">
                    <div class="column is-one-third" v-for="prov in search" v-if="query">
                        <div class="card">
                            <div class="card-header">
                                <p class="card-header-title" > {{ prov.provinsi | uppercase }}</p>
                            </div>
                            <div class="card-content">
                                <div class="content">
                                    <p class="subtitle">Positif : <span class="positif">{{prov.kasusPosi}}</span></p>
                                    <p class="subtitle">Sembuh : <span class="sembuh">{{prov.kasusSemb}}</span></p>
                                    <p class="subtitle">Meninggal : <span class="meninggal">{{prov.kasusMeni}}</span></p>
                                </div>
                            </div>
                            <footer class="card-footer">
                                <a href="" class="card-footer-item">Lihat selengkapnya...</a>
                            </footer>
                        </div>
                    </div>
                        <span class="title tag is-danger is-light" v-if="error">{{error}}</span>
                </div>
            </div>

        </article>

    </div>
</template>

<script>

    export default {
        data() {
            return {
                query: "",
                wilayah: [],
                error: ""
            }
        },
        filters: {
            uppercase(data) {
                return data.toUpperCase();
            }
        },
        created() {
            axios.get("https://indonesia-covid-19.mathdro.id/api/provinsi")
                .then(response => this.wilayah = response.data.data.filter( item => {
                        if (item.provinsi == "Indonesia") {
                            item = "";
                        }
                        return item;
                    }
                ))
                .catch(error => this.error = error);
        },
        computed: {
            search() {
                return this.wilayah.filter(item => {
                    return item.provinsi.toUpperCase().match(this.query.toUpperCase())
                });
            }
        }
    }
</script>

<style scoped>
.card {
    text-align: center !important;
}
.search {
    margin-top: 3rem;
    background-color: #f1f1f1 !important;
}
article {
    padding-top: 3rem;
    padding-bottom: 3rem;
}
</style>
