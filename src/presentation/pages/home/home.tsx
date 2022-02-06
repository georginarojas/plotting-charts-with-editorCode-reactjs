/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useState } from 'react'
import jsonic from 'jsonic'
import { mockSeries } from '@/presentation/utils'
import { Chart, CodeEditor, Footer } from '@/presentation/components'
import {
  useDataFormattingToPlot,
  useGroupBy,
  useHandleData,
  useSelectDataByInterval
} from '@/presentation/hooks'
import Styles from './styles.scss'

const Home: React.FC = () => {
  const [dataFormatted, setDataFormatted] = useState(mockSeries)
  const [rawCode, setRawCode] = useState<string>()
  const [dataCode, setDataCode] = useState([])
  const dataCodeAux = dataCode
  const MAX_VALUE = 50

  const handleChange = (value: any) => {
    setRawCode(value)
    console.log('!!!!!!!!! ', value)
  }

  const handleDataFromEditor = async (event) => {
    event.preventDefault()
    if (!rawCode) {
      alert('Please, insert data')
      return
    }
    const entries = rawCode.split(/\r\n|\r|\n/)
    if (entries.length > MAX_VALUE) {
      alert(`Maximum number of data allow: ${MAX_VALUE}`)
      return
    }

    try {
      entries.forEach((entry) => {
        const entryObj = entry.trim()
        dataCodeAux.push(jsonic(entryObj))
      })
    } catch (error) {
      alert(`Insert data with correct formatting \n 
      ex. {type:"stop", timestamp: 0000000000000}`)
      return
    }
    setDataCode(dataCodeAux)
    const { dataType, startData, spanData, stopData } = useHandleData(dataCodeAux)
    console.log(dataType, startData, spanData, stopData)
    handleGeneratePlotting(spanData, startData, dataType)
  }

  const handleGeneratePlotting = (span, start, data) => {
    if (!start) {
      alert('Please, insert data START type')
      return
    }
    if (!data || data.length === 0) {
      alert('No DATA type to plot')
      return
    }

    let dataChunk = data
    if (span) {
      dataChunk = useSelectDataByInterval({
        initial: span.begin,
        end: span.end,
        data
      })
    }
    if (dataChunk.length === 0) {
      alert(`No data on interval [${span.begin} - ${span.end}]`)
      return
    }
    const grouped = useGroupBy({ dataChunk, groups: start.group })

    const dataFormatting = useDataFormattingToPlot({
      data: grouped,
      labels: start.select
    })
    setDataFormatted(dataFormatting)
  }

  return (
    <>
      <header>
        <CodeEditor rawCode={rawCode} handleChange={handleChange} />
      </header>

      <div className={Styles.chart}>
        <Chart series={dataFormatted} />
      </div>
      <Footer handleDataFromEditor={handleDataFromEditor} />
    </>
  )
}

export default Home
