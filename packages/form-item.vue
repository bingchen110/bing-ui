<template>
  <div class="w-form-item">
    <label class="w-form-item__label" :style="{width: labelStyle}">{{label}}</label>
    <div class="w-form-item__content">
        <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'wFormItem',
  inject: ['Form'],
  props: {
    label: {
      type: String
    },
    labelWidth: {
      type: String
    }
  },
  computed: {
    labelStyle () {
      return this.labelWidth ? this.labelWidth : this.Form.labelWidth
    }
  }
}
</script>
<style lang="scss" scoped>
.w-form-item {
    margin-bottom: 25px;
    .w-form-item__label {
        text-align: right;
        vertical-align: middle;
        float: left;
        font-size: 14px;
        color: #606266;
        line-height: 40px;
        padding: 0 12px 0 0;
        box-sizing: border-box;
    }
    .w-form-item__content {
        line-height: 40px;
        position: relative;
        font-size: 14px;
        overflow: hidden;
    }
}
</style>
