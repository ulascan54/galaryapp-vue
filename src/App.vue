<template>
  <div class="App">
    <Title />
    <Upload />
    <ImageGrid @selected="updateSelectedImg" />
    <Modal
      v-if="selectedimg"
      :imgUrl="selectedimg"
      @close="updateSelectedImg"
    />
  </div>
</template>
<script>
import ImageGrid from "./components/ImageGrid.vue";
import Title from "./components/Title.vue";
import Upload from "./components/Upload.vue";
import Modal from "./components/Modal.vue";
import { ref } from "vue";
export default {
  name: "App",
  components: {
    ImageGrid,
    Title,
    Upload,
    Modal,
  },
  setup() {
    const selectedimg = ref(null);
    const updateSelectedImg = (url) => {
      selectedimg.value = url;
    };
    return { selectedimg, updateSelectedImg };
  },
};
</script>

<style></style>
