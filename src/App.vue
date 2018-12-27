<template>
  <div>
    <Component :is="component">
      <slot />
    </Component>
  </div>
</template>

<script>
import DefaultLayout from "./layouts/DefaultLayout";
import PublicLayout from "./layouts/PublicLayout";

export default {
  name: "App",
  components: {
    DefaultLayout,
    PublicLayout,
  },
  data() {
    return {};
  },
  computed: {
    component() {
      return this.$store.state.common.layout;
    },
  },
  mounted() {
    // Update page title.
    this.$store.watch(
      state => state.common.title,
      title => {
        document.title = title;
        console.log("title updated");
      },
      {
        deep: true,
      },
    );
  },
};
</script>
