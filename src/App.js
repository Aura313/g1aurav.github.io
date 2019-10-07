import * as React from "react";
import { withStyles } from '@material-ui/core';
import { MainSection } from "./sections/main-section";
import { SocialLinksSection } from "./sections/social-links-section";
import { KeySkillsSection } from "./sections/key-skills-section";
import { ExperienceSection } from "./sections/experience-section";
// import { PortfolioSection } from "./sections/portfolio-section";
const resumeData = require('./resume-data.json');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div style={{ maxWidth: 800, margin: 'auto', padding: 5, overflowY: 'auto' }}>
        <MainSection resumeData={resumeData}/>
        <Spacer/>
        <SocialLinksSection resumeData={resumeData}/>
        <Spacer/>
        <KeySkillsSection resumeData={resumeData}/>
        <Spacer/>
        {/* <PortfolioSection resumeData={resumeData}/>
        <Spacer/> */}
        <ExperienceSection resumeData={resumeData}/>
      </div>
    );
  }
}

const Spacer = ({height}) => <div style={{height: height || 10}}/>

const styles = {
  root: {
  },
  tabText: {
    color: '#fff',
  },
  tabIndicator: {
    display: 'none',
  }
};

export default withStyles(styles)(App);
