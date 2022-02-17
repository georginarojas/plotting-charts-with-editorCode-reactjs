import React from 'react'
import Styles from './split-pane.scss'

type Props = {
  children: React.ReactNode
}

const SplitPaneBottom: React.FC<Props & React.HTMLAttributes<HTMLElement>> = (
  { children }: Props,
  ...props
) => {
  return (
    <div {...props} className={Styles['split-pane-bottom']}>
      {children}
    </div>
  )
}

export default SplitPaneBottom
