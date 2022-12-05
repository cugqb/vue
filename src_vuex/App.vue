<template>
  <div>
    <theCount/>
    <hr>
    <thePerson/>
  </div>
</template>

<script>
import theCount from './components/count'
import thePerson from './components/person'
export default {
  name: "App",
  components:{theCount,thePerson},
  mounted(){
    console.log('App',this);
  }
};
</script>

