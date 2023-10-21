import { Card, CardBody, Skeleton, Text } from "@chakra-ui/react"
import React from "react"

type SimpleSkeltonProps = {
  word: string,
}

export const SimpleSkelton: React.FC<SimpleSkeltonProps> = ({ word }) => {
  return (
    <Card m='6'>
      <CardBody>
        <Text size='sm'>{word}</Text>
        <Skeleton h='5' />
      </CardBody>
    </Card>
  )
}