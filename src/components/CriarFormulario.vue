<template lang="pug">
.container
  .component
    el-row
      Divider(label="Estrutura básica")
      EstruturaBasica(:estrutura='form.estruturaBasica')
    el-row
      Divider(label="Personalização")
      Personalizacao(:personalizacao='form.personalizacao')
    el-row
      Divider(label="Visualização")
      Visualizacao

    el-row
      .sair
        router-link(to="/")
          el-button.buttonDefaultSystemSecundario(
            to="'/'"
          ) Sair

</template>

<script>
import EstruturaBasica from '@/components/EstruturaBasica'
import Personalizacao from '@/components/Personalizacao'
import Divider from '@/components/Divider'
import Alert from '../utils/Alert'
import Visualizacao from '@/components/Visualizacao'
import ValidateForm from '../utils/validatorForm'

export default {

  components: {
    EstruturaBasica,
    Personalizacao,
    Divider,
    Visualizacao,
    ValidateForm
  },

  data () {
    return {
      form: {
        estruturaBasica: {
          button: null,
          hasTelefone: null,
          campos: [],
          nomeCampo: null,
          estrutura: null,
          botaoPrimario: {nome: null, acao: null},
          botaoSecundario: {nome: null, acao: null},
          botaoTerciario: {nome: null, acao: null}
        },
        personalizacao: {
          corLabels: null,
          corPlaceholders: null,
          fontSizePrimary: null,
          fontSizeSecundary: null
        }
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
    },
    validarAndGerarFormulario() {
      ValidateForm.validarFormulario(this.form);
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