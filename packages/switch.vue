<template>
  <div class="w-switch" :class="{'is-checked': value}" @click="handleClick">
    <input type="checkbox" :name="name" class="w-switch__input" ref="input">
    <span class="w-switch__core" ref="core">
      <span class="w-switch__button"></span>
    </span>
  </div>
</template>
<script>
export default {
  name: 'wSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  mounted() {
    this.setColor()
  },
  methods: {
    async handleClick() {
      this.$emit('input', !this.value)
      await this.$nextTick()
      this.setColor()
    },
    setColor() {
      if (this.activeColor || this.inactiveColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
      this.$refs.input.checked = this.value
    }
  }
}
</script>
<style lang="scss" scoped>
.w-switch {
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  .w-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .w-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
// 选中样式
.is-checked {
  .w-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .w-switch__button {
      transform: translateX(20px);
    }
  }
}
// 隐藏input标签
.w-switch__input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}
</style>
