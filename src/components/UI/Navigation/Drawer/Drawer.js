import React, {Component} from 'react'
import classes from './Drawer.module.css'
import {NavLink} from 'react-router-dom'
import Backdrop from '../../Backdrop/Backdrop'

const links = [
  {to: '/', label: 'List', exact: true},
  {to: '/auth', label: 'Authorization', exact: false},
  {to: '/quiz-creator', label: 'Create quiz', exact: false},
]

class Drawer extends Component {

  clickHandler = () => {
    this.props.onClose()
  }

  renderLinks () {
    return links.map((link, index)=>{
      return (
        <li key={index}>
          <NavLink
            to={link.to}
            exact={link.exact}
            activeClassName={classes.active}
            onClick={this.clickHandler}
          >
            {link.label}
          </NavLink>
        </li>
      )
    })
  }
  render () {
    const drawerClasses = [classes.Drawer]

    if (!this.props.isOpen) {
      drawerClasses.push(classes.close)
    }

    return (
      <React.Fragment>
        <nav className={drawerClasses.join(' ')}>
          <ul>
            { this.renderLinks() }
          </ul>
        </nav>
        {this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}
      </React.Fragment>
    )
  }
}

export default Drawer;