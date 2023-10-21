import { Box, Button, ButtonGroup, Flex } from "@chakra-ui/react";
import { BarcodeContentCard } from "../molecules/BarcodeContentCard";
import { useState } from "react";
import Encoding from "encoding-japanese";
import { BarcodeContentCardProps } from "../types/types"
import { useCommonToast } from "../Hooks/commonToast";


export const BarcodeCards = () => {

  const [contentList, setContentList] = useState<BarcodeContentCardProps[] | []>([]);
  const showToast = useCommonToast()

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    // Check if the file extension is .csv
    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    if (fileExtension !== 'csv') {
      showToast({
        title: 'エラー',
        'status': 'error',
        'description': 'CSVファイルを読み込んでください'
      })
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result;

      // Shift-JISの場合に対応
      const conv = Encoding.convert(
        new Uint8Array(content as ArrayBuffer),
        {
          to: 'UNICODE',
          from: 'AUTO'
        }
      );
      const unicodeStr = Encoding.codeToString(conv)

      // CSVのパース
      const lines = unicodeStr.split(/\r?\n/)
      .filter(line => line.trim() !== '') // 空の行を除去
      .map(x => x.replace(/^"(.*)"$/, '$1'))
      .map(line => line.split(','));
      const data = lines.slice(1).map(list => {
        return {code: list[0], content: list[1]}
      });
      setContentList(data);
    };
    reader.readAsArrayBuffer(file);
  }

  const onClickAlert = () => {
    showToast({
      title: 'お知らせ',
      status: 'info',
      description: '実装中'
    })
  }

  return (
    <Box>
      <Flex justify='center'>
        <ButtonGroup>
          <input type='file' onChange={handleFileChange} style={{ display: "none"}} id="csvFileInput" />
          <label htmlFor="csvFileInput">
            <Button as="span">データ読み込み</Button>
          </label>
          {contentList.length !== 0 ? (
            <Box>
              <Button onClick={onClickAlert} >データ出力</Button>
            </Box>
          ) : <Box />}
        </ButtonGroup>
      </Flex>
      <Flex wrap='wrap' justify='center' align='center' h='70vH' overflow='scroll'>
        {contentList.map((elem, idx) => {
          const { code, content } = elem;
          return <BarcodeContentCard key={idx} code={code} content={content} />
        })}
      </Flex>
    </Box>
  );
}
