<template lang="pug">
div
  el-row(:gutter="40")
    el-col(:lg="12")
      label Tamanho da fonte primária (px):
      br
      el-input-number(v-model='personalizacao.fontSizePrimary' :max='50' :min='1')

  el-row(:gutter="40")
    el-col(:lg="20")
      label Cor das labels:
  el-row
    el-radio-group(v-model='personalizacao.corLabels')
      el-radio(v-model='personalizacao.corLabels' label='#000') Preto
      el-radio(v-model='personalizacao.corLabels' label='#f00') Vermelho
      el-radio(v-model='personalizacao.corLabels' label='#0f0') Verde
      el-radio(v-model='personalizacao.corLabels' label='#00f') Azul
      el-radio(v-model='personalizacao.corLabels' label='#ffff00') Amarelo
      el-radio(v-model='personalizacao.corLabels' label='#993399') Roxo
      el-radio(v-model='personalizacao.corLabels' label='#FFFFFF') Branco

  el-row
    el-col(:lg="24")
      div.showColor(v-bind:style='[btnStylesLabels]')

  el-row(:gutter="40")
    el-col(:lg="20")
      label Cor das placeholders:
  el-row
    el-radio-group(v-model='personalizacao.corPlaceHolders')
      el-radio(v-model='personalizacao.corPlaceHolders' label='#000') Preto
      el-radio(v-model='personalizacao.corPlaceHolders' label='#f00') Vermelho
      el-radio(v-model='personalizacao.corPlaceHolders' label='#0f0') Verde
      el-radio(v-model='personalizacao.corPlaceHolders' label='#00f') Azul
      el-radio(v-model='personalizacao.corPlaceHolders' label='#ffff00') Amarelo
      el-radio(v-model='personalizacao.corPlaceHolders' label='#993399') Roxo
      el-radio(v-model='personalizacao.corPlaceHolders' label='#FFFFFF') Branco

  el-row
    el-col(:lg="24")
      div.showColor(v-bind:style='[btnStylesPlaceHolders]')

  el-row
    label Imagem para formulário:
  el-row
    el-carousel(:autoplay="false" type='card' height='200px')
      el-carousel-item(v-for='item in pictures')
        label {{ item.nome }}
        el-image(style='width: 100%; height: 100%' :src='item.url' fit='fit') {{ item.nome }}
  
  el-row.center
    validation-provider(rules="required")
      div(slot-scope='{ errors }')
        el-radio-group(v-model='personalizacao.imagemFundo')
          el-radio(v-model='personalizacao.imagemFundo' label=1, size="medium") Estudos
          el-radio(v-model='personalizacao.imagemFundo' label=2, size="medium") Tecnologia
          el-radio(v-model='personalizacao.imagemFundo' label=3, size="medium") Esporte
          el-radio(v-model='personalizacao.imagemFundo' label=4, size="medium") Natureza
          el-radio(v-model='personalizacao.imagemFundo' label=5, size="medium") Criatividade
          el-radio(v-model='personalizacao.imagemFundo' label=6, size="medium") Feedback

        p.alertText {{ errors[0] }}

</template>

<script>
import { ValidationProvider } from 'vee-validate';
import Pictures from '../utils/pictures'

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
      pictures: Pictures,
      pictureSelected: null
    }
  },

  computed: {
    btnStylesLabels() {
      return {
        "background-color": this.personalizacao.corLabels,
      };
    },
    btnStylesPlaceHolders() {
      return {
        "background-color": this.personalizacao.corPlaceHolders,
      };
    }
  },

};

</script>

<style scoped lang="scss">
.showColor {
  width: 100%;
  height: 20px;
  border-radius: 10px;
}
</style>