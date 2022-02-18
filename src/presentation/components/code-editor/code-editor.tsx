/* eslint-disable @typescript-eslint/restrict-plus-operands */
import React, { useContext } from 'react'
import AceEditor from 'react-ace'
import { SplitPaneContext } from '@/presentation/context/split-pane-context'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-monokai'

type Props = {
  rawCode: any
  handleChange: (value: any) => void
}

const CodeEditor: React.FC<Props> = ({ rawCode, handleChange }) => {
  const { clientHeight } = useContext(SplitPaneContext)
  const heightRef: string = clientHeight ? clientHeight + 'px' : '250px'
  return (
    <AceEditor
      mode="javascript"
      theme="monokai"
      value={rawCode}
      onChange={(newValue) => {
        handleChange(newValue)
      }}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
      setOptions={{
        showLineNumbers: true
      }}
      style={{
        width: '100%',
        height: heightRef
      }}
      fontSize={16}
    />
  )
}

export default CodeEditor
