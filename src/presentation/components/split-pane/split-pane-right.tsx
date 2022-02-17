import React from 'react'
import Styles from './split-pane.scss'

type Props = {
  children: React.ReactNode
}

const SplitPaneRight: React.FC<Props & React.HTMLAttributes<HTMLElement>> = (
  { children }: Props,
  ...props
) => {
  return (
    <div {...props} className={Styles['split-pane-right']}>
      {children}
    </div>
  )
}

export default SplitPaneRight
