<template lang='pug'>
  .container
    .component
      .header
        .title
          | Listagem de formulários
        router-link(to='/criarFormulario')
          el-button.buttonDefaultSystem.link(
            type='default',
            to='/criarFormulario'
          ) Criar formulário
      .body
        el-table(
          :data='tableData',
          stripe
        )
          template(slot='empty')
            | Não há registros.
          el-table-column(
            label='Nome do formulário',
            prop='name',
          )
          el-table-column(
            label='Data de criação',
            prop='date'
          )
          el-table-column(
            label='Ações',
            prop='acoes',
            align='center',
            width='150'
          )
            template(
              slot-scope='scope'
            )
              i.el-icon-edit.pointer(
                text='Editar',
                method='editar',
                @edit='edit(scope.row)'
              )
              |&nbsp
              i.el-icon-delete.pointer(
                text='Remover',
                method='remover',
                @delete='delete(scope.row)'
              )

</template>

<script>
import Alert from '../utils/Alert';

export default {

  data() {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: 'Feedback empresarial'        },
        {
          date: '2016-05-02',
          name: 'Votação para líder'
        },
        {
          date: '2016-05-04',
          name: 'Melhorias da empresa'
        },
        {
          date: '2016-05-01',
          name: 'Alinhamento para reunião'
        },
      ]
    };
  },

  created() {
  },

  methods: {
    redirectTo() {
      this.$router.push('/criarFormulario');
    }
  }
};
</script>

<style scoped lang='scss'>
@import url('//unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css');
  
  .pointer {
    cursor: pointer;
  }

</style>
