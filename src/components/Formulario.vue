<template lang="pug">
.container(v-if="loaded")
  .componentFormulario(:style="stylesForm")
    el-row(v-for="campo in formulario.estruturaBasica.campos") 
      |{{campo.nome}}
      el-col(:lg="24")
        el-input(
          type='text' 
          maxlength='50' 
          show-word-limit='', 
          :placeholder="campo.nome", 
          v-model='campo.resp',
          class="my-input"
        )

    el-row(v-if="formulario.estruturaBasica.hasTelefone")
      el-col(:lg="24")
        | Telefone:
        el-input(
        v-mask="'(##)####-####'",
          v-model="telefone",
          maxlength="14"
        )

</template>

<script>
import _ from 'lodash'
import Pictures from '../utils/pictures'

export default {

  props: {
    formulario: {
      required: false
    }
  },

  data () {
    return {
      colors: '#f00',
      telefone: null,
      imagemFundo: null,
      loaded: false
    }
  },

  created() {
    this.setElements();
  },

  computed: {
    stylesForm() {
      return {
        'background-image': `url(${this.imagemFundo})`,
        'color': `${this.formulario.personalizacao.corLabels}!important`,
        'font-size': `${this.formulario.personalizacao.fontSizePrimary}px`
      }
    }
  },

  methods: {
    setElements() {
      const img = _.find(Pictures, element => element.id == this.formulario.personalizacao.imagemFundo) 

      if(img) {
        this.imagemFundo = img.url
      }

      this.loaded = true;
    }

  }

}
</script>

<style lang="scss" scoped>
  .componentFormulario {
    padding: 3% 5% 5% 5%;
    width: 65%;
    border-radius: 10px;
    background-color: #cfe6ff;
  }

</style>
