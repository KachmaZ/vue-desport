<template>
  <div class="portfolio mb-4 mb-sm-5 mb-lg-6">
    <h1 class="portfolio__title h-2 h-md-1 mb-4">PORTFOLIO</h1>
    <DemosGrid class="mb-4"/>
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

<style lang="scss">
.portfolio {
  display: flex;
  flex-direction: column;

  &__title {
    text-align: center;
  }

  .lined-btn {
    align-self: flex-end;
  }
}
</style>
