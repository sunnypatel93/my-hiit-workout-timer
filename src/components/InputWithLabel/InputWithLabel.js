import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

export default class InputWithLabel extends PureComponent {

  static props = {
    labelText: PropTypes.string,
    inputType: PropTypes.oneOf(['text', 'number'])
  }
  render(){
    return(
      <div className='input-with-label-wrapper'>
        <label>
          {this.props.labelText}
          
          <br />
          <input type={this.props.inputType} />
          </label>
        
      </div>
    )
  }
}