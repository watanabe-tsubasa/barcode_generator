import { Box } from '@chakra-ui/react'
import { PageBody } from './components/organisums/PageBody'
import { PageHeader } from './components/organisums/PageHeader'
import { PageFooter } from './components/organisums/PageFooter'


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
