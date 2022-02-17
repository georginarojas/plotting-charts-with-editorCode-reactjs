/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import React, { useEffect, useRef, useState } from 'react'
import { SplitPaneContext } from '@/presentation/context/split-pane-context'
import Styles from './split-pane.scss'

type Props = {
  children: React.ReactNode
  nameClass: string
}

const SplitPaneProvider: React.FC<Props> = ({
  children,
  nameClass
}: Props): any => {
  const [clientHeight, setClientHeight] = useState(null)
  const [clientWidth, setClientWidth] = useState(null)
  const yDividerPos = useRef(null)
  const xDividerPos = useRef(null)

  const onMouseHoldDown = (e: any): void => {
    yDividerPos.current = e.clientY
    xDividerPos.current = e.clientX
  }
  const onMouseHoldUp = (e: any): void => {
    yDividerPos.current = null
    xDividerPos.current = null
  }
  const onMouseHoldMove = (e: any): void => {
    if (!yDividerPos.current && !xDividerPos.current) {
      return
    }
    setClientHeight(clientHeight + e.clientY - yDividerPos.current)
    setClientWidth(clientWidth + e.clientX - xDividerPos.current)

    yDividerPos.current = e.clientY
    xDividerPos.current = e.clientX
  }

  useEffect(() => {
    document.addEventListener('mouseup', onMouseHoldUp)
    document.addEventListener('mousemove', onMouseHoldMove)

    return () => {
      document.removeEventListener('mouseup', onMouseHoldUp)
      document.removeEventListener('mousemove', onMouseHoldMove)
    }
  })
  return (
    <div className={Styles[nameClass]}>
      {/* <div {...props} className={Styles[props[0].className]}> */}
      <SplitPaneContext.Provider
        value={{
          clientHeight,
          clientWidth,
          setClientHeight,
          setClientWidth,
          onMouseHoldDown
        }}
      >
        {children}
      </SplitPaneContext.Provider>
    </div>
  )
}

export default SplitPaneProvider
