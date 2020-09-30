<template lang='pug'>
  div
    el-row(type='flex', :gutter='40')
      el-col(:lg='12')
        p Campos:
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
      el-col(:lg='10')
        p Inserir Botão primário ?
        el-radio-group(
          v-model='estrutura.hasBotaoPrimario',
          @change='changeButtonPrimary()'
        )
          el-radio(
            :label='true'
          ) Sim
          el-radio(
            :label='false'
          ) Não
      el-col(:lg='8')
        p Botão primário:
        el-input(
          :disabled='!estrutura.hasBotaoPrimario',
          v-model='estrutura.botaoPrimario.nome',
          :max-length='10'
        )
      el-col(:lg='6')
        p Ação botão primário:
        el-select(
          :disabled='!estrutura.hasBotaoPrimario',
          v-model='estrutura.botaoPrimario.acao',
        )
          el-option(
            v-for='acao in acoes',
            :key='acao.id',
            :label='acao.nome',
            :value='acao.id'
          )
    el-row(type='flex', :gutter='40')
      el-col(:lg='10')
        p Inserir botão secundário ?
        el-radio-group(
          v-model='estrutura.hasBotaoSecundario',
          @change='changeButtonSecondary()'
        )
          el-radio(
            :label='true'
          ) Sim
          el-radio(
            :label='false'
          ) Não
      el-col(:lg='8')
        p Botão secundário:
        el-input(
          :disabled='!estrutura.hasBotaoSecundario',
          v-model='estrutura.botaoSecundario.nome',
          :max-length='10'
        )
      el-col(:lg='6')
        p Ação botão secundário:
        el-select(
          :disabled='!estrutura.hasBotaoSecundario',
          v-model='estrutura.botaoSecundario.acao',
        )
          el-option(
            v-for='acao in acoes',
            :key='acao.id',
            :label='acao.nome',
            :value='acao.id'
          )
</template>

<script>
export default {
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
    changeButtonPrimary() {
      if(!this.estrutura.hasBotaoPrimario) {
        this.estrutura.botaoPrimario = {nome: null, acoes: null};
      }
    },
    changeButtonSecondary() {
      if(!this.estrutura.hasBotaoSecundario) {
        this.estrutura.botaoSecundario = {nome: null, acoes: null};
      }
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