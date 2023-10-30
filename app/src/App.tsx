import { Box } from '@chakra-ui/react'
import { PageBody } from './components/PageContents/PageBody'
import { PageHeader } from './components/PageContents/PageHeader'
import { PageFooter } from './components/PageContents/PageFooter'
import { CodeContext } from './components/contexts/codeContext'
import { useState } from 'react'
import { BarCodeType } from './components/types/types'


function App() {

  const [codeType, setCodeType] = useState<BarCodeType>('CODE128');

  return (
    <>
      <CodeContext.Provider value={{ codeType, setCodeType }}>
        <Box>
          <PageHeader />
          <PageBody />
          <PageFooter />
        </Box>
      </CodeContext.Provider>
    </>
  )
}

export default App
