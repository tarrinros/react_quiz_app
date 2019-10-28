import React, {Component} from 'react'
import classes from './Drawer.module.css'
import Backdrop from '../../Backdrop/Backdrop'

const links = [
  1, 2, 3
]

class Drawer extends Component {
  renderLinks () {
    return links.map((link, index)=>{
      return (
        <li key={index}>
          <a>Link {link}</a>
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