
type Props ={
  initial?: number
  end?: number
  data: any[]
}

export const useSelectDataByInterval = ({ initial, end, data }: Props): any => {
  let dataSelected = data

  if (!end && !initial) {
    return dataSelected
  } else if (!end) {
    dataSelected = data.filter(
      (d) => d.timestamp >= initial
    )
    return dataSelected
  } else if (!initial) {
    dataSelected = data.filter(
      (d) => d.timestamp <= end
    )
    return dataSelected
  }

  dataSelected = data.filter(
    (d) => d.timestamp >= initial && d.timestamp <= end
  )
  return dataSelected
}
