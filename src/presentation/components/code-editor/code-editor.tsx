import React from 'react'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-monokai'

type Props = {
  rawCode: any
  handleChange: (value: any) => void
}

const CodeEditor: React.FC<Props> = ({ rawCode, handleChange }) => {
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
        height: '250px'
      }}
      fontSize={16}
    />
  )
}

export default CodeEditor
