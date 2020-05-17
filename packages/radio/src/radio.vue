<template>
  <label
    class="lh-radio"
    :class="[
      border && radioSize ? 'lh-radio--' + radioSize : '',
      { 'is-disabled': isDisabled },
      { 'is-focus': focus },
      { 'is-bordered': border },
      { 'is-checked': model === label }
    ]"
    role="radio"
    :aria-checked="model === label"
    :aria-disabled="isDisabled"
    :tabindex="tabIndex"
    @keydown.space.stop.prevent="model = isDisabled ? model : label"
  >
    <span class="lh-radio__input"
      :class="{
        'is-disabled': isDisabled,
        'is-checked': model === label
      }"
    >
      <span class="lh-radio__inner"></span>
      <input
        ref="radio"
        class="lh-radio__original"
        :value="label"
        type="radio"
        aria-hidden="true"
        v-model="model"
        @focus="focus = true"
        @blur="focus = false"
        @change="handleChange"
        :name="name"
        :disabled="isDisabled"
        tabindex="-1"
      >
    </span>
    <span class="lh-radio__label" @keydown.stop>
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<style scoped lang="scss">
@import "../../theme-chalk/src/radio.scss";
</style>

<script>
import Emitter from '../../../src/mixins/emitter';

export default {
  name: 'LhRadio',
  
  mixins: [Emitter],

  inject: {
    LhForm: {
      default: ''
    },
    LhFormItem: {
      default: ''
    }
  },

  props: {
    value: {},
    label: {},
    disabled: Boolean,
    name: String,
    border: Boolean,
    size: String
  },

  data() {
    return {
      focus: false
    }
  },
  computed: {
    isGroup() {
      let parent = this.$parent;
      while(parent) {
        if(parent.$options.componentName !== 'lhRadioGroup') {
          parent = parent.$parent;
        } else {
          this._radioGroup = parent;
          return true;
        }
      }
      return false;
    },
    model: {
      get() {
        return this.isGroup ? this._radioGroup.value : this.value;
      },
      set(val) {
        if(this.isGroup) {
          this.dispatch('lhRadioGroup', 'input', [val]);
        } else {
          this.$emit('input', val);
        }
        this.$refs.radio && (this.$refs.radio.checked = this.model === this.label);
      }
    },
    _lhFormItemSize() {
      return (this.lhFormItem || {}).lhFormItemSize;
    },
    radioSize() {
      const temRadioSize = this.size || this._lhFormItemSize || (this.$ELEMENT || {}).size;
      return this.isGroup ? this._radioGroup.radioGroupSize || temRadioSize: temRadioSize;
    },
    isDisabled() {
      return this.isGroup ? this._radioGroup.disabled || this.disabled || (this.lhForm || {}).disabled: this.disabled || (this.lhForm || {}).disabled;
    },
    tabIndex() {
      return (this.isDisabled || (this.isGroup && this.model !== this.label)) ? -1 : 0;
    }
  },
  methods: {
    handleChange() {
      this.$nextTick(() => {
        this.$emit('change', this.model);
        this.isGroup && this.dispatch('lhRadioGroup', 'handleChange', this.model);
      });
    }
  }
}
</script>