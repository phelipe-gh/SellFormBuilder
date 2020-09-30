<template lang="pug">
div
  el-row(type="flex", :gutter="40")
    el-col(:lg="5")
      label Tamanho da fonte primária:
      el-input(type="number", :maxlength='2', v-model='fontPrimaria')
    el-col(:lg="5")
      label Tamanho da fonte secundária:
      el-input(type="number" v-model='fontSecundaria', :maxlength='2')
    
  br

  el-row(type="flex", :gutter="40")
    el-col(:lg="10")
      p Cor das labels:
      input(type='radio', v-model="corLabels", value="#000")
      label(for='huey') Preto
      input(type='radio', v-model="corLabels", value="#f00")
      label(for='huey') Vermelho
      input(type='radio', v-model="corLabels", value="#0f0")
      label(for='huey') Verde
      input(type='radio', v-model="corLabels", value="#00f")
      label(for='huey') Azul
      input(type='radio', v-model="corLabels", value="#ffff00")
      label(for='huey') Amarelo
      input(type='radio', v-model="corLabels", value="#993399")
      label(for='huey') Roxo
    el-col(:lg="8")
      p Digite valor em hexádecimal:
      input(
        v-model='corLabels',
        :maxlength='7'
      )

    el-col(:lg="6")
      div.showColor(v-bind:style='[btnStylesLabels]')

  br

  el-row(type="flex", :gutter="40")
    el-col(:lg="10")
      p Cor dos placeholders:
      input(type='radio', v-model="corPlaceHolders", value="#000")
      label(for='huey') Preto
      input(type='radio', v-model="corPlaceHolders", value="#f00")
      label(for='huey') Vermelho
      input(type='radio', v-model="corPlaceHolders", value="#0f0")
      label(for='huey') Verde
      input(type='radio', v-model="corPlaceHolders", value="#00f")
      label(for='huey') Azul
      input(type='radio', v-model="corPlaceHolders", value="#ffff00")
      label(for='huey') Amarelo
      input(type='radio', v-model="corPlaceHolders", value="#993399")
      label(for='huey') Roxo
    el-col(:lg="8")
      p Digite valor em hexádecimal:
      input(
        v-model='corPlaceHolders',
        :maxlength='7'
      )

    el-col(:lg="6")
      div.showColor(v-bind:style='[btnStylesPlaceHolders]')

</template>

<script>
export default {
  props: {
    personalizacao: {
      required: true
    }
  },

  data () {
    return {
      overrideStyles: {
        color:'#222222'
      },
      corLabels: '#000',
      corPlaceHolders: '#fff',
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