import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import Dialog from 'element-ui/lib/dialog';
import Menu from 'element-ui/lib/menu';
import MenuItem from 'element-ui/lib/menu-item';
import Input from 'element-ui/lib/input';
import Switch from 'element-ui/lib/switch';
import Button from 'element-ui/lib/button';
import Form from 'element-ui/lib/form';
import FormItem from 'element-ui/lib/form-item';
import Icon from 'element-ui/lib/icon';
import Row from 'element-ui/lib/row';
import Col from 'element-ui/lib/col';
import Upload from 'element-ui/lib/upload';
import Card from 'element-ui/lib/card';
import Rate from 'element-ui/lib/rate';
import Container from 'element-ui/lib/container';
import Header from 'element-ui/lib/header';
import Main from 'element-ui/lib/main';
import Collapse from 'element-ui/lib/collapse';
import CollapseItem from 'element-ui/lib/collapse-item';

import Loading from 'element-ui/lib/loading';
import Notification from 'element-ui/lib/notification';
import Message from 'element-ui/lib/message';

export default (Vue) => {
  Vue.use(Dialog);
  Vue.use(Menu);
  Vue.use(MenuItem);
  Vue.use(Input);
  Vue.use(Switch);
  Vue.use(Button);
  Vue.use(Form);
  Vue.use(FormItem);
  Vue.use(Icon);
  Vue.use(Row);
  Vue.use(Col);
  Vue.use(Upload);
  Vue.use(Card);
  Vue.use(Rate);
  Vue.use(Container);
  Vue.use(Header);
  Vue.use(Main);
  Vue.use(Collapse);
  Vue.use(CollapseItem);
  // //
  Vue.use(Loading.directive);
  // //
  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$notify = Notification;
  Vue.prototype.$message = Message;
  // //
  Vue.component(CollapseTransition.name, CollapseTransition);
};
