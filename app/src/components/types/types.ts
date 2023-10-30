export type BarcodeContentCardProps = {
  code: string,
  content: string,
  codeType: BarCodeType,
}


export type BarCodeType = 'CODE128' | 'EAN13' | 'EAN8'