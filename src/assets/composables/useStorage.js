import { ref, watchEffect } from "@vue/reactivity";
import firebaseStorage from "../firebase/config";

const useStorage = (file) => {
  const error = ref(null);
  const url = ref(null);
  watchEffect(() => {
    const storageRef = firebaseStorage.ref("resimler/" + file.name);
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        console.log(snap);
      },
      (err) => {
        error.value = err;
      },
      async () => {
        const dlUrl = await storageRef.getDownloadURL();
        url.value = dlUrl;
      }
    );
  });
  return { url, error };
};
export default useStorage;
