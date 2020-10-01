<template lang="pug">
div
  .container
    .component
      el-row
        el-steps(:active='active', align-center, finish-status="success")
          el-step(
              v-for="step in steps",
              :key="step.id",
              :title="step.nome"
            )
      el-row(v-if="active==0")
        .form
          EstruturaBasica(:estrutura='estruturaBasica')
      el-row(v-if="active==1")
        .form
          Personalizacao(:personalizacao='personalizacao')
  
      ButtonsCadastro(
        @proximo="proximo",
        @voltar="voltar"
      )
  .sair
    router-link(to="/")
      el-button.buttonDefaultSystemSecundario(plain
        to="'/'"
      ) Sair

</template>

<script>
import EstruturaBasica from '@/components/EstruturaBasica'
import Personalizacao from '@/components/Personalizacao'
import ButtonsCadastro from '@/components/ButtonsCadastro';
import Button from '@/components/Button';


export default {

  components: {
    EstruturaBasica,
    Personalizacao,
    ButtonsCadastro,
    Button
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
    isValidForm() {
      // if(!this.estruturaBasica.qntButtons || 
      // !this.estruturaBasica.acoes ||
      // this.estruturaBasica.qntButtons.length !== this.estruturaBasica.acoes.length){
      //   return true;
      // }
      return false;
    }
  },
  methods: {
    proximo() {
      if(this.active !== 2) { 
        this.active++;
        this.activeStep = `${this.active}`;
      }
    },
    voltar() {
      if(this.active !== 0) { 
        this.active--;
        this.activeStep = `${this.active}`;
      }
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
    background-color: #f3eede;
  }

  .form {
    margin-top: 1%;
  }

  .marginButton{
    margin-top: 10px;
    float: right;
  }

  .sair{
    text-align: center;
    margin-top: 5px;
  }
</style>