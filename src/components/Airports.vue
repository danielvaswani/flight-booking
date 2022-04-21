<template>
    <section>
        <div class="airport-row">
            <h1>Airport</h1>
            <div>
                <button v-if="state.showDropdown" @click="toggleDropdown" id="cancel">Cancel</button>
            </div>
        </div>
        <div v-if="!state.showDropdown" class="airport current-airport">
            <h4>{{ currentAirport.name }}, {{ currentAirport.city }}, {{ currentAirport.country }}</h4>
            <h5>{{ currentAirport.iata }}</h5>
            <button @click="toggleDropdown" id="airport-dropdown-icon">
                <img src="@/assets/chevron-down-solid.svg" />
            </button>
        </div>
        <div v-else class="airport" v-for="a in airports" v-bind:key="a.id">
            <h4 @click="handleAirportClick(a)">
                {{ a.name }}
            </h4>
        </div>
    </section>
</template>

<script setup>
import { computed, reactive } from "vue";
import airportsJson from "@/assets/airports.json";


const airports = reactive([...airportsJson])
const state = reactive({ showDropdown: false, currentId: "3797" })

const currentAirport = computed(() => {
    return airports.filter(a => a.id === state.currentId)[0];
})

const toggleDropdown = () => {
    state.showDropdown = !state.showDropdown
}

const handleAirportClick = (airport) => {
    state.currentId = airport.id;
    toggleDropdown()
}

console.log(airports)

</script>

<style scoped>
.airport-row::before {
    content: '';
}

.airport-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.airport {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 2rem;
    border: 1px solid lightgrey;
}

.airport h4 {
    cursor: pointer;
}

h5 {
    color: #42b983;
    font-weight: 100;
}

#airport-dropdown-icon {
    background-color: white;
    border: none;
    cursor: pointer;
}

#airport-dropdown-icon img {
    width: 1rem;
    height: 1rem;
}
</style>