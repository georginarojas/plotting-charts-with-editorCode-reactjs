/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { SplitPaneContext } from '@/presentation/context/split-pane-context'
import Styles from './split-pane.scss'

const Divider: React.FC<React.HTMLAttributes<HTMLElement>> = (...props) => {
  const { onMouseHoldDown } = useContext(SplitPaneContext)
  console.log('Divider ', props)
  return (
        <div {...props} className={Styles[props[0].className]} onMouseDown={onMouseHoldDown} ></div>
  )
}

export default Divider
