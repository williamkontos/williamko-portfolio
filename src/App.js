import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import './css/App.css';
import './css/landingpage.css';
import './css/projects.css';
import './css/contact.css';
import './css/resume.css';
import Main from './components/Main'
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
          <Layout>
              <Header className="header-color" title={<Link style={ {textDecoraton: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll>
                  <Navigation>
                      <Link to="/">Home</Link>
                      <Link to="/resume">Resume</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Header>
              <Drawer title="williamkontos">
                  <Navigation>
                      <Link to="/">Home</Link>
                      <Link to="/resume">Resume</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Main />
              </Content>
          </Layout>
      </div>
    );
  }
}

export default App;
