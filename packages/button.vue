<template>
  <button class="w-button" :class="[`w-button--${type}`,{
    'is-plain': plain,
    'is-round': round,
    'is-circle': circle,
    'is-disabled': disabled
  }]" :disabled="disabled" @click="handleClick">
    <i :class="icon" v-if="icon"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: 'wButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>
<style lang="scss" scoped>
.w-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  //禁止元素的文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
.w-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus {
    background: #66b1ff;
    background-color: #66b1ff;
    color: #fff;
  }
  &.is-disabled {
    background: #66b1ffe0;
    border-color: #66b1ffe0;
  }
}
.w-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    background: #85ce61;
    background-color: #85ce61;
    color: #fff;
  }
}
.w-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    background: #a6a9ad;
    background-color: #a6a9ad;
    color: #fff;
  }
}
.w-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    background: #ebb563;
    background-color: #ebb563;
    color: #fff;
  }
}
.w-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    background: #f78989;
    background-color: #f78989;
    color: #fff;
  }
}
// 朴素按钮样式
.w-button.is-plain {
  &:hover,
  &:focus {
    background: #fff;
    border-color: #489eff;
    color: #409eff;
  }
}
.w-button--primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  &:hover,
  &:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.w-button--success.is-plain {
  color: #67c23a;
  background: #c2e7b0;
  &:hover,
  &:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.w-button--info.is-plain {
  color: #909399;
  background: #d3d4d6;
  &:hover,
  &:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.w-button--warning.is-plain {
  color: #e6a23c;
  background: #f5dab1;
  &:hover,
  &:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.w-button--danger.is-plain {
  color: #f56c6c;
  background: #fbc4c4;
  &:hover,
  &:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}
// round属性
.w-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
// circle属性
.w-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
// icon配套样式
.w-button [class*="w-icon-"] + span {
  margin-left: 5px;
}
// disabled属性
.w-button.is-disabled {
  cursor: no-drop;
}
</style>
