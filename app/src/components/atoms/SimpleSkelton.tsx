import { Card, CardBody, Skeleton, Text } from "@chakra-ui/react"


export const SimpleSkelton = () => {
  return (
    <Card m='6'>
      <CardBody>
        <Text size='sm'>バーコードを生成します</Text>
        <Skeleton h='5' />
      </CardBody>
    </Card>
  )
}