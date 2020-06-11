import React, {PureComponent} from 'react'
import './Homepage.scss'
import ClickableCard from '../../components/ClickableCard'

export default class Homepage extends PureComponent {
  
  handleOnClick() {
    console.log('hello')
  }

  render() {
    return (
      <div>
        <ClickableCard text='HIIT Workout' onClick={this.handleOnClick}/>
        <ClickableCard text='Circuit Training'/>
        <ClickableCard text='Random Timer'/>
        <ClickableCard text='Custom Workout'/>
      </div>
    )
  }
}