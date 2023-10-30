import { Box, Flex, Input, VStack } from "@chakra-ui/react"
import React, { useState } from "react"
import { SimpleBarcode } from "../atoms/SimpleBarcode";
import { SimpleSkelton } from "../atoms/SimpleSkelton";
import { ErrorBoundary } from "react-error-boundary";
import { useCodeContext } from "../contexts/codeContext";
import { CodeTypeMenuButton } from "../atoms/CodeTypeMenuButton";

export const InputBarcode = () => {

  const [codeText, setCodeText] = useState<string>("");
  const onChangeCode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCodeText(event.target.value);
  }

  // const [selectedCode, setSelectedCode] = useState<'CODE128' | 'EAN13' | 'EAN8'>('CODE128');
  const { codeType } = useCodeContext();

  return (
    <Box>
      <Flex justify='center'>
        <VStack maxW='300px' minW='200px' >
          <CodeTypeMenuButton />
          <Input bg='whitesmoke' onChange={onChangeCode} placeholder="input code" value={codeText}/>
          {codeText === '' ? <SimpleSkelton word={codeType} /> : 
          <ErrorBoundary fallback={<SimpleSkelton word='不適切な文字列です' />}>
            <SimpleBarcode value={codeText} format={codeType} />
          </ErrorBoundary>
          }
        </VStack>
      </Flex>
    </Box>
  )
}