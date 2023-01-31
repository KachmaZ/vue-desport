<template>
  <div class="portfolio container">
    <h1 class="portfolio__title h-lg-1">PORTFOLIO</h1>
    <DemosGrid />
    <LinedButton to="/portfolio"> More </LinedButton>
  </div>
</template>

<script>
import LinedButton from "./parts/LinedButton.vue";
import DemosGrid from "@/components/parts/DemosGrid.vue";

export default {
  components: {
    LinedButton,
    DemosGrid,
  },
};
</script>

<style lang="scss" scoped>
.portfolio {
    &__title {
        text-align: center;
    }
}
</style>