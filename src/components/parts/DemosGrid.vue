<template>
  <div class="demos">
    DEMOS
    <ProjectDemoCard
      v-for="project in demoProjects"
      :key="project.id"
      :title="project.title"
      :desc="project.desc"
      :images="project.imgUrls"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProjectDemoCard from "@/components/parts/ProjectDemoCard.vue";

export default {
  components: {
    ProjectDemoCard,
  },

  computed: mapGetters(["demoProjects"]),
};
</script>

<style lang="scss" scoped>
.demos {
  width: 100%;
  height: 100%;
}
</style>
