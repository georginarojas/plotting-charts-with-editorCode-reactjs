import React from 'react'
import Styles from './split-pane.scss'

type Props = {
  children: React.ReactNode
}

const SplitPaneRight: React.FC<Props> = ({ children }: Props) => {
  return <div className={Styles['split-pane-right']}>{children}</div>
}

export default SplitPaneRight
