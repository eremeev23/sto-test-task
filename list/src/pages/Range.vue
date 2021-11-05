<template>
  <div id="range">
    <RangeInput />
  </div>
</template>

<script>
import RangeInput from "../components/RangeInput.vue"

export default {
  name: "Range",
  components: {
    RangeInput
  }
}
</script>

<style lang='scss'>
#range {
  display: flex;
  justify-content: center;
}
</style>
