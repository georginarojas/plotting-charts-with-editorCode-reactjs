import React from 'react'
import Styles from './styles.scss'

type Props = {
  handleDataFromEditor: (e: any) => void
}

const Footer: React.FC<Props> = ({ handleDataFromEditor }: Props) => {
  return (
    <footer className={Styles.footer}>
      <button type="button" onClick={(e) => handleDataFromEditor(e)}>
        Generate chart
      </button>
    </footer>
  )
}

export default Footer
