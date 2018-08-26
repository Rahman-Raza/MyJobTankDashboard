import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = {
  card: {
    boxShadow: '0 0 16px 0 #eee',
    cursor: 'pointer',
    marginBottom: '15px',
      backgroundColor: 'linear-gradient(60deg, #ffa726, #fb8c00)',

  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px 20px',
  },
  percentageContainer: {
    color: '#7cc633',
    display: 'flex',
    justifyContent: 'flex-start',
    fontFamily: 'Helvetica',
    fontSize: '44px',
    fontWeight: 700,
    alignItems: 'center',
    width: '30%',
  },
  detailContainer: {
    display: 'inline-block',
    fontFamily: 'Helvetica',
    fontSize: '14px',
    width: '70%',
  },
  name: {
    fontWeight: '700',
    textTransform: 'uppercase',
  },
};

class CandidateCard extends React.Component {
  render() {
    return (
      <Card
        onClick={() => {
          this.props.resumeToggler();
        }}
        style={styles.card}
        key={this.props.key}>
        <CardContent style={styles.cardContent}>
          <section style={styles.percentageContainer}>
            {this.props.percentage}%
          </section>
          <section style={styles.detailContainer}>
            <p style={styles.name}>Nicolas Germann</p>
            <p>555-555-555</p>
            <p>niclal.lkasdfj@gmail.com</p>
          </section>
        </CardContent>
      </Card>
    );
  }
}

export default CandidateCard;
