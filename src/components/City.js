import React, { Component } from 'react'
import Tool from './../engine/Tool'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import classNames from 'classnames'
import styles from './../styles/City.scss'

class City extends Component {
  componentDidMount() {
    this.refs.city.style.backgroundColor = Tool.getRandomColor()
  }

  render() {
    console.log(PropTypes)
    return (
      <div className={classNames('col-md-6', styles.city)} ref="city">
        <figure className={styles['image-background']}>
          <img src={this.props.imgSrc} alt={this.props.name} />
        </figure>
        <div className={classNames(styles['fill-up'], styles['hover-in'])}>
          <h1 className={styles['city-name']}>{this.props.name}</h1>
        </div>
        <a className={classNames(styles['fill-up'], styles['city-link'])} rel="noopener noreferrer" href={this.props.link} target="_blank">{this.props.name}</a>
      </div>
    )
  }
}

City.propTypes = {
  name: PropTypes.string,
  imgSrc: PropTypes.string,
  link: PropTypes.string
}

export default CSSModules(City, styles)