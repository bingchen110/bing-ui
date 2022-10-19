<template>
  <div class="w-radio-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'wRadioGroup',
  props: {
    value: null
  },
  provide () {
    return {
      radioGroup: this
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
