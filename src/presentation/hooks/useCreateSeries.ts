import { Series } from '@/domain/models'
import _ from 'lodash'

type GroupByCategoryProps = {
  dataChunk: any[]
  categories: string[]
}

type SeriesFormattingProps = {
  data: Object
  labels: string[]
}

export const useCreateSeries = () => {
  /*
  groupByCategory function groups data according to category
  */
  const groupByCategory = ({ dataChunk, categories }: GroupByCategoryProps): any => {
    const getKey = (item, categories: string[]) => {
      let key = ''
      categories.forEach((category) => {
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        key += item[category] + '_'
      })

      return key
    }
    const iterator = (item) => {
      return getKey(item, categories)
    }
    const grouped = _.groupBy(dataChunk, iterator)

    return grouped
  }
  /*
  seriesFormatting function, formats the grouped data according to the "Series" model
  for plotting on the line chart
  */
  const seriesFormatting = ({ data, labels }: SeriesFormattingProps): Series[] => {
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

  return {
    groupByCategory,
    seriesFormatting
  }
}
