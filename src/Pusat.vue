<template>
    <div>
        <div class="columns">
            <div class="column">
                <div class="box">
                    <div class="content has-text-centered">
                        <h1 class="title is-1 positif">2491</h1>
                        <p>Positif</p>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="box">
                    <div class="content has-text-centered">
                        <h1 class="title is-1 rawat">2090</h1>
                        <p>Karantina</p>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="box">
                    <div class="content has-text-centered">
                        <h1 class="title is-1 sembuh">192</h1>
                        <p>Sembuh</p>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="box">
                    <div class="content has-text-centered">
                        <h1 class="title is-1 meninggal">209</h1>
                        <p>Meninggal</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
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
</style>

