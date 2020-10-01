import vue from '../main'

export default {

  validarFormulario(form) {

    let resultValidation = {
      estruturaBasica: false,
      personalizacao: false
    }

    resultValidation.estruturaBasica = this.validarEstrutura(form.estruturaBasica);
    resultValidation.personalizacao = this.validarPersonalizacao(form.personalizacao);

  },

  validarEstrutura(estrutura) {
    
  },

  validarPersonalizacao(personalizacao) {

  }

}
