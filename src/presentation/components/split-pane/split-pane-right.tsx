import React from 'react'

type Props = {
  children: React.ReactNode
}

const SplitPaneRight: React.FC<Props & React.HTMLAttributes<HTMLElement>> = (
  { children }: Props,
  ...props
) => {
  return (
    <div {...props} className="split-pane-right">
      {children}
    </div>
  )
}

export default SplitPaneRight
