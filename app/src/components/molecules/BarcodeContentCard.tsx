import { Card, CardBody, Flex, Heading } from "@chakra-ui/react"
import { SimpleBarcode } from "../atoms/SimpleBarcode"
import { BarcodeContentCardProps } from "../types/types"

export const BarcodeContentCard: React.FC<BarcodeContentCardProps> = ({ code, content}) => {

  return (
    <Card
      w='280px'
      direction='row'
      overflow='hidden'
      variant='outline'
      m='2'
    >
      <Flex w='140px' justify='center' align='center'>
        <SimpleBarcode value={code} />
      </Flex>
      <CardBody w='140px'>
        <Flex h='100%' w='100%' justify='center' align='center'>
          <Heading size='md'>{content}</Heading>
        </Flex>
      </CardBody>  
    </Card>
  )
}