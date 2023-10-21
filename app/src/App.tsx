import { Box } from '@chakra-ui/react'
import { PageBody } from './components/PageContents/PageBody'
import { PageHeader } from './components/PageContents/PageHeader'
import { PageFooter } from './components/PageContents/PageFooter'


function App() {

  return (
    <>
      <Box>
        <PageHeader />
        <PageBody />
        <PageFooter />
      </Box>
    </>
  )
}

export default App
