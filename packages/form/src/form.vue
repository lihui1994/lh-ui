<template>
  <form class="lh-form" :class="[labelPosition ? 'lh-form--label-' + labelPosition: '', { 'lh-form--inline': inline}]">
    <slot></slot>
  </form>
</template>

<style scoped lang="scss">
@import '../../theme-chalk/src/form';
</style>

<script>
import objectAssign from '../../../src/utils/merge';
export default {
  name: 'lhForm',
  provide() {
    return {
      elForm: this
    };
  },
  props: {
    model: Object,
    rules: Object,
    labelPosition: String,
    labelWidth: String,
    labelSuffix: {
      type: String,
      default: ''
    },
    inline: Boolean,
    inlineMessage: Boolean,
    statusIcon: Boolean,
    showMessage: {
      type: Boolean,
      default: true
    },
    size: String,
    disabled: Boolean,
    validateOnRuleChange: {
      type: Boolean,
      default: true
    },
    hideRequiredAsterisk: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      fields: [],
      potentialLabelWidthArr: []
    };
  },
  watch: {
    rules() {
      this.fields.forEach(field => {
        field.removeValidateEvents();
        field.addValidateEvents();
      })
      if(this.validateOnRuleChange) {
        this.validate(() => {});
      }
    }
  },
  computed: {
    autoLabelWidth() {
      if(!this.potentialLabelWidthArr.length) return 0;
      const max = Math.max(...this.potentialLabelWidthArr);
      return max ? `${max}px`: '';
    }
  },
  created() {
    this.$on('lh.form.addField', (field) => {
      if(field) {
        this.fields.push(field);
      }
    });

    this.$on('lh.form.removeField', (field) => {
      if(field.prop) {
        this.fields.splice(this.fields.indexOf(field), 1);
      }
    })
  },
  methods: {
    resetFields() {
      if(!this.model) {
        console.warn('[Element Warn][Form]model is required for resetFields to work.');
        return;
      }
      this.fields.forEach(field => {
        field.resetField();
      })
    },
    clearValidate(props = []) {
      const fields = props.length ? (typeof props === 'string' ? this.fields.filter(field => props === field.prop): this.fields.filter(field => props.indexOf(field.prop) > -1)): this.fields;
      fields.forEach(field => {
        field.clearValidate()
      })
    },
    validate(callback) {
      if(!this.model) {
        console.warn('[Element Warn][Form]model is required for validate to work!'); 
        return;
      }
      let promise;
      if(typeof callback !== 'function' && window.Promise) {
        promise = new window.Promise((resolve, reject) => {
          callback = function(valid) {
            valid ? resolve(valid) : reject(valid);
          };
        });
      }

      let valid = true;
      let count = 0;

      if(this.fields.length === 0 && callback) {
        callback(true);
      }

      let invalidFields = {};
      this.fields.forEach(field => {
        field.validate('', (message, field) => {
          if(message) {
            valid = false;
          }
          invalidFields = objectAssign({}, invalidFields, field);
          if(typeof callback === 'function' && ++count === this.fields.length) {
            callback(valid, invalidFields);
          }
        });
      });

      if(promise) {
        return promise;
      }
    },
    validateField(props, cb) {
      props = [].concat(props);
      const fields = this.fields.filter(field => props.indexOf(field.prop) !== -1);
      if(!fields.length) {
        console.warn('[Element Warn]please pass correct props!');
        return;
      }

      fields.forEach(field => {
        field.validate('', cb);
      })
    },
    getLabelWidthIndex(width) {
      const index = this.potentialLabelWidthArr.indexOf(width);
      if(index === -1) {
        throw new Error('[ElementForm]unpected width ', width); 
      }
      return index;
    },
    registerLabelWidth(val, oldVal) {
      if(val && oldVal) {
        const index = this.getLabelWidthIndex(oldVal);
        this.potentialLabelWidthArr.splice(index, 1, val);
      } else if(val) {
        this.potentialLabelWidthArr.push(val);
      }
    },
    deregisterLabelWidth(val) {
      const index = this.getLabelWidthIndex(val);
      this.potentialLabelWidthArr.splice(index, 1);
    }
  }
}
</script>