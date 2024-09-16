<script>
import routes from './assets/articlesParsed.js';
import nameReference from './javascript/nameReference'
// import nameReference from './javascript/nameReference'
import base from './javascript/base'
export default {
  data(){
    return {
      routes
    }
  },
  methods:{
    nameReference,
    ...base
  }
}
</script>

<template>
  <div class="flexRow al-card-row">
    <div class="router  al-router">
      <div @click="this.$router.push({ name: value.title });" class="al-router-inner" v-for="(value ,index) in routes" :key="value.title">
        {{  nameReference(value.title) }} 
        <span  v-for="(tags ,index) in value.tags" :key="tags" class="al-router-inner-tags">{{ tags }}</span>
        <br>
        <span class="al-router-inner-end">
          最后更新于 {{ dateParsed(Number(value.last_edit_time)) }}
        </span>
      </div>
    </div>
    <div class="routerview">
      <RouterView />
    </div>
  </div>

</template>

<style scoped>
.flexRow{
  position: relative;
    padding: var(--al-card-row-gap);
    display: flex;
    box-sizing: border-box;
    max-height: 100vh;
    height: 100vh;

}
.router,.routerview{
  position: relative;
  /* height: 100%; */
  box-sizing: border-box;
  overflow:scroll;
}
.router::-webkit-scrollbar,.routerview::-webkit-scrollbar{
  display: none;
}
.routerview{
    box-sizing: border-box;
    max-height: inherit;
    height: inherit;
    overflow: auto;
  margin: calc(-1 * var(--al-card-row-gap)) 0 ;
  padding: var(--al-card-row-gap) 0 ;
  mask-image: linear-gradient(180deg, transparent, #000 calc(100% - var(--al-card-row-gap)), #000 calc(100% - var(--al-card-row-gap)) transparent 100%);
  mask-image: linear-gradient(180deg, transparent 0px, #000 var(--al-card-row-gap), #000 calc(100% - var(--al-card-row-gap)), transparent 100%);

}
</style>
