export type Series = {
  name: string
  data: DataSeries[]
}

type DataSeries = {
  timestamp: number
  value: number
}
