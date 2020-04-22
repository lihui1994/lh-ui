<script>
import lhTag from '..';
  export default {
    name: 'lhTag',
    props: {
      text: String,
      closable: Boolean,
      type: String,
      hit: Boolean,
      disableTransitions: Boolean,
      color: String,
      size: {
        type: String,
        default: 'large'
      },
    },
    computed: {
      tagSize() {
        return this.size || (this.$ELEMENT || {}).size;
      }
    },
    methods: {
      handleClose() {

      },
      handleClick() {

      }
    },
    render(h) {
      const { type, tagSize, hit } = this;
      const classes = [
        'lh-tag',
        type? `lh-tag--${type}` : '',
        tagSize ? `lh-tag-${tagSize}`: '',
        hit && 'is-hit'
      ]

      const tagLh = (
        <span 
          class={classes}
          style={{backgroundColor: this.color}}
          on-click={this.handleClick}
          >
          {this.$slots.default}
          {this.closable && <i class="lh-tag__close el-icon-close" on-click={this.handleClose}></i>}
        </span>
      )
      return this.disableTransitions ? tagLh : <transition name="lh-zoom-in-center">{tagLh}</transition>
    }
  }
</script>