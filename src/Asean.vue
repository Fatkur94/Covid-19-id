<template>
    <div>
        <hr>
        <h1 class="title is-4 has-text-centered">Kawasan Asean</h1>
        <div class="table table-container">
            <table class="table is-bordered is-striped is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th>Negara</th>
                        <th>Positif</th>
                        <th>Kasus Aktif</th>
                        <th>Sembuh</th>
                        <th>Meninggal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>{{thailand.countryRegion}}</strong></td>
                        <td>{{thailand.confirmed}}</td>
                        <td>{{thailand.active}}</td>
                        <td>{{thailand.recovered}}</td>
                        <td>{{thailand.deaths}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                all: {},
                thailand: {},
                myanmar: {},
                laos: {},
                vietnam: {},
                malaysia: {},
                singapore: {},
                indonesia: {},
                brunei: {},
                papuaNewGuinea: {}
            }
        },
        created() {
            axios.get('https://covid19.mathdro.id/api/confirmed')
                .then(response => this.all = response.data.forEach(country => {
                    switch (country.countryRegion) {
                        case "Thailand":
                            console.log(country)
                            this.thailand = country;
                        case "Burma":
                            this.myanmar = country.countryRegion;
                        case "Laos":
                            this.laos = country.countryRegion;
                        case "Vietnam":
                            this.vietnam = country.countryRegion;
                        case "Malaysia":
                            this.malaysia = country.countryRegion;
                        case "Singapore":
                            this.singapore = country.countryRegion;
                        case "Brunei":
                            this.brunei = country.countryRegion;
                        case "Papua New Guinea":
                            this.papuaNewGuinea = country.countryRegion;
                    }
                }))
                .catch(error => console.log(error));
        }
        
    }
</script>

<style scoped>
.table-container {
    margin: 3%
}
</style>