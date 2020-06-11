import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import './Card.scss'

export default class Card extends PureComponent {
  static propTypes = {
    text: PropTypes.string
  }
  render(){
    return (
      <div className='card'>
        <button className='button'> 
          {this.props.text} 
        </button>
      </div>
    )
  }
}