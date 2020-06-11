import React, {PureComponent} from 'react'
import './Homepage.scss'
import Card from '../../components/Card'


export default class Homepage extends PureComponent {
  render() {
    return (
      <div>
        <Card text='HIIT Workout'/>
        <Card text='Circuit Training'/>
        <Card text='Random Timer'/>
        <Card text='Custom Workout'/>
      </div>
    )
  }
}