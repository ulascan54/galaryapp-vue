<template>
  <div>
    {{images}}
  </div>
</template>

<script>
import useFirestore from '../composables/useFirestore'
  export default {
    setup(){
      const {images}=useFirestore('images')
      return {images}
    }
  }
</script>

<style scoped>

</style>