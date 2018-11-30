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
                <h4 className="professions">Web Developer | Audio Engineer | Musician</h4>
              
                <hr className="above-about" style={ {borderTop: '3px solid #2C5364'} }/>
                
                <p className="about-me">
                  Hello there, <strong>I'm William.</strong>
                  <br/>
                  I'm a life-long musician with a B.S. in audio engineering.<br/>
                  My love of digital audio and data led me to pursue a career in software engineering and web development.<br/> 
                  I've learned that through hard work and perseverance, <br/> 
                  any goal can be achieved.
                </p>

                <hr className="under-about" style={ {borderTop: '3px solid #2C5364'} }/>

                <h4>My Goal</h4>
                <p className="my-goal">
                  I aspire to <strong>design and build interactive and elegant web apps.</strong>
                  <br/> 
                  The desire to create something from nothing drives me to no end. <br/>
                  Picking the right tools for the job and learning by getting my hands dirty has proven to be the most effective way to improve my skills in development. 
                </p>
                <hr className="under-about" style={ {borderTop: '3px solid #2C5364'} }/>
                
                <div className="quote">
                  <q>Continuous improvement is better than delayed perfection.</q>
                    <br/>
                    <p>- Mark Twain</p>
                </div>

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
              <Experience 
                startYear={"August 2014"} 
                endYear={"July 2015"} 
                jobName={"Chewy.com"}
                jobTitle={"Fraud Lead & Trainer"}
                location={"Dania Beach, FL"}
                jobDescription={"Scanned customer orders and prevented fraudulent purchases. I also trained new hires in customer service and reporting suspicious activity."}
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