<template>
  <div class="App">
    <Title />
    <Upload />
    <ImageGrid />
  </div>
</template>
<script>
import ImageGrid from "./components/ImageGrid.vue";
import Title from "./components/Title.vue";
import Upload from "./components/Upload.vue";
export default {
  name: "App",
  components: {
    ImageGrid,
    Title,
    Upload,
  },
};
</script>

<style></style>
