import React from "react";
import { shallow, mount } from "enzyme";
import Link, { LinkWithIcon } from "../components/Link";

describe("<Link />", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Link />);
    expect(wrapper.type()).toBe("a");
    expect(wrapper.hasClass("link-class")).toBe(true);
    expect(wrapper.hasClass("other-class")).toBeFalsy();
    expect(wrapper.find(".normal").length).toEqual(1);
  });

  it("swaps state on click", () => {
    const wrapper = shallow(<Link />);
    expect(wrapper.hasClass("normal")).toBe(true);
    expect(wrapper.state("clicks")).toEqual(0);
    wrapper.simulate("click");
    expect(wrapper.state("clicks")).toEqual(1);
  });
});

describe("<LinkWithIcon />", () => {
  it("renders correctly when shallow rendered", () => {
    const wrapper = shallow(
      <LinkWithIcon icon={"myIcon"}>Hello there!</LinkWithIcon>
    );
    expect(wrapper).toMatchInlineSnapshot(`
            <span>
              <Icon
                icon="myIcon"
              />
              <Link>
                Hello there!
              </Link>
            </span>
        `);
  });

  it("renders correctly when mounted", () => {
    const wrapper = mount(
      <LinkWithIcon icon={"myIcon"}>Hello there!</LinkWithIcon>
    );
    expect(wrapper).toMatchInlineSnapshot(`
      <LinkWithIcon
        icon="myIcon"
      >
        <span>
          <Icon
            icon="myIcon"
          >
            <i
              className="icon myIcon"
            />
          </Icon>
          <Link>
            <a
              className="link-class normal"
              href="#"
              onClick={[Function]}
              onMouseEnter={[Function]}
              onMouseLeave={[Function]}
            >
              Hello there!
            </a>
          </Link>
        </span>
      </LinkWithIcon>
    `);
  });
});
