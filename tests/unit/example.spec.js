import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "HelloWorld";
    const wrapper = shallowMount(HelloWorld, {
      propsData: {
        msg
      }
    });
    expect(wrapper.text()).toMatch(msg);
  });
  it("data", () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.vm.$data.test).toBe("123456");
  });
});
