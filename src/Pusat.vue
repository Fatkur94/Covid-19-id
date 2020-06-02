<template>
    <div>
        <h1 class="title is-2 lokal">Data Kasus Covid-19 di Indonesia saat ini</h1>
        <div class="columns" v-if="pusat">
            <div class="column">
                <div class="box">
                    <div class="has-text-right">
                        <span class="is-medium tag is-info" v-if="kemarin.jumlahKasusBaruperHari">+{{ kemarin.jumlahKasusBaruperHari }}</span>
                    </div>
                    <div class="content has-text-centered">
                        <h1 class="title is-1 positif" v-text="pusat.jumlahKasus.toLocaleString()"></h1>
                        <p v-if="pusat.jumlahKasus">Positif</p>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="box">
                    <div class="has-text-right" >
                        <span class="is-medium tag is-warning" v-if="kemarin.jumlahKasusDirawatperHari">+{{ kemarin.jumlahKasusDirawatperHari }}</span>
                    </div>
                    <div class="content has-text-centered">
                        <h1 class="title is-1 rawat" v-text="pusat.perawatan.toLocaleString()"></h1>
                        <p v-if="pusat.perawatan">Karantina</p>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="box">
                    <div class="has-text-right">
                        <span class="is-medium tag is-success" v-if="kemarin.jumlahKasusSembuhperHari">+{{ kemarin.jumlahKasusSembuhperHari }}</span>
                    </div>
                    <div class="content has-text-centered">
                        <h1 class="title is-1 sembuh" v-text="pusat.sembuh.toLocaleString()"></h1>
                        <p v-if="pusat.sembuh">Sembuh</p>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="box">
                    <div class="has-text-right">
                        <span class="is-medium tag is-danger" v-if="kemarin.jumlahKasusMeninggalperHari">+{{ kemarin.jumlahKasusMeninggalperHari }}</span>
                    </div>
                    <div class="content has-text-centered">
                        <h1 class="title is-1 meninggal" v-text="pusat.meninggal.toLocaleString()"></h1>
                        <p v-if="pusat.meninggal">Meninggal</p>
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
                pusat: {
                    jumlahKasus: "".toLocaleString(),
                    perawatan: "".toLocaleString(),
                    sembuh: "".toLocaleString(),
                    meninggal: "".toLocaleString()
                },
                kemarin: {
                    jumlahKasusBaruperHari: "",
                    jumlahKasusDirawatperHari: "",
                    jumlahKasusSembuhperHari: "",
                    jumlahKasusMeninggalperHari: ""
                }
            }
        },
        created() {
            axios.get('https://indonesia-covid-19-api.now.sh/api')
                .then(response => this.pusat = response.data)
                .catch(error => console.log(error));

            axios.get('https://indonesia-covid-19.mathdro.id/api/harian')
                .then(response => this.kemarin = response.data.data.slice(-1)[0])
                .catch(error => console.log(error));
        }
    }
</script>

<style>
.positif {
    color: #3389fe !important;
}
.rawat {
    color: #f2c94c !important;
}
.sembuh {
    color: #219653 !important;
}
.meninggal {
    color: #d8232a !important;
}
.box {
    background-color: #f1f1f1 !important;
}
p {
    font-size: 30px;
}
.lokal {
    padding-top: 2rem;
    padding-bottom: 2rem;
}

</style>

