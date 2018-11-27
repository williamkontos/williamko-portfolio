import React, { Component } from 'react'
import { Grid, Cell, ProgressBar } from 'react-mdl'

export default class Skills extends Component {
  render() {
    return(
      <Grid>
        <Cell col={12}>
        <div className="skill">
          {this.props.skill}
          <ProgressBar 
            className="progress" 
            progress={this.props.progress} 
            buffer={this.props.buffer}
          />
        </div>
        </Cell>
      </Grid>
    )
  }
}