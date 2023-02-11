<template>
  <div class="home">
    <div class="container">
        <slideNav></slideNav>
        <Ad></Ad>
        <Floor v-for="(fList,index) in fList" :fList="fList" :key="index"></Floor>
      </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Floor from './floor'
import {mapState} from 'vuex'
export default {
  name: 'Home',
  components: { Header, Floor },
  computed: {
    ...mapState('homeVuex', {
      fList: state => state.floorList
    })
  },
  mounted() {
    document.querySelector('.allCategory').style.visibility = 'hidden'
    this.$store.dispatch('homeVuex/getFloorList')
  }
}
</script>

<style>

</style>