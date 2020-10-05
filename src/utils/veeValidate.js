import { extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
 
const carregarExtends = () => {

  extend('required', { ...required, message: 'Campo obrigatório.' })

  extend('requiredList', { 
    validate(value) {
      return value.length !== 0;
    },
    message: 'Adicione ao menos um campo.' 
  })

}

export default carregarExtends