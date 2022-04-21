<template>
  <div class="home">
    <Airports />
  </div>
</template>

<script>
// @ is an alias to /src
import Airports from "@/components/Airports.vue";

export default {
  name: "Home",
  components: {
    Airports,
  },
};
</script>
