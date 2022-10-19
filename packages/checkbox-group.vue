<template>
  <div class="w-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'wCheckboxGroup',
  provide () {
    return {
      CheckboxGroup: this
    }
  },
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {

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
