<template>
  <form>
    <label>
      <input @change="uploadFile" type="file" />
      <span><i class="fas fa-cloud-upload-alt"></i> Upload Photo</span>
    </label>
  </form>
</template>

<script>
export default {
  setup() {
    
    const uploadFile=(e)=> {
      console.log(e);
    }
    return{
      uploadFile,
    }
  }
 
}
</script>

<style  scoped>
form{
  margin: 30px   auto 10px;
  text-align: center;
}
label input{
  height: 0;
  width: 0;
  opacity: 0;
}
label{
  display: block;
  width: 150px;
  height: 30px;
  background-color: var(--secondary);
  border:1px solid var(--secondary);
  border-radius: 6px;
  margin: 10px auto;
  line-height: 30px;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
label:hover{
  background: #2f3542;
}
</style>