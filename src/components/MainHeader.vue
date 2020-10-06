<template lang='pug'>
  div#mainHeader
    .topo
      p Construtor de formulário
</template>

<script>

export default {

  data () {
    return {
      isVisualizarGestaoProcessos: false
    }
  },

}
</script>

<style lang='scss' scoped>

.topo {
  width: 100%;
  height: 50px;
  align-items: center;
  display: flex;
  color: white;
  background-color: #2d78da;
  font-size: xx-large;
  border-bottom: solid 1px #737987;
  justify-content: center
}
</style>
