import { Card, CardBody, Flex, Heading } from "@chakra-ui/react"
import { SimpleBarcode } from "../atoms/SimpleBarcode"
import { BarcodeContentCardProps } from "../types/types"
import { ErrorBoundary } from "react-error-boundary"
import { SimpleSkelton } from "../atoms/SimpleSkelton"

export const BarcodeContentCard: React.FC<BarcodeContentCardProps> = ({ code, content, codeType}) => {

  return (
    <Card
      direction='row'
      overflow='hidden'
      variant='outline'
      m='2'
    >
      <Flex minW='140px' justify='center' align='center'>
        <ErrorBoundary fallback={<SimpleSkelton word='不適切な文字列です' />}>
          <SimpleBarcode value={code} format={codeType} />
        </ErrorBoundary>
      </Flex>
      <CardBody w='140px'>
        <Flex h='100%' w='100%' justify='center' align='center' overflow='initial'>
          <Heading size='sm'>{content}</Heading>
        </Flex>
      </CardBody>  
    </Card>
  )
}