<template lang='pug'>
div

  el-row(type='flex', :gutter='40')
    el-col(:lg='12')
      validation-provider(name="estrutura.campos", :rules="estrutura.campos.length > 0 ? '' : 'required'")
        div(slot-scope='{ errors }')
          label Campos:
          el-input(
            v-model='estrutura.input'
          )
            el-button(
              slot='append',
              icon='el-icon-plus',
              @click='addCampo()',
              :disabled='estrutura.input && estrutura.input.length < 1'
            )
          el-tag(
            v-for='(campo, index) in estrutura.campos',
            :key='index',
            closable,
            type='info',
            size='medium',
            @close='removeCampo(index)'
          ) {{ campo.nome }}
          p.alertText {{ errors[0] }}

    el-col(:lg='8')
      p Inserir campo telefone ?
      el-radio-group(
        v-model='estrutura.hasTelefone',
        size='medium',
        @change='setTelefone()'
      )
        el-radio(
          :label='true'
        ) Sim
        el-radio(
          :label='false'
        ) Não

  el-row(type='flex', :gutter='40')
    el-col(:lg='12')
      validation-provider
        div(slot-scope='{ errors }')
          label Botão primário:
          el-input(
            v-model='estrutura.botaoPrimario.nome',
            :max-length='10'
          )
          p.alertText {{ errors[0] }}

    el-col(:lg='12')
      validation-provider(:rules="estrutura.botaoPrimario.nome ? 'required' : ''")
        div(slot-scope='{ errors }')
          label Ação botão primário:
          el-select.full-width.input(
            v-model='estrutura.botaoPrimario.acao',
          )
            el-option(
              v-for='acao in acoes',
              :key='acao.id',
              :label='acao.nome',
              :value='acao.id'
            )
          p.alertText {{ errors[0] }}

  el-row(type='flex', :gutter='40')
    el-col(:lg='12')
      validation-provider
        div(slot-scope='{ errors }')
          label Botão terciário:
          el-input(
            v-model='estrutura.botaoTerciario.nome',
            :max-length='10'
          )
          p.alertText {{ errors[0] }}

    el-col(:lg='12')
      validation-provider(:rules="estrutura.botaoTerciario.nome ? 'required' : ''")
        div(slot-scope='{ errors }')
          label Ação botão terciário:
          el-select.full-width.input(
            v-model='estrutura.botaoTerciario.acao',
          )
            el-option(
              v-for='acao in acoes',
              :key='acao.id',
              :label='acao.nome',
              :value='acao.id'
            )
          p.alertText {{ errors[0] }}

  el-row(type='flex', :gutter='40')
    el-col(:lg='12')
      validation-provider
        div(slot-scope='{ errors }')
          label Botão secundário:
          el-input(
            v-model='estrutura.botaoSecundario.nome',
            :max-length='10'
          )
          p.alertText {{ errors[0] }}

    el-col(:lg='12')
      validation-provider(:rules="estrutura.botaoSecundario.nome ? 'required' : ''")
        div(slot-scope='{ errors }')
          label Ação botão secundário:
          el-select.full-width.input(
            v-model='estrutura.botaoSecundario.acao',
          )
            el-option(
              v-for='acao in acoes',
              :key='acao.id',
              :label='acao.nome',
              :value='acao.id'
            )
          p.alertText {{ errors[0] }}
</template>

<script>
import { ValidationProvider } from 'vee-validate';

export default {

  components: {
    ValidationProvider
  },

  props: {
    estrutura: {
      required: true
    }
  },

  data () {
    return {
      acoes: [{nome: 'Abrir link', id: 1}, {nome: 'Mostrar dados preenchidos', id: 2}]
    }
  },

  methods: {
    addCampo() {
      const campoAdded = {
        tipo: 'INPUT',
        nome: this.estrutura.input
      }
      this.estrutura.campos.push(campoAdded);
      this.estrutura.input = null;
    },
    removeCampo(index) {
      this.estrutura.campos.splice(index, 1);
    },
    removeButtons(index) {
      this.estrutura.buttons.splice(index, 1);
    },
    getDesableButton() {
      return this.estrutura.button && this.estrutura.button.length < 1 || this.estrutura.buttons && this.estrutura.buttons.length >= 3;
    },
  }
};

</script>

<style scoped lang='scss'>
@import url('//unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css');
</style>