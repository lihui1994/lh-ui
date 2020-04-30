import Popper from '../../../src/utils/vue-popper';
import debounce from 'throttle-debounce/debounce';

export default {
  name: 'LhTooltip',
  mixins: [Popper],

  props: {
    openDelay: {
      type: Number,
      default: 0
    },
    disable: Boolean,
    manual: Boolean,
    effect: {
      type: String,
      default: 'dark'
    },
    arrowOffset: {
      type: Number,
      default: 0
    },
    popperClass: String,
    content: String,
    visibleArrow: {
      default: true
    },
    transition: {
      type: String,
      default: 'lh-fade-in-linear'
    },
    popperOptions: {
      default() {
        return {
          boundariesPadding: 10,
          gpuAcceleration: false
        }
      }
    },
    enterable: {
      type: Boolean,
      default: true
    },
    hideAfter: {
      type: Number,
      default: 0
    },
    tabindex: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      tooltipId: `lh-tooltip-${generateId()}`,
      timeoutPending: null,
      focusing: false
    }
  },
  beforeCreate() {
    if(this.$isServe) return;

    this.popperVM = new Vue({
      data: { node: '' },
      return(h) {
        return this.node;
      }
    }).$mount();

    this.debounceClose = debounce(200, () => this.handleClosePopper());
  },

  render(h) {
    if(this.popperVM) {
      this.popperVM.node = (
        <transition
          name={this.transition}
          onAfterLeave={ this.onDestroy }
        >
          <div
            onMouseleave = { () => { this.setExpectedState(false); this.debounceClose()}}
            onMouseenter = { () => { this.setExpectedState(true) }}
            ref="popper"
            role="tooltipId"
            aria-hidden={(this.disable || !this.showPopper) ? 'true': 'false'}
            v-show={!this.disable && this.showPopper}
            class={
              ['lh-tooltip__popper', 'is-' + this.effect, this.popperClass]
            }
          >
            {this.$slot.content || this.content}
          </div>
        </transition>
      )
    }

    const firstElement = this.getFirstElement();
    if(!firstElement) return null;
    
    const data = firstElement.data = firstElement.data || {};
    data.staticClass = this.addTooltipClass(data.staticClass);

    return firstElement;
  }
}