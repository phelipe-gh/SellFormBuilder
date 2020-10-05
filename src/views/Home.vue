<template lang='pug'>
  div#appAnalise
    header
      Main-header

</template>

<script>
import MainHeader from '@/components/MainHeader'
import Listagem from '@/components/Listagem'

export default {

  components: {
    MainHeader,
    Listagem
  },

  data () {
    return {
      items: ''
    }
  },
}
</script>

<style lang='scss' scoped>
#appAnalise {
  width: 100%;
  height: 100%;

  text-align: center;
  
  /deep/ h1,
  /deep/ h2,
  /deep/ h3,
  /deep/ h4,
  /deep/ h5,
  /deep/ p {
    color: #424242;
  }

  /deep/ p {
    margin: 0 0 10px;
  }

  /deep/ main {
    width: 100%;
  }

  .container {
    display: flex;
    border-radius: 12px;
    width: 100%;
    min-height: 100%;
  }

  .container-router {
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    width: 100%;
    min-height: 100%;
  }

  .content {
    width: 100%;
    padding: 20px 30px;
    overflow-y: scroll;
  }
}
</style>
