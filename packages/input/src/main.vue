<template>
  <div
    :class="[
      type === 'textarea' ? 'lh-textarea': 'lh-input',
      inputSize ? 'lh-input--' + inputSize: '',
    ]"
  >
    <template v-if="type !== 'textarea'">
      <input 
        :tabindex="tabindex"
        v-if="type !== 'textarea'"
        class="lh-input__inner"
        v-bind="$attrs"
        :type="showPassword ? (passwordVisible ? 'text': 'password'): type"
        :disabled="inputDisabled"
        :readonly="readonly"
        :autocomplete="autoComplete || autocomplete"
        ref="input"
        @compositionstart="handleCompositionStart"
        @compositionupdate="handleCompositionUpdate"
        @compositionend="handleCompositionEnd"
        @input="handleInput"
        @blur="handleBlur"
        @change="handleChange"
        :aria-label="label"
      />
    </template>
  </div>
</template>

<style scoped lang="scss">

</style>

<script>
export default {
  name: 'lhInput',
  inject: {
    elForm: {
      default: ''
    },
    elFormItem: ''
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    size: String,
    showPassword: {
      type: Boolean,
      default: false
    },

  },
  data() {
    return {
      passwordVisible: false
    }
  },
  computed: {
    _elFormItemSize() {
      return (this.elFormItem || {}.elFormItemSize);
    },
    inputSize() {
      return this.size;
    },
    inputDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    }
  }
}
</script>