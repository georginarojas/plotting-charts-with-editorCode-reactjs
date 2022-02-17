import React from 'react'

type Props = {
  children: React.ReactNode
}

const SplitPaneBottom: React.FC<Props & React.HTMLAttributes<HTMLElement>> = (
  { children }: Props,
  ...props
) => {
  return (
    <div {...props} className="split-pane-bottom">
      {children}
    </div>
  )
}

export default SplitPaneBottom
