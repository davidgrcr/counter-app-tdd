import { mount } from "enzyme";
import App from './App'


describe("Counter Testing", () => {
  let wrapper;
  beforeEach(() => {
    //wrapper = shallow(<Counter />);
  wrapper = mount(<App />);
});
  test("renders the title of the counter", () => {
    expect(wrapper.find("h1").text()).toContain("This is counter app");
  });

  test('render a button with a text of "increment"', () => {
    expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  });

  test("render inital value of state in a div", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  test("render the click event of increment button and increment counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
  });

  test("render the click event of decrement button and decrement counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  test("render the click event of decrement button and the value not could be less than zero", () => {
    wrapper.find("#increment-btn").simulate("click");
    wrapper.find("#decrement-btn").simulate("click");
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });
});
