import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import avatar from '../images/th_Copy of WILLIAM.jpg'

export default class Landing extends Component {
  render() {
    return (
      <div className="bg-image" style={ {width:'100%', margin: 'auto'} }>
        <Grid className="landing-grid animated fadeIn">
          <Cell col={12}>
            <img 
              src={avatar}
              alt="William Avatar"
              className="avatar-image "
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr/>

              <p><span>React</span>  |  <span>Ruby on Rails</span>  |  <span>HTML/CSS</span>  | <span>JavaScript</span>  |  <span>NodeJS</span> |  <span>Bootstrap</span></p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/william-kontos-31098454/" target="_blank"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/williamkontos" target="_blank"><i className="fab fa-github-square"></i></a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}