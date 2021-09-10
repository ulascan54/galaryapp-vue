<template>
  <form>
    <label>
      <input @change="uploadFile" type="file" />
      <span><i class="fas fa-cloud-upload-alt"></i> Upload Photo</span>
    </label>
    <div class="output">
      <div v-if="fileError" class="error">{{ fileError }}</div>
      <div v-if="file">{{ file.name }}</div>
      <ProgressBar v-if="file" :payload="file" @complated="file=null" />
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import ProgressBar from "../components/ProgressBar.vue";

export default {
  components: { ProgressBar },
  setup() {
    const file = ref("");
    const fileError = ref("");
    const types = ["image/png", "image/jpeg"];
    const uploadFile = (e) => {
      let selected = e.target.files[0];
      console.log(selected);
      if (selected && types.includes(selected.type)) {
        file.value = selected;
        fileError.value = null;
      } else {
        fileError.value =
          "Please Check our photo type(it must be png or jpeg !!)";
        file.value = null;
      }
    };
    return {
      uploadFile,
      file,
      fileError,
    };
  },
};
</script>

<style scoped>
form {
  margin: 30px auto 10px;
  text-align: center;
}
label input {
  height: 0;
  width: 0;
  opacity: 0;
}
label {
  display: block;
  width: 150px;
  height: 30px;
  background-color: var(--secondary);
  border: 1px solid var(--secondary);
  border-radius: 6px;
  margin: 10px auto;
  line-height: 30px;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
label:hover {
  background: #2f3542;
}
.output {
  height: 40px;
  font-size: 0.8rem;
}
.error {
  color: var(--error);
}
</style>
