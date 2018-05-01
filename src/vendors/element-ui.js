// import Element from 'element-ui';
// import locale from 'element-ui/lib/locale/lang/en';
//
// export default (Vue) => {
//   Vue.use(Element, { locale });
// };

// import {
// Dialog,
// Menu,
// Submenu,
// MenuItem,
// MenuItemGroup,
// Input,
// Radio,
// RadioGroup,
// RadioButton,
// Switch,
// Button,
// ButtonGroup,
// Form,
// FormItem,
// Alert,
// Icon,
// Row,
// Col,
// Upload,
// Card,
// Rate,
// Container,
// Header,
// Aside,
// Main,
// Footer,
// Loading,
// Message,
// Notification,
// } from 'element-ui';

import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import Dialog from 'element-ui/lib/dialog';
import Menu from 'element-ui/lib/menu';
import Submenu from 'element-ui/lib/submenu';
import MenuItem from 'element-ui/lib/menu-item';
// import MenuItemGroup from 'element-ui/lib/menu-item-group';

export default (Vue) => {
  Vue.use(Dialog);
  Vue.use(Menu);
  Vue.use(Submenu);
  Vue.use(MenuItem);
  // Vue.use(MenuItemGroup);
  // Vue.use(Input);
  // Vue.use(Radio);
  // Vue.use(RadioGroup);
  // Vue.use(RadioButton);
  // Vue.use(Switch);
  // Vue.use(Button);
  // Vue.use(ButtonGroup);
  // Vue.use(Form);
  // Vue.use(FormItem);
  // Vue.use(Alert);
  // Vue.use(Icon);
  // Vue.use(Row);
  // Vue.use(Col);
  // Vue.use(Upload);
  // Vue.use(Card);
  // Vue.use(Rate);
  // Vue.use(Container);
  // Vue.use(Header);
  // Vue.use(Aside);
  // Vue.use(Main);
  // Vue.use(Footer);
  // //
  // Vue.use(Loading.directive);
  // //
  // Vue.prototype.$loading = Loading.service;
  // Vue.prototype.$notify = Notification;
  // Vue.prototype.$message = Message;
  // //
  Vue.component(CollapseTransition.name, CollapseTransition);
};
