import vue from '../main'

export default {

  error(titulo, mensagem) {
    vue.flashMessage.show({
      status: 'error',
      title: titulo,
      message: mensagem
    });    
  }

}
