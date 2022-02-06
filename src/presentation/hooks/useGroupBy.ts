import _ from 'lodash'

type Props ={
  dataChunk: any[]
  groups: string[]
}

export const useGroupBy = ({ dataChunk, groups }: Props): any => {
  const getKey = (item, groups: string[]) => {
    let key = ''
    groups.forEach((group) => {
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      key += (item[group] + '_')
    })

    return key
  }
  const iterator = (item) => {
    return getKey(item, groups)
  }
  const grouped = _.groupBy(dataChunk, iterator)

  return grouped
}
