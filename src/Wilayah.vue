<template>
    <div class="columns is-multiline">
        <div class="column is-one-third" v-for="prov in searchWilayah">
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
</template>

<script>
    export default {
        data() {
            return {
                wilayah: {},
                error: ""
            }
        },
        filters: {
            uppercase(data) {
                return data.toUpperCase();
            }
        },
        computed: {
            searchWilayah() {
                return this.wilayah.filter((prov) => {
                    return prov.provinsi.match(this.query)
                })
            }
        },
        created() {
            axios.get("https://indonesia-covid-19.mathdro.id/api/provinsi")
                .then(response => this.wilayah = response.data.data)
                .catch(error => this.error = error);
        }
    }
</script>
