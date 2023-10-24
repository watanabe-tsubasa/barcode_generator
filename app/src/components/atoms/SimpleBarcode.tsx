import { useEffect, useRef } from 'react';
import JsBarcode from 'jsbarcode';
import { Box } from '@chakra-ui/react';

type SimpleBarcodeProps = {
  value: string;
  format: 'CODE128' | 'EAN13' | 'EAN8';
}

export const SimpleBarcode: React.FC<SimpleBarcodeProps> = ({ value, format }) => {
  const barcodeRef = useRef(null);

  useEffect(() => {
    if (barcodeRef.current) {
      JsBarcode(barcodeRef.current, value, {
        format: format, // 例: CODE128の形式。他の形式も選択可能。 EAN13 EAN8
        width: 0.5,
        height: 30,
        displayValue: true, // バーコードの下にテキストとしての価値を表示するかどうか
        font: 'noto sans',
        fontSize: 14
      });
    }
  }, [value, format]);

  return (
    <Box m='6'>
      <svg ref={barcodeRef}></svg>
    </Box>
  )
};
