<template>
    <div>
        <h1 class="title is-2">Data Kasus Covid-19 di seluruh dunia</h1>
        <div class="columns">
            <div class="column">
                <div class="box">
                    <div class="content has-text-centered">
                        <h1 class="title is-1 positif" v-text="global.confirmed.value.toLocaleString()"></h1>
                        <p v-if="global.confirmed.value">Positif</p>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="box">
                    <div class="content has-text-centered">
                        <h1 class="title is-1 sembuh" v-text="global.recovered.value.toLocaleString()"></h1>
                        <p v-if="global.recovered.value">Sembuh</p>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="box">
                    <div class="content has-text-centered">
                        <h1 class="title is-1 meninggal" v-text="global.deaths.value.toLocaleString()"></h1>
                        <p v-if="global.deaths.value">Meninggal</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                global: {
                    confirmed:{
                        value: "".toLocaleString()
                    },
                    recovered:{
                        value: "".toLocaleString()
                    },
                    deaths:{
                        value: "".toLocaleString()
                    }
                }
            }
        },
        created() {
            axios.get('https://covid19.mathdro.id/api')
                .then(response => this.global = response.data)
                .catch(error => console.log(error));
        }
    }
</script>
<style scoped>
.box {
    background-color: white !important;
    margin: 10%;
}
</style>