import { useEffect, useRef } from 'react';
import JsBarcode from 'jsbarcode';
import { Box } from '@chakra-ui/react';

type SimpleBarcodeProps = {
  value: string;
}

export const SimpleBarcode: React.FC<SimpleBarcodeProps> = ({ value }) => {
  const barcodeRef = useRef(null);

  useEffect(() => {
    if (barcodeRef.current) {
      JsBarcode(barcodeRef.current, value, {
        format: "CODE128", // 例: CODE128の形式。他の形式も選択可能。
        width: 2,
        height: 50,
        displayValue: true, // バーコードの下にテキストとしての価値を表示するかどうか
        font: 'noto sans',
        fontSize: 14
      });
    }
  }, [value]);

  return (
    <Box m='6'>
      <svg ref={barcodeRef}></svg>
    </Box>
  )
};
