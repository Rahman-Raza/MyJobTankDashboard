import React, {Component} from 'react';

import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';

import LetterHead from './LetterHead';
import ContentSection from './ContentSection';
import NumberedListItem from './NumberedListItem';
import ChipSection from './ChipSection';
import ChecklistSection from './ChecklistSection';
import CandidateCard from './CandidateCard';
import Resume from './Resume';

const styles = {
  paper: {
    boxShadow: '0 0 16px 0 #eee',
    padding: '20px',
  },
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showResume: false,
    };
    this.toggleResume = this.toggleResume.bind(this);
  }

  toggleResume() {
    console.log(this.state);
    this.setState({
      showResume: !this.state.showResume,
    });
  }

  render() {
    return (
      <div className="container">
        {this.state.showResume ? (
          <Resume closeHandler={this.toggleResume} />
        ) : null}

        <Grid container spacing={24}>
          <Grid item sm={8}>
            <Paper classes={{root: this.props.classes.paper}} elevation={0}>
              <LetterHead />

              <ContentSection heading="About Summary">
                <p style={{fontSize: '14px', color: grey[700]}}>
                  Starbucks Corporation is an American coffee company and
                  coffeehouse chain. Starbucks was founded in Seattle,
                  Washington in 1971. As of November 2016, it operates 23,768
                  locations worldwide. Starbucks is considered the main
                  representative of "second wave coffee", initially
                  distinguishing itself from other coffee-serving venues in the
                  US by taste, quality, and customer experience while
                  popularizing darkly roasted coffee.Β] Since the 2000s, third
                  wave coffee makers have targeted quality-minded coffee
                  drinkers with hand-made coffee based on lighter roasts, while
                  Starbucks nowadays uses automated espresso machines for
                  efficiency and safety reasons.
                </p>
              </ContentSection>

              <ContentSection heading="Key Responsibilities">
                <List>
                  <NumberedListItem
                    number="1"
                    text="Knowledge of data structures, algorithms and computer science concepts relative to the platform."
                  />
                  <NumberedListItem
                    number="2"
                    text="Proficiency in development languages, tools, frameworks, utilities and technical dependencies."
                  />
                  <NumberedListItem
                    number="3"
                    text="Ability to write and value high quality, reusable software with minimal defects. Ability to learn and incorporate new technologies, concepts and development languages."
                  />
                  <NumberedListItem
                    number="4"
                    text="Ability to absorb new concepts and technical implementation of application architecture, infrastructure and security."
                  />
                </List>
              </ContentSection>

              <ContentSection heading="Required Skills">
                <ChipSection subheading="Language" labels={['English']} />
                <ChipSection subheading="Required Skills" labels={['Python']} />
              </ContentSection>

              <ContentSection heading="Compensation">
                <ChipSection
                  subheading="Salary Range"
                  labels={['100,000 - 150,000']}
                />
                <ChecklistSection
                  subheading="Benefits"
                  labels={[
                    'Options',
                    'Commisions',
                    'Overtime pay',
                    'Bonuses',
                    'Travel / Meal / Housing Allowance',
                  ]}
                />
              </ContentSection>
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <aside className="sidebar">
              <CandidateCard
                resumeToggler={this.toggleResume}
                percentage="99"
              />
              <CandidateCard
                resumeToggler={this.toggleResume}
                percentage="99"
              />
              <CandidateCard
                resumeToggler={this.toggleResume}
                percentage="99"
              />
              <CandidateCard
                resumeToggler={this.toggleResume}
                percentage="99"
              />
              <CandidateCard
                resumeToggler={this.toggleResume}
                percentage="99"
              />
              <CandidateCard
                resumeToggler={this.toggleResume}
                percentage="99"
              />
              <CandidateCard
                resumeToggler={this.toggleResume}
                percentage="99"
              />
              <CandidateCard
                resumeToggler={this.toggleResume}
                percentage="99"
              />
              <CandidateCard
                resumeToggler={this.toggleResume}
                percentage="99"
              />
              <CandidateCard
                resumeToggler={this.toggleResume}
                percentage="99"
              />
              <CandidateCard
                resumeToggler={this.toggleResume}
                percentage="99"
              />
            </aside>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Main);
