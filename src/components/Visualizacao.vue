<template lang="pug">
div.centerItens
  el-row(type="flex", :gutter="40")
    el-col(:lg="24")
      el-button.btn.btn-primary(type="success", @click='validarAndGerarFormulario()') Gerar formulário

</template>

<script>
import Alert from '../utils/Alert'

export default {

  data () {
    return {
    
    }
  },

  methods: {
    validarAndGerarFormulario() {
      this.$emit('validarAndGerarFormulario');
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