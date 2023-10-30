import { useEffect, useRef } from 'react';
import JsBarcode from 'jsbarcode';
import { Box } from '@chakra-ui/react';

type SimpleBarcodeProps = {
  value: string;
  format: 'CODE128' | 'EAN13' | 'EAN8';
}

export const SimpleBarcode: React.FC<SimpleBarcodeProps> = ({ value, format }) => {
  const barcodeRef = useRef(null);
  const widthValue = format === 'CODE128' ? 1 : 1.5

  useEffect(() => {
    if (barcodeRef.current) {
      JsBarcode(barcodeRef.current, value, {
        format: format, // 例: CODE128の形式。他の形式も選択可能。 EAN13 EAN8
        width: widthValue,
        height: 30,
        displayValue: true, // バーコードの下にテキストとしての価値を表示するかどうか
        font: 'noto sans',
        fontSize: 14
      });
    }
  }, [value, format, widthValue]);

  return (
    <Box m='6'>
      <svg ref={barcodeRef}></svg>
    </Box>
  )
};
