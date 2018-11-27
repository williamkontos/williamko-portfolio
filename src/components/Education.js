import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

export default class Education extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 className="school-name">{this.props.schoolName}</h4>
          <i><h6 className="school-name">{this.props.location}</h6></i>
          <p>{this.props.schoolDescription}</p>
        </Cell>
      </Grid>
    )
  }
}