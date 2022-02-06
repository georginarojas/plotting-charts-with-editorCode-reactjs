import { Series } from '@/domain/models'
import _ from 'lodash'

type Props = {
  data: Object
  labels: string[]
}

export const useDataFormattingToPlot = ({ data, labels }: Props): any[] => {
  const seriesTemp: any = []
  const series: Series[] = []

  for (const [key, value] of Object.entries(data)) {
    value.forEach(v =>
      labels.forEach(label => {
        const seriesName = key + label
        const dataSeries = { timestamp: v.timestamp, value: v[label] }
        seriesTemp.push({ name: seriesName, data: dataSeries })
      }
      )
    )
  }
  const grouped = _.groupBy(seriesTemp, item => item.name)

  for (const [key, value] of Object.entries(grouped)) {
    const dataTemp = []
    value.forEach(v => {
      dataTemp.push(v.data)
    })
    series.push({ name: key, data: dataTemp })
  }
  return series
}
