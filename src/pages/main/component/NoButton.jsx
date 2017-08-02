import React from 'react'

import style from './NoButton.css'

class NoButton extends React.Component {
  render () {
    return (
      <button>
        <img className={style.NoButton} src='media/error.svg' />
      </button>
    )
  }
}

export default NoButton
