<template>
  <div 
    class="lh-form-item"
    :class="[{
      'lh-form-item--fadeback': lhForm && lhForm.statusIcon,
      'is-error': validateState === 'error',
      'is-validating': validateState === 'validating',
      'is-success': validateState === 'success',
      'is-required': isRequired || required,
      'is-no-asterisk': lhForm && lhForm.hideRequiredAsterisk
    },
    sizeClass ? 'lh-form-item--' + sizeClass: ''
  ]">
    <div class="lh-form-item__content" :style="contentStyle">
      <slot></slot>
      <transition name="lh-zoom-in-top">
        <slot
          v-if="validateState === 'error' && showMessage && form.showMessage"
          name="error"
          :error="validateMessage"
        >
          <div
            class="lh-form-item__error"
            :class="{
              'lh-form-item__error--inline': typeof inlineMessage === 'boolean' ? inlineMessage : (lhForm && lhForm.inlineMessage || false)
            }"
          >{{validateMessage}}</div>
        </slot>
      </transition>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../../theme-chalk/src/form';
</style>

<script>
import AsyncValidator from 'async-validator';
import emitter from '../../../src/mixins/emitter';
import objectAssign from '../../../src/merge';
import { noop, getPropByPath } from '../../../src/utils/utils';

export default {
  name: 'lhFormItem',

  mixins: [emitter],
  provide() {
    return {
      lhFormItem: this
    }
  },

  inject: ['lhForm'],

  props: {
    label: String,
    labelWidth: String,
    prop: String,
    required: {
      type: Boolean,
      default: undefined
    },
    rules: [Object, Array],
    error: String,
    validateStatus: String,
    for: String,
    inlineMessage: {
      type: [String, Boolean],
      default: ''
    },
    showMessage: {
      type: Boolean,
      default: true
    },
    size: String
  },
  data() {
    return {
      validateState: '',
      validateMessage: '',
      validateDisabled: false,
      validator: {},
      isNested: false,
      computedLabelWidth: ''
    }
  },
  watch: {
    error: {
      immediate: true,
      handler(value) {
        this.validateMessage = value,
        this.validateState = value ? 'error': '';
      }
    },
    validateStatus(value) {
      this.validateState = value;
    }
  },
  computed: {
    labelFor() {
      return this.for || this.prop;
    },
    labelStyle() {
      const ret = {};
      if(this.form.labelPosition === 'top') return ret;
      const labelWidth = this.labelWidth || this.form.labelWidth;
      if(labelWidth) {
        ret.width = labelWidth;
      }
      return ret;
    },
    contentStyle() {
      const ret = {};
      const label = this.label;
      if(this.form.labelPosition === 'top' || this.form.inline) return ret;
      if(!label && !this.labelWidth && this.isNested) return ret;
      const labelWidth = this.labelWidth || this.form.labelWidth;
      if(labelWidth === 'auto') {
        if(this.labelWidth === 'auto') {
          ret.marginLeft = this.computedLabelWidth;
        } else if(this.form.labelWidth === 'auto') {
          ret.marginLeft = this.lhForm.autoLabelWidth
        }
      } else {
        ret.marginLeft = labelWidth;
      }
      return ret;
    },
    form() {
      let parent = this.$parent;
      let parentName = parent.$options.componentName;
      while(parentName !== 'lhForm') {
        if(parentName === 'lhFormItem') {
          this.isNested = true;
        }
        parent = parent.$parent;
        parentName = parent.$options.componentName;
      }
      return parent;
    },
    fieldValue() {
      const model = this.form.model;
      if(!model || !this.prop) {return;}
      let path = this.prop;
      if(path.indexOf(':') !== -1) {
        path = path.replace(/:/, '.');
      }
      return getPropByPath(model, path, true).v;
    },
    isRequired() {
      let rules = this.getRules();
      let isRequired = false;

      if(rules && rules.length) {
        rules.every(rule => {
          if(rule.required) {
            isRequired = true;
            return false;
          }
          return true;
        });
      }
      return isRequired;
    },
    _formSize() {
      return this.lhForm.size;
    },
    lhFormItemSize() {
      return this.size || this._formSize;
    },
    sizeClass() {
      return this.lhFormItemSize || (this.$ELEMENT || {}).size;
    }
  },
  methods: {
    validate(trigger, callback = noop) {
      this.validateDisabled = false;
      const rules = this.getFilteredRule(trigger);
      if((!rules || rules.length === 0 ) && this.required === undefined) {
        callback();
        return true;
      }

      this.validateState = 'validating';

      const descriptor = {};
      if(rules && rules.length > 0) {
        rules.forEach(rule => {
          delete rule.trigger;
        })
      }
      descriptor[this.prop] = rules;

      const validator = new AsyncValidator(descriptor);
      const model = {};
      model[this.prop] = this.fieldValue;

      validator.validate(model, {firstFields: true}, (errors, invalidFields) => {
        this.validateState = !error ? 'success': 'error';
        this.validateMessage = errors ? errors[0].message : '';

        callback(this.validateMessage, invalidFields);
        this.lhForm && this.lhForm.$emit('validate', this.prop, !errors, this.validateMessage || null);
      })
    },
    clearValidate() {
      this.validateState = '';
      this.validateMessage = '',
      this.validateDisabled = false;
    },
    resetField() {
      this.validateState = '';
      this.validateMessage = '';

      let model = this.form.model;
      let value = this.fieldValue;
      let path = this.prop;
      if(path.indexOf(':') !== -1) {
        path = path.replace(/:/, '.');
      }

      let prop = getPropByPath(model, path, true);
      this.validateDisabled = true;
      if(Array.isArray(value)) {
        prop.o[prop.k] = [].concat(this.initialValue);
      } else {
        prop.o[prop.k] = this.initialValue;
      }

      this.$nextTick(() => {
        this.validateDisabled = false;
      });

      this.broadCast('lhTimeSelect', 'fieldReset', this.initialValue);
    },
    getRules() {
      let formRules = this.form.rules;
      const selfRules = this.rules;
      const requiredRule = this.required !== undefined ? { required: !!this.required}: [];

      const prop = getPropByPath(formRules, this.prop || '');
      formRules = formRules ? (prop.o[this.prop || ''] || prop.v): [];

      return [].concat(selfRules || formRules || []).concat(requiredRule);
    },
    getFilteredRule(trigger) {
      const rules = this.getRules();

      return rules.filter(rule => {
        if(!rule.trigger || trigger === '') return true;
        if(Array.isArray(rule.trigger)) {
          return rule.trigger.indexOf(trigger) > -1;
        } else {
          return rule.trigger === trigger;
        }
      }).map(rule => objectAssign({}, rule));
    },
    onFieldBlur() {
      this.validate('blur');
    },
    onFieldChange() {
      if(this.validateDisabled) {
        this.validateDisabled = false;
        return;
      }
      this.validate('change');
    },
    updateComputedLabelWidth(width) {
      this.computedLabelWidth = width ? `${width}px`: '';
    },
    addValidateEvents() {
      const rules = this.getRules();

      if(rules.length || this.required !== undefined) {
        this.$on('lh.form.blur', this.onFieldBlur);
        this.$on('lh.form.change', this.onFieldChange);
      }
    },
    removeValidateEvents() {
      this.$off();
    }
  },
  mounted() {
    if(tihs.prop) {
      this.dispatch('LhForm', 'lh.form.addField', [this]);

      let initialValue = this.fieldValue;
      if(Array.isArray(initialValue)) {
        initialValue = [].concat(initialValue);
      }
      Object.defineProperty(this, 'initialValue', {
        value: initialValue
      });

      this.addValidateEvents();
    }
  },
  beforeDestroy() {
    this.dispatch('LhForm', 'lh.form.removeField', [this]);
  }
}
</script>