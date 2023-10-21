import { Box, Flex, Input, VStack } from "@chakra-ui/react"
import React, { useState } from "react"
import { SimpleBarcode } from "../atoms/SimpleBarcode";
import { SimpleSkelton } from "../atoms/SimpleSkelton";
import { ErrorBoundary } from "react-error-boundary";

export const InputBarcode = () => {

  const [codeText, setCodeText] = useState<string>("");
  const onChangeCode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCodeText(event.target.value)
  }

  return (
    <Box>
      <Flex justify='center'>
        <VStack maxW='300px' minW='200px' >
          <Input bg='whitesmoke' onChange={onChangeCode} placeholder="input code" value={codeText}/>
          {codeText === '' ? <SimpleSkelton word='code128で生成します' /> : 
          <ErrorBoundary fallback={<SimpleSkelton word='不適切な文字列です' />}>
            <SimpleBarcode value={codeText} />
          </ErrorBoundary>
          }
        </VStack>
      </Flex>
    </Box>
  )
}