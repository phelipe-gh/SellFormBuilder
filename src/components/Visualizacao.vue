<template lang="pug">
div.centerItens
  el-row(type="flex", :gutter="40")
    el-col(:lg="24")
      el-button.btn.btn-primary(type="success", @click='gerarFormulario') Gerar formulário

</template>

<script>
import Alert from '../utils/Alert'

export default {

  data () {
    return {
    
    }
  },

  methods: {
    gerarFormulario() {
      if(!this.isValid()) {
        Alert.error('Campos obrigatórios', 'Informe os campos destacados')
      }
    },

    isValid () {
      return false;
    }
  }

};

</script>

<style scoped lang="scss">
  .centerItens {
    display: flex;
    justify-content: center;  
  }
</style>