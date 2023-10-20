import { Box, Input } from "@chakra-ui/react"
import React, { useState } from "react"
import { SimpleBarcode } from "../atoms/SimpleBarcode";

export const InputBarcode = () => {

  const [codeText, setCodeText] = useState("");
  const onChangeCode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCodeText(event.target.value)
  }

  return (
    <Box>
      <Input onChange={onChangeCode} placeholder="input code" value={codeText}/>
      <SimpleBarcode value={codeText} />
    </Box>
  )
}