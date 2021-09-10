<template>
  <div class="progress-bar" :style="{width:progress+'%'}">
    {{ Math.round(Number(progress)) }}% Loading
  </div>
</template>

<script>
import useStorage from "../composables/useStorage";
import { watchEffect } from "vue";
export default {
  props: ["payload"],
  setup(props, context) {
    const { progress } = useStorage(props.payload);
    watchEffect(() => {
      if (progress.value >= 100) {
        context.emit("complated");
      }
    });
    return {
      progress,
    };
  },
};
</script>

<style scoped>
.progress-bar {
  color: white;
  text-align: right;
  display: block;
  height: 20px;
  background: var(--primary);
  transition: width 0.3s ease;
  border-radius: 6px;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
