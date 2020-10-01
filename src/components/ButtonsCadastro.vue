<template lang="pug">
  .buttons
    el-button.buttonDefaultSystemSecundario(
      type="default",
      @click="voltar"
    )
      span.center
        b.marginTextBottom
          | Voltar
    .end
      el-button.buttonDefaultSystem(
        type="default",
        @click="proximo"
      )
        span.center
          b.marginTextBottom
            | Próximo
</template>

<script>
export default {
  methods: {

    voltar() {
      this.$emit('voltar');
    },

    proximo() {
      this.$emit('proximo');
    },
  },
};
</script>

<style scoped lang="scss">
  .buttons {
    margin-top: 2%;
    display: flex;
    justify-content: space-between;
  }

  .center {
    display: flex;
    align-items: center;
  }

   .component {
    .text-btn {
      padding: 0;
    }

    .center {
      display: flex;
      vertical-align: center;
    }

    .text {
      color: white;
      padding: 0;
    }
  }

  .marginTextBottom {
    margin-left: 5px;
  }
</style>
