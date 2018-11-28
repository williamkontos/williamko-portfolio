import React, { Component } from 'react'
import Mailto from 'react-protected-mailto'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'
import brandy from '../images/brandy.jpg'

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-body animated fadeIn">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2 className="william">William Kontos</h2>
            <h6>(Brandy tax)</h6>
            <img 
              src={brandy}
              alt="William Contact Avatar"
              className="contact-image animated fadeIn"
            />
            <p className="animated fadeIn">Feel free to contact me at anytime. I always try to respond as quickly as possible.</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent className="icon">
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    <Mailto className="phone" tel="954-643-8574"/>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent className="icon" >
                      <i className="fas fa-envelope" aria-hidden="true"/>
                      <Mailto className="email" email="williamjkontos@gmail.com" headers={{subject:'Question from the website'}} />
                  </ListItemContent>                
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}