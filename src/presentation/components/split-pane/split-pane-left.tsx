/* eslint-disable @typescript-eslint/restrict-plus-operands */
import React, { createRef, useContext, useEffect } from 'react'
import { SplitPaneContext } from '@/presentation/context/split-pane-context'

type Props = {
  children: React.ReactNode
}

const SplitPaneLeft: React.FC<Props & React.HTMLAttributes<HTMLElement>> = (
  { children }: Props,
  props
) => {
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
    <div {...props} className="split-pane-left" ref={leftRef}>
      {children}
    </div>
  )
}

export default SplitPaneLeft
