<template>
  <div class="w-form">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'wForm',
  provide () {
    return {
      Form: this
    }
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String
    }
  },
  created() {
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
</style>
