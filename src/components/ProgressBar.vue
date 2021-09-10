<template>
  <div class="progress-bar">Loading</div>
</template>

<script>
import useStorage from "../composables/useStorage";
export default {
  props: ["payload"],
  setup(props) {
    useStorage(props.payload);
  },
};
</script>

<style scoped></style>
