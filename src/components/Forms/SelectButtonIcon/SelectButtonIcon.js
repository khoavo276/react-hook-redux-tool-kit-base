import React from "react";
import Select, { components } from "react-select";
import "./SelectButtonIcon.scss";

const { Option } = components;

const CustomSelectOption = (props) => (
  <Option {...props}>
    <i className={`${props.data.icon}`} />
    {props.data.label}
  </Option>
);

const CustomSelectValue = (props) => (
  <div>
    <i className={`${props.data.icon}`} />
    {props.data.label}
  </div>
);

const options = [
  { value: "item1", label: "Item 1", icon: "far fa-address-card" },
  { value: "item2", label: "Item 2", icon: "fab fa-airbnb" }
];

const CustomPlaceholder = () => {
  // return <components.Placeholder {...props} />;
  return (
    <>
      <i className="fab fa-airbnb" />
      Choose a Persona
    </>
  );
};

const SelectButtonIcon = () => {
  return (
    <div className="select-button-icon">
      <Select
        options={options}
        components={{
          Option: CustomSelectOption,
          SingleValue: CustomSelectValue,
          Placeholder: CustomPlaceholder
        }}
        placeholder={"custom placeholder component"}
        isSearchable={false}
      />
    </div>
  );
};

export default SelectButtonIcon;
