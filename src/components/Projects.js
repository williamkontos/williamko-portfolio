import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardText, CardMenu, IconButton } from 'react-mdl'
import whereto from '../images/WhereTo_Logo.svg'
import nba from '../images/nba-standings-home.png'
import vote from '../images/voter-sim.png'
import tennis from '../images/tennis-game.png'
import collab from '../images/collab-app-home.png'
import site from '../images/williamko-site_2.png'



export default class Projects extends Component {
  state = {
            activeTab: 0
          }
  
  toggleCategories() {
    let activeTab = this.state.activeTab
    if (activeTab === 0) {
      return (
              <div className="ruby-projects">
                <Card className="whereto-card" shadow={5} style={ {minWidth: '450', margin: 'auto'} }>
                  <CardTitle style={{color: 'black', height: '176px', background: `url(${whereto}) center / cover`}}></CardTitle>
                  <CardText className="card-text">WhereTo? is a voting system application to help small and midsized companies order food for their employees. This is a prototype I built with Ruby on Rails and React.</CardText>
                  <CardActions border>
                    <a href="https://www.github.com/williamkontos/where-to" target="_blank"><Button colored>GitHub</Button></a>
                    <a href="https://whereto-project.herokuapp.com/" target="_blank"><Button colored>LiveDemo</Button></a>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                  </CardMenu>
                </Card>

                <Card className="nba-card" shadow={5} style={ {minWidth: '450', margin: 'auto'} }>
                  <CardTitle style={{color: 'black', height: '176px', background: `url(${nba}) center / cover`}}></CardTitle>
                  <CardText className="card-text">A quick Rails app that ranks NBA teams by their win percentage. Overall and by conference. I used Ruby on Rails and Bootstrap for this build.</CardText>
                  <CardActions border>
                    <a href="https://github.com/williamkontos/nba-standings" target="_blank"><Button colored>GitHub</Button></a>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                  </CardMenu>
                </Card>

                <Card className="collab-card" shadow={5} style={ {minWidth: '450', margin: 'auto'} }>
                  <CardTitle style={{color: 'black', height: '176px', background: `url(${collab}) center / cover`}}></CardTitle>
                  <CardText className="card-text">A mock app I built following a tutorial to better my understanding of Ruby on Rails and Action Cable. It's main functionality is for a user to connect with like minded individuals.</CardText>
                  <CardActions border>
                    <a href="https://github.com/williamkontos/collab-mock-app" target="_blank"><Button colored>GitHub</Button></a>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                  </CardMenu>
                </Card>
              </div>
             )
    } else if (activeTab === 1) {
      return (
                <div className="js-projects">
                  <Card className="votersim-card" shadow={5} style={ {minWidth: '450', margin: 'auto'} }>
                    <CardTitle style={{color: 'black', height: '176px', background: `url(${site}) center / cover`}}></CardTitle>
                    <CardText className="card-text">This site was built with React! Click on the GitHub link and check out the code.</CardText>
                    <CardActions border>
                      <a href="https://github.com/williamkontos/williamko-portfolio" target="_blank"><Button colored>GitHub</Button></a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                      <IconButton name="share"/>
                    </CardMenu>
                  </Card>
                </div>
             )
    } else {
      return (
              <div className="js-projects">
                <Card className="votersim-card" shadow={5} style={ {minWidth: '450', margin: 'auto'} }>
                  <CardTitle style={{color: 'black', height: '176px', background: `url(${vote}) center / cover`}}></CardTitle>
                  <CardText className="card-text">A voter simulation application using JS object oriented principles and jQuery for user interaction.</CardText>
                  <CardActions border>
                    <a href="https://github.com/williamkontos/voter-sim" target="_blank"><Button colored>GitHub</Button></a>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                  </CardMenu>
                </Card>

                <Card className="mortalkombat-card" shadow={5} style={ {minWidth: '450', margin: 'auto'} }>
                  <CardTitle style={{color: 'black', height: '176px', background: 'url(https://ballzbeatz.com/wp-content/uploads/2018/01/Mortal-Kombat-Logo-Vinyl-Decal-Sticker.jpg) center / cover'}}></CardTitle>
                  <CardText className="card-text">A command-line based adventure/fighting game based in the Mortal Kombat universe.</CardText>
                  <CardActions border>
                    <a href="https://github.com/williamkontos/mortal-kombat" target="_blank"><Button colored>GitHub</Button></a>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                  </CardMenu>
                </Card>

                <Card className="tennis-card" shadow={5} style={ {minWidth: '450', margin: 'auto'} }>
                  <CardTitle style={{color: 'black', height: '176px', background: `url(${tennis}) center / cover`}}></CardTitle>
                  <CardText className="card-text">A tennis game built with HTML, CSS and vanilla JavaScript.</CardText>
                  <CardActions border>
                    <a href="https://github.com/williamkontos/tennis-game" target="_blank"><Button colored>GitHub</Button></a>
                    <a href="https://williamko-tennis-game.herokuapp.com/" target="_blank"><Button colored>LiveDemo</Button></a>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                  </CardMenu>
                </Card>
              </div>
             )
    }
  }

  render() {
    return (
      <div className="category-tabs animated fadeIn">
        <Tabs activeTab={this.state.activeTab} 
              onChange={(tabId) => this.setState({ activeTab: tabId })} 
              ripple
        >
          <Tab className="language-tabs">Ruby on Rails</Tab>
          <Tab className="language-tabs">React</Tab>
          <Tab className="language-tabs">JavaScript</Tab>
        </Tabs>

          <Grid className="projects-grid">
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}