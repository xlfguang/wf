import { useState } from "react";
import styled from "styled-components";
import arrowIcon from "@/assets/arrow.png";
const SelectorContainer = styled.div`
  position: relative;
  width: 168px;
`;

const SelectedItem = styled.div`
  background-color: #070c1480;
  color: white;
  padding: 10px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border: 1px solid #ffffff66;
`;

const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
  right: 0;
  background-color: #070c1480;
  border-radius: 12px;
  overflow: hidden;
  z-index: 1;
  padding: 0 10px;
`;

const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  color: white;
  cursor: pointer;
  border-bottom: 0.5px solid #a0a09b66;
  height: 37px;
  &:hover {
    background-color: #070c1480;
  }
  &:last-child {
    border-bottom: none;
  }
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
const ArrowIcon = styled.img<{
  isOpen: boolean;
}>`
  width: 12px;
  height: 6px;
  transition: transform 0.3s ease-in-out;
  transform: rotate(${(props) => (props.isOpen ? "180deg" : "0deg")});
`;

const Selector = () => {
  const [selected, setSelected] = useState("Benz");
  const [isOpen, setIsOpen] = useState(false);
  const options = [
    { name: "Benz", icon: "/path/to/benz.png" },
    { name: "Tesla", icon: "/path/to/tesla.png" },
    { name: "Audi", icon: "/path/to/audi.png" },
    { name: "BMW", icon: "/path/to/bmw.png" },
    { name: "Ford", icon: "/path/to/ford.png" },
    { name: "Lexus", icon: "/path/to/lexus.png" },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (name: string) => {
    setSelected(name);
    setIsOpen(false);
  };

  return (
    <SelectorContainer>
      <SelectedItem onClick={toggleDropdown}>
        <span>{selected}</span>
        <ArrowIcon src={arrowIcon} isOpen={isOpen} />
      </SelectedItem>
      {isOpen && (
        <Dropdown>
          {options.map((option) => (
            <DropdownItem
              key={option.name}
              onClick={() => handleSelect(option.name)}
            >
              <Icon src={option.icon} alt={option.name} />
              {option.name}
            </DropdownItem>
          ))}
        </Dropdown>
      )}
    </SelectorContainer>
  );
};

export default Selector;
