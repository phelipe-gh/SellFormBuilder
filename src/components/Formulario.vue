<template lang='pug'>
.container(v-if='loaded')
  .componentFormulario(:style='stylesForm' :class='getColorPlaceholder()')
    el-row(v-for='campo in formulario.estruturaBasica.campos') 
      |{{campo.nome}}
      el-col(:lg='24')
        el-input(
          type='text' 
          maxlength='50' 
          show-word-limit='', 
          :placeholder='campo.nome', 
          v-model='campo.resp'
        )

    el-row(v-if='formulario.estruturaBasica.hasTelefone')
      el-col(:lg='24')
        | Telefone:
        el-input(
          v-mask="'(##)####-####'",
          v-model='telefone',
          placeholder='35-9999-9999'
          maxlength='14'
        )

    el-row(v-if='hasButton')
      el-col.centerItens(:lg='24')
        p.inlineButtons(v-for='button in getButtonsForm()')
          el-button.btn.btn-primary(:style='stylesButtons') {{ button }}

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
      telefone: null,
      imagemFundo: null,
      loaded: false,
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

    },
    stylesButtons() {

      return {
        'color': `${this.formulario.personalizacao.corButtons}`,
        'border-radius': `${this.formulario.personalizacao.borderRadius ? '25px' : 'none'}`,
        'background-color': `${this.formulario.personalizacao.backgroundColorButton}`
      }

    }

  },

  methods: {

    setElements() {

      const img = _.find(Pictures, element => element.id == this.formulario.personalizacao.imagemFundo)

      if(img) {
        this.imagemFundo = img.url
      }

      this.loaded = true

    },

    hasButton() {

      if(this.formulario.estruturaBasica.botaoPrimario||
        this.formulario.estruturaBasica.botaoPrimario ||
        this.formulario.estruturaBasica.botaoPrimario) {

          return true

        }

      return false

    },

    getButtonsForm() {

      let buttons = []

      if(this.formulario.estruturaBasica.botaoPrimario.nome) buttons.push(this.formulario.estruturaBasica.botaoPrimario.nome)
      if(this.formulario.estruturaBasica.botaoSecundario.nome) buttons.push(this.formulario.estruturaBasica.botaoSecundario.nome)
      if(this.formulario.estruturaBasica.botaoTerciario.nome) buttons.push(this.formulario.estruturaBasica.botaoTerciario.nome)

      return buttons

    },


    getColorPlaceholder() {
      if(this.formulario.personalizacao.corPlaceHolders === '#f00') return 'el-input-red'
      else if(this.formulario.personalizacao.corPlaceHolders === '#0f0') return 'el-input-green'
      else if (this.formulario.personalizacao.corPlaceHolders === '#00f') return 'el-input-blue'
      else if (this.formulario.personalizacao.corPlaceHolders === '#ffff00') return 'el-input-yellow'
      else if (this.formulario.personalizacao.corPlaceHolders === '#993399') return 'el-input-purple'
    }

  }

}
</script>

<style lang='scss' scoped>
  .componentFormulario {
    padding: 3% 5% 5% 5%;
    width: 65%;
    border-radius: 10px;
    background-color: #cfe6ff;
  }

  .inlineButtons {
    display:inline-block;
    padding: 20px;
  }

  .centerItens {
    display: flex;
    justify-content: center;
  }

  .el-input-blue {
    ::placeholder {
      color: #00f !important;
    }
  }

  .el-input-red {
    ::placeholder {
      color: #f00 !important;
    }
  }

  .el-input-green {
    ::placeholder {
      color: #0f0 !important;
    }
  }

  .el-input-yellow {
    ::placeholder {
      color: yellow !important;
    }
  }

  .el-input-purple {
    ::placeholder {
      color: #993399 !important;
    }
  }

</style>
