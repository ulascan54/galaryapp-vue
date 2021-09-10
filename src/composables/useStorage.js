import { ref, watchEffect } from "vue";
import {firebaseStorage} from "../firebase/config.js";

const useStorage = (file) => {
  const error = ref(null);
  const url = ref(null);
  watchEffect(() => {
    const storageRef = firebaseStorage.ref('images/'+file.name);
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        console.log(snap);
      },
      (err) => {
        error.value = err;
      },
      async () => {
        const dlUrl = await storageRef.getDownloadURL()
        url.value=dlUrl
      })
  });
  return { url, error };
};
export default useStorage;
