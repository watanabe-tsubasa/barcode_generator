// components/CodeTypeMenuButton.tsx
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useCodeContext } from "../contexts/codeContext";
import React, { useRef } from "react";

export const CodeTypeMenuButton: React.FC = () => {
  
  const { codeType, setCodeType } = useCodeContext();
  const menuListRef = useRef(null);

  const handleMenuItemClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    const value = target.getAttribute('data-value');
    if (value === "CODE128" || value === "EAN13" || value === "EAN8") {
      setCodeType(value);
    }
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {codeType}
      </MenuButton>
      <MenuList ref={menuListRef} onClick={handleMenuItemClick}>
        <MenuItem data-value="CODE128">CODE128</MenuItem>
        <MenuItem data-value="EAN13">EAN13</MenuItem>
        <MenuItem data-value="EAN8">EAN8</MenuItem>
      </MenuList>
    </Menu>
  );
};
