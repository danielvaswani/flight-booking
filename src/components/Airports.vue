<template>
    <section>
        <h1>Airport</h1>
        <div v-if="!state.showDropdown" class="current-airport">
            <h4>John F Kennedy Airport, New York, USA</h4>
            <h5>JFK</h5>
            <button @click="true" id="airport-dropdown-icon">
                <img src="@/assets/chevron-down-solid.svg" />
            </button>
        </div>
    </section>
</template>

<script>
import { reactive } from "vue";

export default {
    setup() {
        const state = reactive({ showDropdown: false });
        return {
            state
        }
    },
    components: {
        // ChevronSVG
    }
}

</script>

<style>
.current-airport {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 2rem;
    border: 1px solid lightgrey;
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