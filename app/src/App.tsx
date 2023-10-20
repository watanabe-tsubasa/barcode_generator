import { useState } from 'react'
import { Box, Button } from '@chakra-ui/react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Box>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </Box>
    </>
  )
}

export default App
