<template>
  <div id="app">
    <button @click="show = true">Show modal</button>
    <ModalWrapper
      :show="show"
      @cancel="show = false"
      @accept="show = false"
      mobile
      keep-alive
    >
      <BaseModal title="title" message="Message" accept cancel />
    </ModalWrapper>
  </div>
</template>

<script>
import ModalWrapper from './modal/ModalWrapper.vue';
import BaseModal from './modal/BaseModal.vue';

export default {
  name: 'App',
  components: {
    ModalWrapper,
    BaseModal,
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>
