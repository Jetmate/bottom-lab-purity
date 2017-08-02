import React from 'react'

import Question from './component/Question.jsx'
import Footer from './component/Footer.jsx'

class Main extends React.Component {
  render () {
    return (
      <div>
        <Question text='Do you like to sex?' />
        <Footer />
      </div>
    )
  }
}

export default Main
