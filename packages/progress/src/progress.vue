<template>
  <div
    class="lh-progress"
    :class="[
      'lh-progress--'+type,
      status ? 'is-'+status : '',
      {
        'lh-progress-widthout-text': !showText,
        'lh-progress--text-inside': textInside
      }
    ]"
    :aria-valuenow="percentage"
  >
    <div class="lh-progress-bar" v-if="type === 'line'">
      <div class="lh-progress-bar__outer" :style="{height: strokeWidth + 'px'}">
        <div class="lh-progress-bar__inner" :style="barStyle">
          <div class="lh-progress-bar__innerText" v-if="showText && textInside">{{content}}</div>
        </div>
      </div>
    </div>
    <div v-else class="lh-progress-circle" :style="{height: width + 'px', width: width + 'px'}">
      <svg viewBox="0 0 100 100">
        <path
          class="lh-progress-circle__track"
          :d="trackPath"
          stroke="#e5e9f2"
          :stroke-width="relativeStrokeWidth"
          fill="none"
          :style="trailPathStyle"
        >
        </path>
        <path
          class="lh-progress-circle__path"
          :d="trackPath"
          :stroke="stroke"
          fill="none"
          :stroke-linecap="strokeLinecap"
          :stroke-width="percentage ? relativeStrokeWidth : 0"
          :style="circlePathStyle"
        ></path>
      </svg>
    </div>
    <div
      class="lh-progress__text"
      v-if="showText && !textInside"
      :style="{fontSize: progressTextSize + 'px'}"
    >
      <template v-if="!status">{{content}}</template>
      <i v-else :class="iconClass"></i>
    </div>
  </div>
</template>

<style lang="scss">
  @import "../../theme-chalk/src/progress.scss";
</style>

<script>
export default {
  name: 'lhProgress',
  props: {
    type: {
      type: String,
      default: 'line',
      validator: val => ['line', 'circle', 'dashboard'].indexOf(val) > -1
    },
    status: {
      type: String,
      validator: val => ['success', 'exception', 'warning'].indexOf(val) > -1
    },
    percentage: {
      type: Number,
      default: 0,
      required: true,
      validator: val => val >=0 && val <= 100
    },
    showText: {
      type: Boolean,
      default: true
    },
    textInside: {
      type: Boolean,
      default: false
    },
    strokeWidth: {
      type: Number,
      default: 6
    },
    strokeLinecap: {
      type: String,
      default: 'round'
    },
    color: {
      type: [String, Array, Function],
      default: ''
    },
    width: {
      type: Number,
      default: 126
    },
    format: Function
  },
  computed: {
    barStyle() {
      const style = {};
      style.width = this.percentage +　'%';
      style.backgroundColor = this.getCurrentColor(this.percentage);
      return style;
    },
    progressTextSize() {
      return this.type === 'line' ? 12 + this.strokeWidth * .4 : this.width * 0.111111 + 2;
    },
    content() {
      if(typeof this.format === 'function') {
        return this.format(this.percentage) || '';
      } else {
        return `${this.percentage}%`;
      }
    },
    iconClass() {
      if(this.status === 'warning') {
        return 'el-icon-warning';
      }
      if(this.type === 'line') {
        return this.status === 'success' ? 'el-icon-circle-check': 'el-icon-circle-close';
      } else {
        return this.status === 'success' ? 'el-icon-check' : 'el-icon-close';
      }
    },
    relativeStrokeWidth() {
      return (this.strokeWidth / this.width * 100).toFixed(1);
    },
    radius() {
      if (this.type === 'circle' || this.type === 'dashboard') {
          return parseInt(50 - parseFloat(this.relativeStrokeWidth) / 2, 10);
        } else {
          return 0;
        }
    },
    trackPath() {
      const radius = this.radius;
      const isDashboard = this.type === 'dashboard';
      return `
        M 50 50
        m 0 ${isDashboard ? '' : '-'}${radius}
        a ${radius} ${radius} 0 1 1 0 ${isDashboard ? '-': ''}${radius * 2}
        a ${radius} ${radius} 0 1 1 0 ${isDashboard ? '': '-'}${radius * 2}
      `;
    },
    perimeter() {
      return 2 * Math.PI * this.radius;
    },
    rate() {
      return this.type === 'dashboard' ? 0.75 : 1;
    },
    strokeDashoffset() {
      const offset = -1 * this.perimeter * (1 - this.rate) / 2;
      return `${offset}px`;
    },
    trailPathStyle() {
      return {
        strokeDasharray: `${(this.perimeter * this.rate)}px, ${this.perimeter}px`,
        strokeDashoffset: this.strokeDashoffset
      }
    },
    circlePathStyle() {
      return {
          strokeDasharray: `${this.perimeter * this.rate * (this.percentage / 100) }px, ${this.perimeter}px`,
          strokeDashoffset: this.strokeDashoffset,
          transition: 'stroke-dasharray 0.6s ease 0s, stroke 0.6s ease'
        };
    },
    stroke() {
      let ret;
      if(this.color) {
        ret = this.getCurrentColor(this.percentage);
      } else {
        switch (this.status) {
          case 'success':
              ret = '#13ce66';
              break;
            case 'exception':
              ret = '#ff4949';
              break;
            case 'warning':
              ret = '#e6a23c';
              break;
            default:
              ret = '#20a0ff';
        }
      }
      return ret;
    },
  },
  methods: {
    getCurrentColor(percentage) {
      if(typeof this.color === 'function') {
        return this.color(percentage);
      } else if(typeof this.color === 'string') {
        return this.color;
      } else {
        return this.getLevelColor(percentage);
      }
    },
    getLevelColor(percentage) {
      const colorArray = this.getColorArray.sort((a, b) => a.percentage - b.percentage);
      for(let i = 0; i < colorArray.length; i++) {
        if(colorArray[i].percentage > percentage) {
          return colorArray[i].color;
        }
      }
      return colorArray[colorArray.length - 1].color;
    },
    getColorArray() {
      const color = this.color;
      const span = 100 / color.height;
      return color.map((seriesColor, index) => {
        if(typeof seriesColor === 'string') {
          return {
            color: seriesColor,
            progress: (index + 1) * span
          }
        }
        return seriesColor;
      })
    }
  }
}
</script>