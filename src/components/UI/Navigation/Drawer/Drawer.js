import React, {Component} from 'react'
import classes from './Drawer.module.css'

const links = [
  1, 2, 3
]

class Drawer extends Component {
  renderLinks () {
    return links.map((link, index)=>{
      return (
        <ul>
          <li key={index}>
            <a>Link {link}</a>
          </li>
        </ul>
      )
    })
  }
  render () {
    const drawerClasses = [classes.Drawer]

    if (!this.props.isOpen) {
      drawerClasses.push(classes.close)
    }

    return (
      <nav className={drawerClasses.join(' ')}>
        { this.renderLinks() }
      </nav>
    )
  }
}

export default Drawer;