import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardText, CardMenu, IconButton } from 'react-mdl'
import whereto from '../images/WhereTo_Logo.svg'

export default class Projects extends Component {
  state = {
            activeTab: 0
          }
  
  toggleCategories() {
    let activeTab = this.state.activeTab
    if (activeTab === 0) {
      return (
                <Card shadow={5} style={ {minWidth: '450', margin: 'auto'} }>
                  <CardTitle style={{color: 'black', height: '176px', background: `url(${whereto}) center / cover`}}></CardTitle>
                  <CardText>WhereTo? is a voting system application to help small and midsized companies order food for their employees. This is a prototype I built with Ruby on Rails and React.</CardText>
                  <CardActions border>
                  <a href="https://www.github.com/williamkontos/where-to" target="_blank"><Button colored>GitHub</Button></a>
                  <a href="https://whereto-project.herokuapp.com/" target="_blank"><Button colored>LiveDemo</Button></a>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                  </CardMenu>
                </Card>
             )
    } else if (activeTab === 1) {
      return (
                <div>
                  <h1>Coming Soon!</h1>
                </div>
             )
    } else {
      return (
                <div>
                  <h1>Coming Soon!</h1>
                </div>
             )
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} 
              onChange={(tabId) => this.setState({ activeTab: tabId })} 
              ripple>
          <Tab>Ruby on Rails</Tab>
          <Tab>React</Tab>
          <Tab>JavaScript</Tab>
        </Tabs>

        <section className="projects-grid">
          <Grid className="projects-grid">
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    )
  }
}