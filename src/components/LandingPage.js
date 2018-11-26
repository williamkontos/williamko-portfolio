import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import avatar from '../images/th_Copy of WILLIAM.jpg'

export default class Landing extends Component {
  render() {
    return (
      <div style={ {width:'100%', margin: 'auto'} }>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img 
              src={avatar}
              alt="William Avatar"
              className="avatar-image animated rollIn delay-.8s"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr/>

              <p><span>Ruby on Rails</span>  |  <span>React</span>  |  <span>HTML/CSS</span>  | <span>JavaScript</span>  |  <span>Bootstrap</span></p>
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