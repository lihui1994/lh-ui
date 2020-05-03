<template>
  <div
    class="lh-switch"
    :class="{'is-disableed': switchDisabled, 'is-checked': checked}"
    role="switch"
    :aria-checked="checked"
    :aria-disabled="switchDisabled"
    @click.prevent="switchValue"
  >
    <input 
      class="lh-switch__input"
      type="checkbox"
      @change="handleChange"
      ref="input"
      :id="id"
      :name="name"
      :true-value="activeValue"
      :false-value="switchDisabled"
      :disabled="switchDisabled"
      @keydown.enter="switchValue"
    >
    <span
      :class="['lh-switch__label', 'lh-switch__label--left', !checked ? 'is-active': '']"
      v-if="inactiveIconClass || inactiveText"
    >
      <i :class="[inactiveIconClass]"></i> 
      <span v-if="!inactiveIconClass && inactiveText" :aria-hidden="checked">{{inactiveText}}</span>
    </span>
    <span class="lh-switch__core" ref="core" :style="{'width': coreWidth + 'px'}"></span>
    <span
      :class="['lh-switch__label', 'lh-switch__label--right', checked? 'is-active': '']"
      v-if="activeIconClass || activeText"
    >
      <i :class="[activeIconClass]" v-if="activeIconClass"></i>
      <span v-if="!activeIconClass && activeText" :aria-hidden="!checked">{{activeText}}</span>
    </span>
  </div>
</template>

<style scoped lang="scss">
@import '../../theme-chalk/src/switch';
</style>

<script>
import emitter from '../../../src/mixins/emitter';
import Focus from '../../../src/mixins/focus';
import Migrating from '../../../src/mixins/migrating';

export default {
  name: 'lhSwitch',
  mixins: [Focus('input'), Migrating, emitter],
  inject: {
    elForm: {
      default: ''
    }
  },
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 40
    },
    activeIconClass: {
      type: String,
      default: ''
    },
    inactiveIconClass: {
      type: String,
      default: ''
    },
    activeText: String,
    inactiveText: String,
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    validateEvent: {
      type: Boolean,
      default: true
    },
    id: String
  },
  data() {
    return {
      coreWidth: this.width
    }
  },
  created() {
    if(!~[this.activeValue, this.inactiveValue].indexOf(this.value)) {
      this.$emit('input', this.inactiveValue);
    }
  },
  computed: {
    checked() {
      return this.value === this.activeValue;
    },
    switchDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    }
  },
  watch: {
    checked() {
      this.$refs.input.checked = this.checked;
      if(this.activeColor || this.inactiveColor) {
        this.setBackgroundColor();
      }
      if(this.validateEvent) {
        this.dispatch('LhFormItem', 'lh.form.change', [this.value]);
      }
    }
  },
  methods: {
    handleChange(event) {
      const val = this.checked ? this.inactiveValue: this.activeValue;
      this.$emit('input', val);
      this.$emit('change', val);
      this.$nextTick(() => {
        this.$refs.input.checked = this.checked;
      });
    },
    setBackgroundColor() {
      let newColor = this.checked ? this.activeColor : this.inactiveColor;
      this.$refs.core.style.borderColor = newColor;
      this.$refs.core.style.backgroundColor = newColor;
    },
    switchValue() {
      !this.switchDisabled && this.handleChange();
    },
    getMigratingConfig() {
      return {
        props: {
          'on-color': 'on-color is renamed to active-color.',
          'off-color': 'off-color is renamed to inactive-color.',
          'on-text': 'on-text is renamed to active-text.',
          'off-text': 'off-text is renamed to inactive-text.',
          'on-value': 'on-value is renamed to active-value.',
          'off-value': 'off-value is renamed to inactive-value.',
          'on-icon-class': 'on-icon-class is renamed to active-icon-class.',
          'off-icon-class': 'off-icon-class is renamed to inactive-icon-class.'
        }
      };
    }
  },
  mounted() {
    this.coreWidth = this.width || 40;
    if(this.activeColor || this.inactiveColor) {
      this.setBackgroundColor();
    }
    this.$refs.input.checked = this.checked;
  }
}
</script>