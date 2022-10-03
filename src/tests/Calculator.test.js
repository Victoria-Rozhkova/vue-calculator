import Calculator from "../components/Calculator.vue";
import { mount } from "@vue/test-utils";

describe("Calculator tests", () => {
  it(`test first operand input value`, () => {
    const wrapper = mount(Calculator); // монтируем компонент
    const inputOper_1 = wrapper.find('input[name="operand_1"]'); // находим инпут
    inputOper_1.setValue(1); // присваиваем значение

    expect(wrapper.vm.operand_1).toBe(1);
  });
  it(`test second operand input value`, () => {
    const wrapper = mount(Calculator); // монтируем компонент
    const inputOper_2 = wrapper.find('input[name="operand_2"]'); // находим инпут
    inputOper_2.setValue(2); // присваиваем значение

    expect(wrapper.vm.operand_2).toBe(2);
  });
  it(`test operation sum`, () => {
    const wrapper = mount(Calculator); // монтируем компонент
    // находим инпуты
    const inputOper_1 = wrapper.find('input[name="operand_1"]');
    inputOper_1.setValue(1); // присваиваем значение
    expect(wrapper.vm.operand_1).toBe(1);
    const inputOper_2 = wrapper.find('input[name="operand_2"]');
    inputOper_2.setValue(2); // присваиваем значение
    expect(wrapper.vm.operand_2).toBe(2);
    // находим кнопку сложения
    const btnSum = wrapper.find('button[name="+"]');
    btnSum.trigger("click"); // имитируем клик

    expect(wrapper.vm.result).toBe(3);
  });
  it(`test operation subtraction`, () => {
    const wrapper = mount(Calculator); // монтируем компонент
    // находим инпуты
    const inputOper_1 = wrapper.find('input[name="operand_1"]');
    inputOper_1.setValue(15); // присваиваем значение
    expect(wrapper.vm.operand_1).toBe(15);
    const inputOper_2 = wrapper.find('input[name="operand_2"]');
    inputOper_2.setValue(3); // присваиваем значение
    expect(wrapper.vm.operand_2).toBe(3);
    // находим кнопку вычитания
    const btnSum = wrapper.find("button[name=" - "]");
    btnSum.trigger("click"); // имитируем клик

    expect(wrapper.vm.result).toBe(12);
  });
  it(`test operation multiplication`, () => {
    const wrapper = mount(Calculator); // монтируем компонент
    // находим инпуты
    const inputOper_1 = wrapper.find('input[name="operand_1"]');
    inputOper_1.setValue(2); // присваиваем значение
    expect(wrapper.vm.operand_1).toBe(2);
    const inputOper_2 = wrapper.find('input[name="operand_2"]');
    inputOper_2.setValue(2); // присваиваем значение
    expect(wrapper.vm.operand_2).toBe(2);
    // находим кнопку умножения
    const btnSum = wrapper.find('button[name="x"]');
    btnSum.trigger("click"); // имитируем клик

    expect(wrapper.vm.result).toBe(4);
  });
  it(`test operation division`, () => {
    const wrapper = mount(Calculator); // монтируем компонент
    // находим инпуты
    const inputOper_1 = wrapper.find('input[name="operand_1"]');
    inputOper_1.setValue(2); // присваиваем значение
    expect(wrapper.vm.operand_1).toBe(2);
    const inputOper_2 = wrapper.find('input[name="operand_2"]');
    inputOper_2.setValue(2); // присваиваем значение
    expect(wrapper.vm.operand_2).toBe(2);
    // находим кнопку деления
    const btnSum = wrapper.find('button[name="/"]');
    btnSum.trigger("click"); // имитируем клик

    expect(wrapper.vm.result).toBe(1);
  });
  it("test operation row", () => {
    const wrapper = mount(Calculator); // монтируем компонент
    // находим инпуты
    const operand1 = wrapper.find('input[name="operand_1"]');
    operand1.setValue("2"); // присваиваем значение
    expect(wrapper.vm.operand_1).toBe(2);
    const operand2 = wrapper.find('input[name="operand_2"]');
    operand2.setValue("2"); // присваиваем значение
    expect(wrapper.vm.operand_2).toBe(2);
    // находим кнопку возведения в степень
    const rowBtn = wrapper.find('button[name="^"]');
    rowBtn.trigger("click"); // имитируем клик

    expect(wrapper.vm.result).toBe(4);
  });

  it("test operation div2", () => {
    const wrapper = mount(Calculator); // монтируем компонент
    // находим инпуты
    const operand1 = wrapper.find('input[name="operand_1"]');
    operand1.setValue("10"); // присваиваем значение
    expect(wrapper.vm.operand_1).toBe(10);
    const operand2 = wrapper.find('input[name="operand_2"]');
    operand2.setValue("5"); // присваиваем значение
    expect(wrapper.vm.operand_2).toBe(5);
    // находим кнопку "Целочисленное деление"
    const div2Btn = wrapper.find('button[name="Целочисленное деление"]');
    div2Btn.trigger("click"); // имитируем клик

    expect(wrapper.vm.result).toBe(2);
  });
  it("test operation percent", () => {
    const wrapper = mount(Calculator); // монтируем компонент
    // находим инпуты
    const operand1 = wrapper.find('input[name="operand_1"]');
    operand1.setValue("100"); // присваиваем значение
    expect(wrapper.vm.operand_1).toBe(100);
    const operand2 = wrapper.find('input[name="operand_2"]');
    operand2.setValue("10"); // присваиваем значение
    expect(wrapper.vm.operand_2).toBe(10);
    // находим кнопку процентов
    const div2Btn = wrapper.find('button[name="%"]');
    div2Btn.trigger("click"); // имитируем клик

    expect(wrapper.vm.result).toBe(10);
  });
  it("test keyboard", () => {
    const wrapper = mount(Calculator); // монтируем компонент
    // находим инпут
    const operand1 = wrapper.find('input[name="operand_1"]');
    operand1.setValue(""); // присваиваем значение
    expect(wrapper.vm.operand_1).toBe("");
    // находим кнопку виртуальной клавиатуры
    const keyboardBtn = wrapper.find('button[name="1"]');
    keyboardBtn.trigger("click"); // имитируем клик

    expect(wrapper.vm.operand_1).toBe(1);
  });

  it("test delLastDigit", () => {
    const wrapper = mount(Calculator); // монтируем компонент
    // находим инпут
    const operand1 = wrapper.find('input[name="operand_1"]');
    operand1.setValue("11"); // присваиваем значение
    expect(wrapper.vm.operand_1).toBe(11);
    // находим кнопку удаления символа
    const delBtn = wrapper.find('button[name="←"]');
    delBtn.trigger("click"); // имитируем клик

    expect(wrapper.vm.operand_1).toBe(1);
  });
  it("test button 'reset'", () => {
    const wrapper = mount(Calculator); // монтируем компонент
    // находим инпуты
    const operand1 = wrapper.find('input[name="operand_1"]');
    operand1.setValue("11"); // присваиваем значение
    expect(wrapper.vm.operand_1).toBe(11);
    const operand2 = wrapper.find('input[name="operand_2"]');
    operand2.setValue("11"); // присваиваем значение
    expect(wrapper.vm.operand_2).toBe(11);
    // находим кнопку сброс
    const resetBtn = wrapper.find('button[name="reset"]');
    resetBtn.trigger("click"); // имитируем клик

    expect(wrapper.vm.operand_1).toBe("");
    expect(wrapper.vm.operand_2).toBe("");
    expect(wrapper.vm.result).toBe(0);
  });
  it("test radio button 'Операнд 1'", () => {
    const wrapper = mount(Calculator); // монтируем компонент
    // находим инпут
    const radio1 = wrapper.find('input[id="1"]');
    radio1.trigger("click"); // имитируем клик

    expect(wrapper.vm.activeOperand).toBe("operand_1");
  });
  it("test radio button 'Операнд 2'", () => {
    const wrapper = mount(Calculator); // монтируем компонент
    // находим инпут
    const radio2 = wrapper.find('input[id="2"]');
    radio2.trigger("click"); // имитируем клик

    expect(wrapper.vm.activeOperand).toBe("operand_2");
  });
});
