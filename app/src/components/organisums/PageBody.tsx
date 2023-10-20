import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, useColorModeValue } from "@chakra-ui/react"
import { useState } from "react"
import { InputBarcode } from "../molecules/InputBarcode"

export const PageBody = () => {
  const colors = useColorModeValue(
    ['red.50', 'teal.50', 'blue.50'],
    ['red.900', 'teal.900', 'blue.900'],
  )
  const [tabIndex, setTabIndex] = useState(0)
  const bg = colors[tabIndex]
  return (
    <Box h='90vH' w='100%'>
      <Tabs isFitted h='90vH' onChange={(index) => setTabIndex(index)} bg={bg}>
        <TabList>
          <Tab>単一バーコード生成</Tab>
          <Tab>複数バーコード生成</Tab>
          {/* <Tab>Blue</Tab> */}
        </TabList>
        <TabPanels p='2rem'>
          <TabPanel>
            <InputBarcode />
          </TabPanel>
          <TabPanel>Are 1, 2, 3</TabPanel>
          {/* <TabPanel>Red, yellow and blue.</TabPanel> */}
        </TabPanels>
      </Tabs>
    </Box>
  )
}