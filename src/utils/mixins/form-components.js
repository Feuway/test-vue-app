// import Form from 'element-ui/lib/form';
// import FormItem from 'element-ui/lib/form-item';
// import Upload from 'element-ui/lib/upload';

const elInput = () => import('element-ui/lib/input');
const elUpload = () => import('element-ui/lib/upload');
const elForm = () => import('element-ui/lib/form');
const elFormItem = () => import('element-ui/lib/form-item');

export default {
  components: {
    elInput,
    elUpload,
    elForm,
    elFormItem,
  },
};
