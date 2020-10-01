<template lang="pug">
div
  .container
    .component
      el-row
        Divider(label="Estrutura básica")
        EstruturaBasica(:estrutura='estruturaBasica')
      el-row
        Divider(label="Personalização")
        Personalizacao(:personalizacao='personalizacao')
      el-row
        Divider(label="Visualização")
        Visualizacao

      .sair
        router-link(to="/")
          el-button.buttonDefaultSystemSecundario(plain
            to="'/'"
          ) Sair

</template>

<script>
import EstruturaBasica from '@/components/EstruturaBasica'
import Personalizacao from '@/components/Personalizacao'
import Button from '@/components/Button'
import Divider from '@/components/Divider'
import Alert from '../utils/Alert'
import Visualizacao from '@/components/Visualizacao'

export default {

  components: {
    EstruturaBasica,
    Personalizacao,
    Button,
    Divider,
    Visualizacao
  },

  data () {
    return {
      step: 0,
      activeStep: '',
      active: 0,
      steps: [{code: 'EST_BASIC', nome: 'Estrutura básica', id:0}, {code: 'PERSONALIZA', nome: 'Personalização', id: 1}, {code: 'VISUALIZAR', nome: 'Visualizar', id: 2}],
      estruturaBasica: {
        qntButtons: null,
        input:  null,
        button: null,
        hasTelefone: null,
        campos: [],
        botaoPrimario: {nome: null, acao: null},
        botaoSecundario: {nome: null, acao: null},
        hasBotaoPrimario: null,
        hasBotaoSecundario: null
      },
      personalizacao: {
        corLabels: null,
        corPlaceholders: null,
        fontSizePrimary: null,
        fontSizeSecundary: null
      }
    }
  },

  mounted() {
    this.activeStep = this.step;
    this.active = this.step;
  },
  
  computed: {
  },
  methods: {
    proximo() {
      if(this.active !== 2) { 
        this.active++;
        this.activeStep = `${this.active}`;
      }
      if(!this.isValid()) {
        Alert.error('Campos obrigatórios', 'Informe os campos destacados')
      }
    },
    voltar() {
      if(this.active !== 0) { 
        this.active--;
        this.activeStep = `${this.active}`;
      }
    },
    isValid() {
      return false;
    }
  }
};

</script>

<style scoped lang="scss">
@import url("//unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css");

  .container {
    display: flex;
    align-items: center;
    justify-content: center;   
    margin-top: 3%; 
  }

  .component {
    padding: 3% 5% 5% 5%;
    width: 65%;
    border-radius: 10px;
    background-color: #e9f2ff;
  }

  .marginButton{
    margin-top: 10px;
    float: right;
  }

  .sair{
    text-align: center;
    margin-top: 55px;
  }
</style>