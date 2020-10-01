import Vue from 'vue'
import App from './App.vue'
import router from './router'
import locale from 'element-ui/lib/locale';
import lang from 'element-ui/lib/locale/lang/pt-br';

import './styles/main.scss';

import {
  Button,
  Table,
  Icon,
  Row,
  Col,
  TabPane,
  Steps,
  RadioGroup,
  Radio,
  Input,
  Step,
  Tag,
  Option,
  Select,
  TableColumn,
} from 'element-ui';

Vue.use(Button);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Step);
Vue.use(Steps);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(TabPane);
Vue.use(Tag);

locale.use(lang);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
