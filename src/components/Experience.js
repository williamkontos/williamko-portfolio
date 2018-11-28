import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

export default class Experience extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p className="start-year">{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 className="school-name">{this.props.jobName}</h4>
          <i><h6 className="school-name">{this.props.jobTitle}</h6></i>
          <i><h6 className="school-name">{this.props.location}</h6></i>
          <p className="description">{this.props.jobDescription}</p>
        </Cell>
      </Grid>
    )
  }
}