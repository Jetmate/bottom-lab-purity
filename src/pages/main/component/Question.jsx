import React from 'react'

import style from './stylesheet.css'

class Question extends React.Component {
  render () {
    return (
      <div className={'row' + ' ' + style.Question}>
        <div className='col-2'>
          <p>{this.props.text}</p>
        </div>
        <div className='col-4'>
          <img src='./media/success.svg' />
        </div>
        <div className='col-4'>
          <img src='./media/error.svg' />
        </div>
      </div>
    )
  }
}

export default Question