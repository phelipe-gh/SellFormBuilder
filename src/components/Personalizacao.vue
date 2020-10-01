<template lang="pug">
div
  el-row(type="flex", :gutter="40")
    el-col(:lg="5")
      label Tamanho da fonte primária (px):
      el-input-number(v-model='personalizacao.fontSizePrimary' :max='50' :min='1')

    el-col(:lg="5")
      label Tamanho da fonte secundária (px):
      el-input-number(v-model='fontSecundaria' :max='50' :min='1')
    
  br

  el-row(type="flex", :gutter="40")
    el-col(:lg="18")
      el-row
        label Cor das labels:
      el-row
        el-radio-group(v-model='corLabels')
          el-radio(v-model='corLabels' label='#000') Preto
          el-radio(v-model='corLabels' label='#f00') Vermelho
          el-radio(v-model='corLabels' label='#0f0') Verde
          el-radio(v-model='corLabels' label='#00f') Azul
          el-radio(v-model='corLabels' label='#ffff00') Amarelo
          el-radio(v-model='corLabels' label='#993399') Roxo
          el-radio(v-model='corLabels' label='#FFFFFF') Branco
          el-radio(v-model='corLabels' label='#FF00FF') Rosa
          el-radio(v-model='corLabels' label='#808080') Cinza
          el-radio(v-model='corLabels' label='#432100') Maron

    el-col(:lg="6")
      div.showColor(v-bind:style='[btnStylesLabels]')

  br

  el-row(type="flex", :gutter="40")
    el-col(:lg="18")
      el-row
        label Cor das placeholders:
      el-row
        el-radio-group(v-model='corPlaceHolders')
          el-radio(v-model='corPlaceHolders' label='#000') Preto
          el-radio(v-model='corPlaceHolders' label='#f00') Vermelho
          el-radio(v-model='corPlaceHolders' label='#0f0') Verde
          el-radio(v-model='corPlaceHolders' label='#00f') Azul
          el-radio(v-model='corPlaceHolders' label='#ffff00') Amarelo
          el-radio(v-model='corPlaceHolders' label='#993399') Roxo
          el-radio(v-model='corPlaceHolders' label='#FFFFFF') Branco
          el-radio(v-model='corPlaceHolders' label='#FF00FF') Rosa
          el-radio(v-model='corPlaceHolders' label='#808080') Cinza
          el-radio(v-model='corPlaceHolders' label='#432100') Maron

    el-col(:lg="6")
      div.showColor(v-bind:style='[btnStylesPlaceHolders]')

</template>

<script>
import { ValidationProvider } from 'vee-validate';

export default {

  props: {
    personalizacao: {
      required: true
    }
  },

  components: {
    ValidationProvider
  },

  data () {
    return {
      corPlaceHolders: '#000',
      corLabels: '#000',
      fontPrimaria: null,
      fontSecundaria: null
    }
  },

  computed: {
    btnStylesLabels() {
      return {
        "background-color": this.corLabels,
      };
    },
    btnStylesPlaceHolders() {
      return {
        "background-color": this.corPlaceHolders,
      };
    }
  },

};

</script>

<style scoped lang="scss">
.showColor {
  width: 100%;
  height: 80px;
}
</style>