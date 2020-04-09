<template>
    <div>
        <h1 class="title is-2 lokal">Data Kasus Covid-19 di Indonesia saat ini</h1>
        <div class="columns" v-if="pusat">
            <div class="column">
                <div class="box">
                    <div class="has-text-right">
                        <span class="is-medium tag is-info">+{{ kemarin.jumlahKasusBaruperHari }}</span>
                    </div>
                    <div class="content has-text-centered">
                        <h1 class="title is-1 positif" v-text="pusat.jumlahKasus"></h1>
                        <p>Positif</p>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="box">
                    <div class="has-text-right" >
                        <span class="is-medium tag is-warning">+{{ kemarin.jumlahKasusDirawatperHari }}</span>
                    </div>
                    <div class="content has-text-centered">
                        <h1 class="title is-1 rawat" v-text="pusat.perawatan"></h1>
                        <p>Karantina</p>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="box">
                    <div class="has-text-right">
                        <span class="is-medium tag is-success">+{{ kemarin.jumlahKasusSembuhperHari }}</span>
                    </div>
                    <div class="content has-text-centered">
                        <h1 class="title is-1 sembuh" v-text="pusat.sembuh"></h1>
                        <p>Sembuh</p>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="box">
                    <div class="has-text-right">
                        <span class="is-medium tag is-danger">+{{ kemarin.jumlahKasusMeninggalperHari }}</span>
                    </div>
                    <div class="content has-text-centered">
                        <h1 class="title is-1 meninggal" v-text="pusat.meninggal"></h1>
                        <p>Meninggal</p>
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
                pusat: {},
                kemarin: {}
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
.box span {
        text-align: right !important;
}
p {
    font-size: 30px;
}
.lokal {
    padding-top: 2rem;
    padding-bottom: 2rem;
}

</style>

