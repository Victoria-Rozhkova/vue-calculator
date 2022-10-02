import Calculator from "../components/Calculator.vue";
import { mount } from "@vue/test-utils";

describe("Calculator tests", () => {
  test(`Input with name "operand_1" should be 1`, () => {
    const wrapper = mount(Calculator);
    const inputOper_1 = wrapper.find('input[name="operand_1"]');
    inputOper_1.setValue(1);
    expect(wrapper.vm.operand_1).toBe(1);
  });
});
