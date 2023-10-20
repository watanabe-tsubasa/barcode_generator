import { Box, Flex, Input, VStack } from "@chakra-ui/react"
import React, { useState } from "react"
import { SimpleBarcode } from "../atoms/SimpleBarcode";
import { SimpleSkelton } from "../atoms/SimpleSkelton";

export const InputBarcode = () => {

  const [codeText, setCodeText] = useState<string>("");
  const onChangeCode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCodeText(event.target.value)
  }

  return (
    <Box>
      <Flex justify='center'>
        <VStack maxW='30%' minW='30%'>
          <Input bg='whitesmoke' onChange={onChangeCode} placeholder="input code" value={codeText}/>
          {codeText === '' ? <SimpleSkelton /> : <SimpleBarcode value={codeText} />}
        </VStack>
      </Flex>
    </Box>
  )
}