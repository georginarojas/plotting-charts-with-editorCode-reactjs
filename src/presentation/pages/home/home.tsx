/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useState } from 'react'
import jsonic from 'jsonic'
import { mockSeries, sample } from '@/presentation/utils'
import { Chart, CodeEditor, Footer } from '@/presentation/components'
import { useCreateSeries, useHandleEvents } from '@/presentation/hooks'
import Styles from './styles.scss'

const Home: React.FC = () => {
  const [series, setSeries] = useState(mockSeries)
  const [rawCode, setRawCode] = useState<string>(sample)
  const [dataCode, setDataCode] = useState([])
  const dataCodeAux = dataCode
  const MAX_VALUE = 50
  const { dataToEvents, trimEvents } = useHandleEvents()
  const { groupByCategory, seriesFormatting } = useCreateSeries()

  const handleChange = (value: any) => {
    setRawCode(value)
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
        // parse a string into a JavaScript object
        dataCodeAux.push(jsonic(entryObj))
      })
    } catch (error) {
      alert(`Insert data with correct formatting \n 
      ex. {type:"stop", timestamp: 0000000000000}`)
      return
    }
    setDataCode(dataCodeAux)
    const { eventData, eventStart, eventSpan } = dataToEvents(dataCodeAux)
    handleGeneratePlotting(eventSpan, eventStart, eventData)
  }

  const handleGeneratePlotting = (eventSpan, eventStart, eventData) => {
    if (!eventStart) {
      alert('Please, insert data START type')
      return
    }
    if (!eventData || eventData.length === 0) {
      alert('No DATA type to plot')
      return
    }

    let dataChunk = eventData
    if (eventSpan) {
      dataChunk = trimEvents({
        initial: eventSpan.begin,
        end: eventSpan.end,
        events: eventData
      })
    }
    if (dataChunk.length === 0) {
      alert(`No data on interval [${eventSpan.begin} - ${eventSpan.end}]`)
      return
    }
    const grouped = groupByCategory({
      dataChunk,
      categories: eventStart.group
    })

    const eventFormatted = seriesFormatting({
      data: grouped,
      labels: eventStart.select
    })
    setSeries(eventFormatted)
  }

  return (
    <>
      <header>
        <CodeEditor rawCode={rawCode} handleChange={handleChange} />
      </header>

      <div className={Styles.chart}>
        <Chart series={series} />
      </div>
      <Footer handleDataFromEditor={handleDataFromEditor} />
    </>
  )
}

export default Home
