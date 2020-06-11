import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import './ClickableCard.scss'

export default class ClickableCard extends PureComponent {
  static propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
  }
  render(){
    return (
      <div className='card'>
        <button 
        onClick={this.props.onClick}
        className='button'> 
          {this.props.text} 
        </button>
      </div>
    )
  }
}