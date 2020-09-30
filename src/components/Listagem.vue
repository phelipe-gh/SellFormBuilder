<template lang="pug">
  .container
    .component
      .header
        h2.title Listagem de formulários
        router-link(to="/criarFormulario")
          Button.link(
            title="Criar formulário",
            type="primary",
            to="'/criarFormulario'"
          )
      .body
        el-table(
          :data="tableData",
          stripe
        )
          template(slot="empty")
            | Não há registros.
          el-table-column(
            label="Nome",
            prop="name",
          )
          el-table-column(
            label="CPF",
            prop="tag"
          )
          el-table-column(
            label="Data de nascimento",
            prop="date"
          )
          el-table-column(
            label="Ações",
            prop="acoes",
            align="center",
            width="150"
          )
            template(
              slot-scope="scope"
            )
              i.el-icon-edit.pointer(
                text="Editar",
                method="editar",
                @edit="edit(scope.row)",
                @click="teste()"
              )
              |&nbsp
              i.el-icon-delete.pointer(
                text="Remover",
                method="remover",
                @delete="delete(scope.row)",
                @click="teste()"
              )

</template>

<script>
import Button from '@/components/Button';
import ActionButton from '@/components/ActionButton';

export default {
  components: {
    Button,
    ActionButton,
  },

  data() {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: 'Rogger',
          address: 'No. 189, Grove St, Los Angeles',
          tag: 'Home',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          tag: 'Office',
        },
        {
          date: '2016-05-04',
          name: 'Alex',
          address: 'No. 189, Grove St, Los Angeles',
          tag: 'Home',
        },
        {
          date: '2016-05-01',
          name: 'Mary',
          address: 'No. 189, Grove St, Los Angeles',
          tag: 'Office',
        },
      ],
    };
  },

  methods: {
    teste() {
      window.alert('Oi');
    },
    redirectTo() {
      this.$router.push("/criarFormulario");
    }
  }
};
</script>

<style scoped lang="scss">
@import url("//unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css");
  
  .pointer {
    cursor: pointer;
  }

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
    background-color: #eef8ff;
 
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .title {
      margin-top: 2%;
      font-size: 25px;
      font-family: Arial, Helvetica, sans-serif;
    }

    .body {
      border-radius: 5px;
    }

    .table {
      margin-top: 20px;
      width: 100%;
    }
  }
</style>
