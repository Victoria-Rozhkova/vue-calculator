<template>
  <div>
    <div class="heading">
      <h1>Vue-calculator</h1>
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
    <button @click="reset" class="reset" name="reset">Сброс</button>
    <div class="display">
      <input
        class="display__input"
        type="number"
        v-model.number="operand_1"
        placeholder="Введите число"
        name="operand_1"
      />
      <input
        class="display__input"
        type="number"
        v-model.number="operand_2"
        placeholder="Введите число"
        name="operand_2"
      />
      <span>= {{ result }}</span>
    </div>
    <div class="controls">
      <div class="controls__block">
        <button
          class="controls__btn"
          v-for="(operand, id, index) in operands"
          :key="index"
          :name="operand"
          @click="calculate(operand)"
          :title="id"
          :disabled="
            (operand === '/' && operand_2 === 0) ||
            operand_1 === '' ||
            operand_2 === ''
          "
        >
          {{ operand }}
        </button>
      </div>
      <div class="controls__block">
        <button
          @click="floor"
          class="controls__btn"
          name="Целочисленное деление"
        >
          Целочисленное деление
        </button>
      </div>
      <input
        class="check"
        id="keyboard"
        type="checkbox"
        v-model="showKeyboard"
        :checked="showKeyboard"
      />
      <label for="keyboard"> Показать экранную клавиатуру </label>
      <div class="keyboard" v-show="showKeyboard">
        <div class="keyboard__keys">
          <button
            class="key"
            v-for="(key, index) in keyboard"
            :key="index"
            :name="key"
            @click="changeValue(key)"
          >
            {{ key }}
          </button>
        </div>
        <div class="keyboard__radio">
          <input
            class="radio"
            id="1"
            name="operand"
            type="radio"
            value="operand_1"
            v-model="activeOperand"
          />
          <label for="1">Операнд 1</label>
          <input
            class="radio"
            id="2"
            name="operand"
            type="radio"
            value="operand_2"
            v-model="activeOperand"
          />
          <label for="2">Операнд 2</label>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Calculator",
  data: () => ({
    operand_1: "",
    operand_2: "",
    result: 0,
    operands: {
      Сложение: "+",
      Вычитание: "-",
      Умножение: "x",
      Деление: "/",
      "Возведение в степень": "^",
      Проценты: "%",
    },
    showKeyboard: false,
    keyboard: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "←"],
    activeOperand: "operand_1",
  }),
  methods: {
    calculate(operation) {
      switch (operation) {
        case "+":
          this.sum();
          break;
        case "-":
          this.subtraction();
          break;
        case "x":
          this.multiplication();
          break;
        case "/":
          this.division();
          break;
        case "^":
          this.row();
          break;
        case "%":
          this.trunc();
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
    trunc() {
      this.result = Math.trunc(this.operand_1 / this.operand_2);
    },
    reset() {
      this.result = 0;
      this.operand_1 = "";
      this.operand_2 = "";
    },
    changeValue(key) {
      let backspasedOperand = "";
      switch (key) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
          if (this.activeOperand === "operand_2") {
            this.operand_2 = Number(`${this.operand_2}${key}`);
          } else {
            this.operand_1 = Number(`${this.operand_1}${key}`);
          }
          break;
        case "←":
          if (this.activeOperand === "operand_1") {
            this.operand_1 = String(this.operand_1);
            backspasedOperand = this.operand_1.slice(0, -1);
            this.operand_1 = +backspasedOperand;
          } else {
            this.operand_2 = String(this.operand_2);
            backspasedOperand = this.operand_2.slice(0, -1);
            this.operand_2 = +backspasedOperand;
          }
          break;
      }
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
  img {
    width: 30px;
  }
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
  &__input {
    border: 2px solid #e1e1e1;
    border-radius: 5px;
    padding: 5px 7px;
    &:focus-visible {
      border: 2px solid #1b9f8e63;
      outline: none;
      box-shadow: 2px 2px 6px 0px rgba(34, 60, 80, 0.2);
    }
  }
}
.controls {
  label {
    cursor: pointer;
  }
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
.check {
  opacity: 0;
}
.check ~ label::before {
  .check {
    opacity: 0;
  }
}
.check ~ label::before {
  content: "\2713";
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  line-height: 1em;
  width: 1em;
  height: 1em;
  border: 2px solid #1b9f8e;
  border-radius: 0.25em;
  margin: 0.25em;
  display: inline-block;
}
.check:checked ~ label::before {
  color: #1b9f8e;
  border: 2px inset #1b9f8e;
}
.radio:checked,
.radio:not(:checked) {
  opacity: 0;
  position: absolute;
  left: -9999px;
}
.radio:checked + label,
.radio:not(:checked) + label {
  display: inline-block;
  position: relative;
  padding-left: 28px;
  line-height: 20px;
  cursor: pointer;
}
.radio:checked + label:before,
.radio:not(:checked) + label:before {
  content: "";
  position: absolute;
  left: 0px;
  top: 0px;
  width: 18px;
  height: 18px;
  border: 1px solid #dddddd;
  background-color: #ffffff;
}
.radio:checked + label:before,
.radio:not(:checked) + label:before {
  border-radius: 100%;
}
.radio:checked + label:after,
.radio:not(:checked) + label:after {
  content: "";
  position: absolute;
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
.radio:checked + label:after,
.radio:not(:checked) + label:after {
  left: 5px;
  top: 5px;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #1b9f8e;
}
.radio:not(:checked) + label:after {
  opacity: 0;
}
.radio:checked + label:after {
  opacity: 1;
}
.keyboard {
  &__keys {
    display: flex;
    align-self: center;
    justify-content: center;
    align-items: center;
    gap: 3px;
    margin: 0 auto;
    flex-wrap: wrap;
    width: 170px;
    padding: 7px 0;
    .key {
      padding: 2px 10px;
      color: #ffffff;
      background: #1b9f8e;
      border: solid 2px transparent;
      border-radius: 50%;
      font-size: 27px;
      transition: all 0.2s;
      cursor: pointer;
      &:hover {
        background: #ffffff;
        color: #1b9f8e;
        border: solid 2px #1b9f8e;
      }
      &:active {
        transform: translateY(2.5px);
      }
    }
  }
  &__radio {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  label {
    cursor: pointer;
  }
}
</style>
