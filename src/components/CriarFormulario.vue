<template lang='pug'>
.container
  .component
    validation-observer(ref='observer', tag='form', v-slot='{ invalid }')
      el-row
        Divider(label='Estrutura básica')
        EstruturaBasica(:estrutura='form.estruturaBasica', @setHasButton='setHasButton')
      el-row
        Divider(label='Personalização')
        Personalizacao(:personalizacao='form.personalizacao')
      el-row
        Divider
    .centerItens
      el-row(type='flex', :gutter='40')
        el-col(:lg='24')
          el-button.btn.btn-primary(type='primary', @click='validarAndGerarFormulario()')
            .el-icon-notebook-2 Gerar formulário

    el-row
      .sair
        router-link(to='/')
          el-button.buttonDefaultSystemSecundario(
            to=''/''
          ) Sair

</template>

<script>
import EstruturaBasica from '@/components/EstruturaBasica'
import Personalizacao from '@/components/Personalizacao'
import Divider from '@/components/Divider'
import Alert from '../utils/Alert'
import { ValidationProvider, ValidationObserver } from 'vee-validate';

export default {

  components: {
    EstruturaBasica,
    Personalizacao,
    Divider
  },

  data () {
    return {
      pdi: null,
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
          corLabels: '#000',
          corPlaceholders: '#f00',
          fontSizePrimary: 21,
          imagemFundo: null,
          corButtons: 'black',
          borderRadius: 'none',
          backgroundColorButton: 'white',
          hasButton: false
        }
      }
    }
  },
  
  methods: {
    async validarAndGerarFormulario() {

      const valid = await this.$refs.observer.validate();

      if(!valid) {
        return Alert.error('Campos obrigatórios', 'Preencha os campos destacados');
      } else if (this.form.estruturaBasica.campos.length === 0) {
        return Alert.error('Adicione pelo menos um campo');
      }

      this.$router.push({ name: 'formulario', params: {formulario: this.form }})

    },
    setHasButton(value) {
      this.form.personalizacao.hasButton = value
    }
  }
};

</script>

<style scoped lang='scss'>
@import url('//unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css');

  .marginButton{
    margin-top: 10px;
    float: right;
  }

  .centerItens {
    display: flex;
    justify-content: center;  
  }

  .sair{
    text-align: center;
    margin-top: 55px;
  }

</style>