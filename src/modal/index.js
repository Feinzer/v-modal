import ModalWrapper from './ModalWrapper.vue';
import BaseModal from './BaseModal.vue';

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('v-modal-wrapper', ModalWrapper);
  Vue.component('v-modal-base', BaseModal);
}

export default { install };

export { ModalWrapper, BaseModal };
