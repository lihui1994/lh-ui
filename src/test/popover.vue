<template>
  <div>
    <lh-popover
      placement="top-start"
      title="标题"
      width="200"
      trigger="hover"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      <lh-button slot="reference">hover 激活</lh-button>
    </lh-popover>

    <lh-popover
      placement="bottom"
      title="标题"
      width="200"
      trigger="manual"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      v-model="visible">
      <lh-button slot="reference" @click="visible = !visible">手动激活</lh-button>
    </lh-popover>
  </div>
</template>

<style scoped>

</style>

<script>
import lhPopover from '../../packages/popover';
import lhButton from '../../packages/button';
export default {
  name: 'testPopover',
  components: {
    lhPopover,
    lhButton
  },
  data() {
      return {
        visible: false
      };
    }
}
</script>