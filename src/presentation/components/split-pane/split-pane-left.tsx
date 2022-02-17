/* eslint-disable @typescript-eslint/restrict-plus-operands */
import React, { createRef, useContext, useEffect } from 'react'
import { SplitPaneContext } from '@/presentation/context/split-pane-context'
import Styles from './split-pane.scss'

type Props = {
  children: React.ReactNode
}

const SplitPaneLeft: React.FC<Props> = ({ children }: Props) => {
  const leftRef = createRef() as any
  const { clientWidth, setClientWidth } = useContext(SplitPaneContext)

  useEffect(() => {
    if (!clientWidth) {
      setClientWidth(leftRef.current.clientWidth / 2)
      return
    }
    leftRef.current.style.minWidth = clientWidth + 'px'
    leftRef.current.style.maxWidth = clientWidth + 'px'
  }, [clientWidth])

  return (
    <div className={Styles['split-pane-left']} ref={leftRef}>
      {children}
    </div>
  )
}

export default SplitPaneLeft
