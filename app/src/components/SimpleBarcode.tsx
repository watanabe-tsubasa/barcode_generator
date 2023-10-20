import { useEffect, useRef } from 'react';
import JsBarcode from 'jsbarcode';

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
        height: 100,
        displayValue: true, // バーコードの下にテキストとしての価値を表示するかどうか
      });
    }
  }, [value]);

  return <svg ref={barcodeRef}></svg>;
};
