interface EventIntervalProps {
  initial?: number
  end?: number
  events: any[]
}

export const useHandleEvents = () => {
  const dataToEvents = (dataCode: any[]): any => {
    let eventStart = null
    let eventSpan = null
    let eventStop = null
    let eventData = []
    let stopFlag = false

    for (const data of dataCode) {
      switch (data.type) {
        case 'start': {
          eventStart = data
          stopFlag = false
          eventData = []
          break
        }
        case 'span': {
          if (!stopFlag && eventStart) {
            eventSpan = data
          }
          break
        }
        case 'data': {
          if (!stopFlag && eventStart) {
            eventData.push(data)
          }
          break
        }
        case 'stop': {
          if (eventStart) {
            stopFlag = true
            eventStop = data
          }
          break
        }
      }
    }

    return { eventData, eventStart, eventSpan, eventStop }
  }

  const trimEvents = ({ initial, end, events }: EventIntervalProps): any => {
    let selectedEvents = events

    if (!end && !initial) {
      return selectedEvents
    } else if (!end) {
      selectedEvents = events.filter(
        (d) => d.timestamp >= initial
      )
      return selectedEvents
    } else if (!initial) {
      selectedEvents = events.filter(
        (d) => d.timestamp <= end
      )
      return selectedEvents
    }

    selectedEvents = events.filter(
      (d) => d.timestamp >= initial && d.timestamp <= end
    )
    return selectedEvents
  }

  return {
    dataToEvents,
    trimEvents
  }
}
