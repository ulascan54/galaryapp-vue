import {ref} from 'vue'
import {firebaseDb} from '@/firebase/config'

const useCollection=(collection)=>{
  const images=ref(null)
  const error=ref(null)

  let collectionRef=firebaseDb.collection(collection).orderBy('createdDate','desc')
  collectionRef.onSnapshot(snap=>{
    let response=[]

    snap.docs.forEach(element => {
        response.push({...element.data(), element:element.id})
    });
    images.value=response
    error.value=null
  },err=>{
    images.value=null
    error.value=err.message
  })
  return {error,images}
}

export default useCollection