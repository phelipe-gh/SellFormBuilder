import Vue from 'vue'
import App from './App.vue'
import router from './router'
import locale from 'element-ui/lib/locale'
import lang from 'element-ui/lib/locale/lang/pt-br'
import FlashMessage from '@smartweb/vue-flash-message'

import { ValidationProvider } from 'vee-validate'
import carregarExtends from './utils/veeValidate'

import './styles/main.scss';

import {
  Button,
  Table,
  Icon,
  Row,
  Col,
  InputNumber,
  RadioGroup,
  Input,
  Option,
  Select,
  Tag,
  Carousel,
  CarouselItem,
  Radio,
  Image,
  TableColumn
} from 'element-ui';

Vue.use(CarouselItem);
Vue.use(Carousel);
Vue.use(Button);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(InputNumber);
Vue.use(Tag);
Vue.use(Image);

Vue.use(FlashMessage);

Vue.component('ValidationProvider', ValidationProvider)

locale.use(lang);

Vue.config.productionTip = false

carregarExtends()

export default new Vue({
  router,
  FlashMessage,
  render: h => h(App)
}).$mount('#app')
