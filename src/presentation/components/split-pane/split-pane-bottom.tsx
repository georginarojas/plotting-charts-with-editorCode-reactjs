import React from 'react'
import Styles from './split-pane.scss'

type Props = {
  children: React.ReactNode
}

const SplitPaneBottom: React.FC<Props> = ({ children }: Props) => {
  return <div className={Styles['split-pane-bottom']}>{children}</div>
}

export default SplitPaneBottom
