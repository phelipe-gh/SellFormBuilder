<template lang="pug">
div
  el-row(:gutter="40")
    el-col(:lg="5")
      label Tamanho da fonte primária (px):
      el-input-number(v-model='personalizacao.fontSizePrimary' :max='50' :min='1')

    el-col(:lg="5")
      label Tamanho da fonte secundária (px):
      el-input-number(v-model='personalizacao.fontSecundaria' :max='50' :min='1')

  el-row(:gutter="40")
    el-col(:lg="20")
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

  el-row
    el-col(:lg="24")
      div.showColor(v-bind:style='[btnStylesLabels]')

  el-row(:gutter="40")
    el-col(:lg="20")
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
    validation-provider
      div(slot-scope='{ errors }')
        el-radio-group(v-model='pictureSelected')
          el-radio(v-model='pictureSelected' label='FEEDBACK', size="medium") Feedback
          el-radio(v-model='pictureSelected' label='ESTUDOS', size="medium") Estudos
          el-radio(v-model='pictureSelected' label='TECNOLOGIA', size="medium") Tecnologia
          el-radio(v-model='pictureSelected' label='ESPORTE', size="medium") Esporte
          el-radio(v-model='pictureSelected' label='CRIATIVIDADE', size="medium") Criatividade
          el-radio(v-model='pictureSelected' label='NATUREZA', size="medium") Natureza
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
      corPlaceHolders: '#000',
      corLabels: '#000',
      pictures: Pictures,
      pictureSelected: null
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
  height: 20px;
  border-radius: 10px;
}
</style>