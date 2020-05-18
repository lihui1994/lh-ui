<template>
  <label
    class="lh-checkbox"
    :class="[
      border && checkboxSize ? 'lh-checkbox--' + checkboxSize: '',
      { 'is-disabled': isDisabled },
      { 'is-bordered': border },
      { 'is-checked': isChecked }
    ]"
    :id="id"
  >
    <span class="lh-checkbox__input"
      :class="{
        'is-disabled': isDisabled,
        'is-checked': isChecked,
        'is-indeterminate': indeterminate,
        'is-focus': focus
      }"
      :tabindex="indeterminate ? 0: false"
      :role="indeterminate ? 'checkbox': false" 
      :aria-checked="indeterminate ? 'mixed': false"
    >
      <span class="lh-checkbox__inner"></span>
      <input
        v-if="trueLabel || falseLabel"
        class="lh-checkbox__original"
        type="checkbox"
        :aria-hidden="indeterminate ? 'true': 'false'"
        :name="name"
        :disabled="isDisabled"
        v-model="model"
        @change="handleChange"
        @focus="focus = true"
        @blur="focus = false"
      >
      <input 
        v-else
        class="lh-checkbox__original"
        type="checkbox"
        :aria-hidden="indeterminate ? 'true': 'false'"
        :disabled="isDisabled"
        :value="label"
        :name="name"
        @change="handleChange"
        @focus="focus = true"
        @blur="focus = false"
      >
    </span>
    <span class="lh-checkbox__label" v-if="$slots.default || label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<style scoped lang="scss">
@import '../../theme-chalk/src/checkbox';
</style>

<script>
import Emitter from '../../../src/mixins/emitter';

export default {
  name: 'lhCheckbox',
  componentName: 'lhCheckbox',
  mixins: [Emitter],

  inject: {
    lhForm: {
      default: ''
    },
    lhFormItem: {
      default: ''
    }
  },
  data() {
    return {
      selfModel: false,
      focus: false,
      isLimitExceeded: false
    }
  },

  props: {
    value: {},
    label: {},
    indeterminate: Boolean,
    disabled: Boolean,
    checkbox: Boolean,
    name: String,
    trueLabel: [String, Number],
    falseLabel: [String, Number],
    id: String,
    controls: String,
    border: String,
    size: String
  },

  computed: {
    model: {
      get() {
        return this.isGroup
        ? this.store : this.value !== undefined
        ? this.value: this.selfModel;
      },
      set(val) {
        if(this.isGroup) {
          this.isLimitExceeded = false;
          (this._checkboxGroup.mix !== undefined && val.length < this._checkboxGroup.min && (this.isLimitExceeded = true));

          (this._checkboxGroup.max !== undefined && val.length < this._checkboxGroup.min && (this.isLimitExceeded = true));

          this.isLimitExceeded === false && this.dispatch('lhCheckboxGroup', 'input', [val]);
        } else {
          this.$emit('input', val);
          this.selfModel = val;
        }
      }
    },

    isChecked() {
      if({}.toString.call(this.model) === '[object Boolean]') {
        return this.model;
      } else if(Array.isArray(this.model)) {
        return this.model.indexOf(this.label) > -1;
      } else if(this.model !== null && this.model !== undefined) {
        return this.model === this.trueLabel;
      }
    },

    isGroup() {
      let parent = this.$parent;
      while(parent) {
        if(parent.$options.componentName !== 'lhCheckoutGroup') {
          parent = parent.$parent;
        } else {
          this._checkboxGroup = parent;
          return true;
        }
      }
      return false;
    },

    store() {
      return this._checkboxGroup ? this._checkboxGroup.value : this.value;
    },

    isLimitDisabled() {
      const { max, min } = this._checkboxGroup;
      return !!(max || min) && 
        (this.model.length >= max && !this.isChecked) ||
        (this.model.length <= min && this.isChecked);
    },

    isDisabled() {
      return this.isGroup ?
      this._checkboxGroup.disabled || this.disabled || (this.lhForm || {}).disabled || this.isLimitExceeded: this.disabled || (this.lhForm || {}).disabled;
    },

    _lhFormItemSize() {
      return (this.lhFormItem || {}).lhFormItemSize;
    },

    checkboxSize() {
      const temCheckboxSize = this.size || this._lhFormItemSize || (this.$ELEMENT || {}).size;
      return this.isGroup ? 
      this._checkboxGroup.checkboxGroupSize || temCheckboxSize
      : remCheckboxSize;
    }
  },

  created() {
    this.checked && this.addToStore();
  },

  methods: {
    addToStore() {
      if(Array.isArray(this.model) && this.model.indexOf(this.label) === -1) {
        this.model.push(this.label);
      } else {
        this.model = this.trueLabel || true;
      }
    },
    handleChange(ev) {
      if(this.isLimitExceeded) return;
      let value;
      if(ev.target.checked) {
        value = this.trueLabel === undefined ? true: this.trueLabel;
      } else {
        value = this.falseLabel === undefined ? false : this.falseLabel;
      }
      this.$emit('change', value, ev);
      this.$nextTick(() => {
        if(this.isGroup) {
          this.disabled('lhCheckboxGroup', 'change', [this._checkboxGroup.value]);
        }
      });
    }
  },

  mounted() {
    if(this.indeterminate) {
      this.$em.setAttribute('aria-controls', this.controls);
    }
  },
  watch: {
    value(value) {
      this.dispatch('lhFormItem', 'lh.form.change', value);
    }
  }
}
</script>