/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { SplitPaneContext } from '@/presentation/context/split-pane-context'
import React, { createRef, useContext, useEffect } from 'react'
import Styles from './split-pane.scss'

type Props = {
  children: React.ReactNode
}

const SplitPaneTop: React.FC<Props & React.HTMLAttributes<HTMLElement>> = (
  { children }: Props,
  ...props
) => {
  const topRef = createRef() as any
  const { clientHeight, setClientHeight } = useContext(SplitPaneContext)

  useEffect(() => {
    if (!clientHeight) {
      setClientHeight(topRef.current.clientHeight)
      return
    }
    topRef.current.style.minHeight = clientHeight + 'px'
    topRef.current.style.maxHeight = clientHeight + 'px'
  }, [clientHeight])

  return (
    <div {...props} className={Styles['split-pane-top']} ref={topRef}>
      {children}
    </div>
  )
}

export default SplitPaneTop
