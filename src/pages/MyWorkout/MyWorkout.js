import React, {PureComponent} from 'react'
import InputWithLabel from '../../components/InputWithLabel'
import './MyWorkout.scss'

export default class MyWorkout extends PureComponent {
  
  onSubmit() {
    console.log('heello')
  }
  
  render(){
    return(
      <div>
        <h1> Build My HIIT Workout </h1>
        <form>
          <InputWithLabel
              labelText='Exercise Name'
              inputType='text'
            />
             <InputWithLabel
              labelText='Sets'
              inputType='number'
            />

            <button type='submit' onClick={this.onSubmit}> Submit </button>
        </form>

      </div>
    )
  }
}