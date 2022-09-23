<template>
  <div>
    <div class="heading">
      <h1>Vue-calculator</h1>
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
    <button @click="reset" class="reset">Сброс</button>
    <div class="display">
      <input
        type="number"
        v-model.number="operand_1"
        placeholder="Введите число"
      />
      <input
        type="number"
        v-model.number="operand_2"
        placeholder="Введите число"
      />
      <span>= {{ result }}</span>
    </div>
    <div class="controls">
      <div class="controls__block">
        <button
          class="controls__btn"
          v-for="operand in operands"
          :key="operand"
          @click="calculate(operand)"
          :title="`Операция ${operand}`"
          :disabled="operand === '/' && operand_2 === 0"
        >
          {{ operand }}
        </button>
      </div>
      <div class="controls__block">
        <button @click="floor" class="controls__btn">
          Целочисленное деление
        </button>
      </div>
    </div>
    <div class="keyboard"></div>
  </div>
</template>
<script>
export default {
  name: "Calculator",
  data() {
    return {
      operand_1: "",
      operand_2: "",
      result: 0,
      operands: ["+", "-", "/", "*", "^"],
    };
  },
  methods: {
    calculate(operation) {
      this.error = "";
      switch (operation) {
        case "+":
          this.sum();
          break;
        case "-":
          this.subtraction();
          break;
        case "*":
          this.multiplication();
          break;
        case "/":
          this.division();
          break;
        case "^":
          this.row();
          break;
      }
    },
    sum() {
      this.result = this.operand_1 + this.operand_2;
    },
    subtraction() {
      this.result = this.operand_1 - this.operand_2;
    },
    multiplication() {
      this.result = this.operand_1 * this.operand_2;
    },
    division() {
      this.result = this.operand_1 / this.operand_2;
    },
    row() {
      this.result = Math.pow(this.operand_1, this.operand_2);
    },
    floor() {
      this.result = Math.floor(this.operand_1 / this.operand_2);
    },
    reset() {
      this.result = 0;
      this.operand_1 = "";
      this.operand_2 = "";
    },
  },
};
</script>
<style scoped lang="scss">
.heading {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
.reset {
  margin: 7px;
  color: #ffffff;
  background: #d95555;
  border: 0;
  border-radius: 4px;
  padding: 5px 10px;
  font-weight: 600;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    box-shadow: 2px 2px 2px 0px rgba(34, 60, 80, 0.2);
  }
  &:active {
    box-shadow: 0px 1px 1px 1px rgba(34, 60, 80, 0.2);
    transform: scale(1.1) translateY(2px);
  }
}
.display {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
input {
  border: 2px solid #e1e1e1;
  border-radius: 5px;
  padding: 5px 7px;
  &:focus-visible {
    border: 2px solid #1b9f8e63;
    outline: none;
    box-shadow: 2px 2px 6px 0px rgba(34, 60, 80, 0.2);
  }
}
.controls {
  &__block {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
    margin: 10px 0;
  }
  &__btn {
    border: none;
    border-radius: 3px;
    background: #ddd9d9;
    color: #1b9f8e;
    font-size: 18px;
    padding: 5px 7px;
    transition: all 0.2s;
    cursor: pointer;
    &:hover {
      color: #ffffff;
      background: #1b9f8e;
    }
    &:active {
      box-shadow: 0px 1px 1px 1px rgba(34, 60, 80, 0.2);
      transform: translateY(2px);
    }
    &:disabled {
      background: #dbdbdb96;
      color: white;
      cursor: no-drop;
    }
  }
}
img {
  width: 30px;
}
</style>
