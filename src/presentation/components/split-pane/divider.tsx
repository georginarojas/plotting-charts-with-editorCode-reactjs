/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { SplitPaneContext } from '@/presentation/context/split-pane-context'
import Styles from './split-pane.scss'

type Props = {
  nameClass: string
}

const Divider: React.FC<Props> = ({ nameClass }: Props) => {
  const { onMouseHoldDown } = useContext(SplitPaneContext)
  return (
    <div className={Styles[nameClass]} onMouseDown={onMouseHoldDown}></div>
  )
}

export default Divider
