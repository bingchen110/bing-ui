<template>
  <div class="w-input" :class="{'w-input--suffix': showSuffix}">
    <!-- 如果传了show-password,判断是否需要切换 密码的显示， 如果不传，不判断 -->
    <input :type="showPassword ? (passwordVisible ? 'text': 'password'): type"
      class="w-input__inner" :class="{'is-disabled': disabled}" :placeholder="placeholder"
      :name="name" :value="value" @input="handleInput">
    <span class="w-input__suffix" v-if="showSuffix">
      <i class="w-input__icon w-icon-circle-close" v-if="clearable && value"
        @click="clear"></i>
      <i class="w-input__icon w-icon-view"
        :class="{'w-icon-view-active': passwordVisible}" v-if="showPassword && value"
        @click="handlePassword"></i>
    </span>
  </div>
</template>
<script>
export default {
  name: 'wInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      passwordVisible: false
    }
  },
  computed: {
    showSuffix() {
      return this.clearable || this.showPassword
    }
  },
  created() {
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
    },
    clear() {
      this.$emit('input', '')
    },
    handlePassword() {
      this.passwordVisible = !this.passwordVisible
    }
  }
}
</script>
<style lang="scss" scoped>
.w-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .w-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }

    // input禁用样式
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
// 后面加suffix的意思是后面如果有后缀的话，触发该样式
.w-input--suffix {
  .w-input__inner {
    padding-right: 30px;
  }
  .w-input__suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .w-icon-view-active {
      color: #409eff;
    }
  }
}
</style>
