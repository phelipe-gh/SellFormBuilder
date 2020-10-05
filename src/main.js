import Vue from 'vue'
import App from './App.vue'
import router from './router'
import locale from 'element-ui/lib/locale'
import lang from 'element-ui/lib/locale/lang/pt-br'
import FlashMessage from '@smartweb/vue-flash-message'

import { ValidationProvider, ValidationObserver } from 'vee-validate'
import carregarExtends from './utils/veeValidate'
import VueMask from 'v-mask'
import VueLodash from 'vue-lodash'
import _ from 'lodash';    
import lodash from 'lodash'

import './styles/main.scss'

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
  Checkbox,
  Select,
  Tag,
  Carousel,
  Form,
  FormItem,
  CarouselItem,
  Radio,
  Image,
  TableColumn,
} from 'element-ui'

Vue.use(CarouselItem)
Vue.use(Carousel)
Vue.use(Button)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Icon)
Vue.use(Row)
Vue.use(Col)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(InputNumber)
Vue.use(Tag)
Vue.use(Image)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Checkbox)

Vue.use(VueMask)
Vue.use(FlashMessage, { time: 1000, wrapperClass: 'flash-wrapper', blockClass: 'blockClass' })
Vue.use(VueLodash, { name: 'custom' , lodash: lodash })

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

locale.use(lang);

Object.defineProperty(Vue.prototype, '$_', { value: _ });

Vue.config.productionTip = false

carregarExtends()

export default new Vue({
  router,
  FlashMessage,
  render: h => h(App)
}).$mount('#app')
