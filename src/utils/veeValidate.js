import { extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
 
const carregarExtends = () => {

  extend('required', { ...required, message: 'Campo obrigatório.' })

}

export default carregarExtends