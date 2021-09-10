import { ref, watchEffect } from "vue";
import { firebaseStorage,firebaseDb,date } from "../firebase/config.js";

const useStorage = (file) => {
  const error = ref(null);
  const url = ref(null);
  const progress = ref(null);
  watchEffect(() => {
    const storageRef = firebaseStorage.ref("images/" + file.name);
    const collectionRef=firebaseDb.collection('images')
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let load=(snap.bytesTransferred/snap.totalBytes)*100
        progress.value=load
        console.log(progress.value);
      },
      (err) => {
        error.value = err;
      },
      async () => {
        const dlUrl = await storageRef.getDownloadURL();
        const createdDate=date()
        await collectionRef.add({
          url:dlUrl,
          createdDate,
        })

        url.value = dlUrl;
      }
    );
  });
  return { url, error,progress };
};
export default useStorage;
