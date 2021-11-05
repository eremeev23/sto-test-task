<template>
  <div class="range__wrapper">
    <label for="range" class="range__label">{{ range }}%</label>
    <input @input="moveRange" type="range" name="range" id="range" class="range__input" v-model="range" step="0.1" min="0%" max="100" value="50">
    <div class="set__range-box">
      <span class="set__range" @click="setRange">
        25 %
      </span>
      <span class="set__range" @click="setRange">
        50 %
      </span>
      <span class="set__range" @click="setRange">
        75 %
      </span>
      <span class="set__range" @click="setRange">
        100 %
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      range: 50
    }
  },
  methods: {
    setRange: function(e) {
      const span = e.target
      let number = span.innerText.split(' ');

      this.range = number[0]
    }
  }
}
</script>

<style lang='scss'>
.range__wrapper {
  margin: 240px 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #21273F;
  height: 140px;
  width: 720px;
  max-width: 80%;
  padding: 0 20px;

  .range__label {
    position: absolute;
    top: 10px;
    left: 10px;
    color: #79819C;
    font-weight: bold;
  }
  .range__input {
    position: relative;
    outline: none;
    padding: 2px;
    width: 100%;
    height: 20px;
    border-radius: 30px;
    -webkit-appearance: none;
    background: rgb(9,224,202);
    background: linear-gradient(90deg,rgba(9,224,202,1) 0%, rgba(240,185,86,1) 75%, rgba(255,106,96,1) 100%);
  }
  .range__input::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border: none;
    border-radius: 50%;
    background: #fff;
  }
  .range__input:focus {
    outline: none;
  }

  .set__range-box {
    position: absolute;
    display: flex;
    top: 56%;

    .set__range {
      cursor: pointer;
      display: block;
      padding: 7px 10px;
      margin: 15px 10px;
      border-radius: 30px;
      background: #4F608F;
      color: #fff;
      font-weight: bold;
    }
  }
}

@media (max-width: 440px) {
  .range__wrapper {
    margin: 140px 0;

    .set__range-box {

      .set__range {
        font-size: 14px;
      }
    }
  }
}
</style>
