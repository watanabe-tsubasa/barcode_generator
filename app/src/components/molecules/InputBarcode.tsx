import { Box, Button, Flex, Input, Menu, MenuButton, MenuItem, MenuList, VStack } from "@chakra-ui/react"
import React, { useRef, useState } from "react"
import { SimpleBarcode } from "../atoms/SimpleBarcode";
import { SimpleSkelton } from "../atoms/SimpleSkelton";
import { ErrorBoundary } from "react-error-boundary";
import { ChevronDownIcon } from "@chakra-ui/icons";

export const InputBarcode = () => {

  const [codeText, setCodeText] = useState<string>("");
  const onChangeCode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCodeText(event.target.value);
  }

  const [selectedCode, setSelectedCode] = useState<'CODE128' | 'EAN13' | 'EAN8'>('CODE128');
  const menuListRef = useRef(null);
  const handleMenuItemClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // data-value属性から選択されたMenuItemの値を取得
    const target = event.target as HTMLDivElement;
    const value = target.getAttribute('data-value');
    if (value === "CODE128" || value === "EAN13" || value === "EAN8") {
      setSelectedCode(value);
    }
  };

  return (
    <Box>
      <Flex justify='center'>
        <VStack maxW='300px' minW='200px' >
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              {selectedCode}
            </MenuButton>
            <MenuList ref={menuListRef} onClick={handleMenuItemClick}>
              <MenuItem data-value="CODE128">CODE128</MenuItem>
              <MenuItem data-value="EAN13">EAN13</MenuItem>
              <MenuItem data-value="EAN8">EAN8</MenuItem>
            </MenuList>
          </Menu>
          <Input bg='whitesmoke' onChange={onChangeCode} placeholder="input code" value={codeText}/>
          {codeText === '' ? <SimpleSkelton word={selectedCode} /> : 
          <ErrorBoundary fallback={<SimpleSkelton word='不適切な文字列です' />}>
            <SimpleBarcode value={codeText} format={selectedCode} />
          </ErrorBoundary>
          }
        </VStack>
      </Flex>
    </Box>
  )
}