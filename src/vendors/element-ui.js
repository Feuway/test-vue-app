// import Element from 'element-ui';
// import locale from 'element-ui/lib/locale/lang/en';
//
// export default (Vue) => {
//   Vue.use(Element, { locale });
// };

import {
  Dialog,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  Radio,
  RadioGroup,
  RadioButton,
  Switch,
  Button,
  ButtonGroup,
  Form,
  FormItem,
  Alert,
  Icon,
  Row,
  Col,
  Upload,
  Card,
  Rate,
  Collapse,
  CollapseItem,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Loading,
  Message,
  Notification,
} from 'element-ui';

import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';

export default (Vue) => {
  Vue.use(Dialog);
  Vue.use(Menu);
  Vue.use(Submenu);
  Vue.use(MenuItem);
  Vue.use(MenuItemGroup);
  Vue.use(Input);
  Vue.use(Radio);
  Vue.use(RadioGroup);
  Vue.use(RadioButton);
  Vue.use(Switch);
  Vue.use(Button);
  Vue.use(ButtonGroup);
  Vue.use(Form);
  Vue.use(FormItem);
  Vue.use(Alert);
  Vue.use(Icon);
  Vue.use(Row);
  Vue.use(Col);
  Vue.use(Upload);
  Vue.use(Card);
  Vue.use(Rate);
  Vue.use(Collapse);
  Vue.use(CollapseItem);
  Vue.use(Container);
  Vue.use(Header);
  Vue.use(Aside);
  Vue.use(Main);
  Vue.use(Footer);
  //
  Vue.use(Loading.directive);
  //
  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$notify = Notification;
  Vue.prototype.$message = Message;
  //
  Vue.component(CollapseTransition.name, CollapseTransition);
};

