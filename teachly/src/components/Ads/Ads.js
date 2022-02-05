import { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Ad from './Ad/Ad';
import styles from "./Ads.module.css";

const propTypes = {
  ads: PropTypes.array.isRequired,
}

class Ads extends Component {
  render() {
    return (
      <div className={styles.conatiner}>
        <h2 className={styles.title}>Oferty:</h2>
        {this.props.ads.map(ad => (
          <Ad
            key={ad.id} {...ad} />
        ))}
      </div>
    );
  }
}

Ads.propTypes = propTypes;

export default Ads;

