
export const useHandleData = (dataCode: any[]): any => {
  let startData = null
  let spanData = null
  let stopData = null
  let dataType = []
  let stopFlag = false

  for (const data of dataCode) {
    switch (data.type) {
      case 'start': {
        startData = data
        stopFlag = false
        dataType = []
        break
      }
      case 'span': {
        if (!stopFlag && startData) {
          spanData = data
        }
        break
      }
      case 'data': {
        if (!stopFlag && startData) {
          dataType.push(data)
        }
        break
      }
      case 'stop': {
        if (startData) {
          stopFlag = true
          stopData = data
        }
        break
      }
    }
  }

  return { dataType, startData, spanData, stopData }
}
