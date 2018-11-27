import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
import avatar from '../images/th_Copy of WILLIAM.jpg'

export default class Resume extends Component {
  render() {
    return (
      <div>
        <Grid className="resume animated fadeIn">
            <Cell col={4}>
              <div className="resume-left-col">
                <img 
                  src={avatar}
                />
              </div>
              <div className="resume-titles">
                <h2>William Kontos</h2>
                <h4>Web Developer</h4>
              
                <hr style={ {borderTop: '3px solid #2C5364'} }/>
                <p>
                  Hello there, <strong style={ {color: 'white'} }>I'm William.</strong>
                  <br/>
                  I'm a life-long musician with a B.S. in audio engineering. 
                  My love of digital audio and data led me to pursue a career in software engineering and web development. 
                  I've learned that through hard work and perseverance, any goal can be achieved.
                </p>
              </div>
            </Cell>
            <Cell className="resume-right-col" col={8}>
              <h2>Education</h2>
              <Education 
                startYear={"September 2018"} 
                endYear={"November 2018"} 
                schoolName={"Wyncode Academy"}
                location={"Miami, FL"}
                schoolDescription={"Developed fundamental skills and fluency in Ruby on Rails, JavaScript, React and Node."}
              />
              <Education 
                startYear={"August 2010"} 
                endYear={"June 2012"} 
                schoolName={"Full Sail University"}
                location={"Orlando, FL"}
                schoolDescription={"Obtained my BS in the recording arts and audio engineering."}
              />
              <hr style={ {borderTop: '3px solid #2C5364'} }/>
              <h2>Experience</h2>
              <Experience 
                startYear={"January 2018"} 
                endYear={"September 2018"} 
                jobName={"Digital Preservation Laboratories"}
                jobTitle={"Jr. System Administrator & Archive Technician"}
                location={"Burbank, CA"}
                jobDescription={"Archived and QC’d major motion pictures and episodic television for some of the biggest studios in the world while learning how to maintain our servers and keep big data clean and organized."}
              />
              <Experience 
                startYear={"October 2015"} 
                endYear={"December 2017"} 
                jobName={"Digital Vibrations"}
                jobTitle={"Audio Engineer & Production Manager"}
                location={"Fort Lauderdale, FL"}
                jobDescription={"With a focus in short form advertising, I recorded, edited and mixed countless TV and radio spots. All while hitting hard deadlines and maintaining excellent customer service."}
              />
              <hr style={ {borderTop: '3px solid #2C5364'} }/>
              <h2>Skills</h2>
              <Skills
                skill={"HTML/CSS"}
                progress={100}
              />
              <Skills
                skill={"JavaScript"}
                progress={85}
              />
              <Skills
                skill={"React"}
                progress={70}
                buffer={30}
              />
              <Skills
                skill={"Ruby on Rails"}
                progress={60}
                buffer={40}
              />
            </Cell>
        </Grid>
      </div>
    )
  }
}