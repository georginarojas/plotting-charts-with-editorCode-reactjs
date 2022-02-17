/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { createContext } from 'react'

type ContextProps = {
  clientHeight: any
  clientWidth: any
  setClientHeight: any
  setClientWidth: any
  onMouseHoldDown: (e: any) => void
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const SplitPaneContext = createContext<ContextProps>({} as ContextProps)
