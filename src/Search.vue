<template>
    <div>
        <div class="border">
            <article class="panel is-primary">
                <div class="tabs is-centered is-toggle">
                    <ul>
                        <li class="is-active"><a>Provinsi</a></li>
                    </ul>
                </div>
                <div class="panel-block">
                    <p class="control has-icons-left">
                    <input class="input is-primary is-medium" type="text" placeholder="Ex=Riau" v-model="query">
                    <span class="icon is-left">
                        <i class="fas fa-search" aria-hidden="true"></i>
                    </span>
                    </p>
                </div>

                <div class="search-result">
                    <div class="columns is-multiline">
                        <div class="column is-one-quarter" v-for="prov in search">
                            <div class="card has-text-centered">
                                <div class="card-header">
                                    <p class="card-header-title is-centered"> {{ prov.provinsi | uppercase }}</p>
                                </div>
                                <div class="card-content">
                                    <div class="content">
                                        <p class="subtitle">Positif : <span class="positif">{{prov.kasusPosi.toLocaleString()}}</span></p>
                                        <p class="subtitle">Sembuh : <span class="sembuh">{{prov.kasusSemb.toLocaleString()}}</span></p>
                                        <p class="subtitle">Meninggal : <span class="meninggal">{{prov.kasusMeni.toLocaleString()}}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <span class="title tag is-danger is-light" v-if="error">{{error}}</span>
                    </div>
                </div>
            </article>
        </div>
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
.card-header-title {
    font-size: 140%;
}
.search-result {
    margin: 2%;
}
.border {
    margin-top: 3rem;
    background-color: #f1f1f1 !important;
}
article {
    padding-top: 3rem;
    padding-bottom: 3rem;
}
.table {
    padding-left: 2rem;
    padding-right: 2rem;
}

</style>
