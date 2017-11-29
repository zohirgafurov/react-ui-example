import { map, addIndex } from 'ramda'
import { compose } from 'recompose'
import React from 'react'
import PropTypes from 'prop-types'
import List from 'material-ui/List'
import ListSubheader from 'material-ui/List/ListSubheader'
import withStyles from 'material-ui/styles/withStyles'
import MenuListItem from '../Menu/MenuListItem'

const styles = theme => ({
  button: {
    '&:hover': {
      backgroundColor: theme.menu.buttonHover
    },
    '&:focus': {
      backgroundColor: theme.menu.buttonHover
    }
  }
})

const MenuList = ({ classes, route, menuList, activeMenuName }) => (
  <List subheader={<ListSubheader>Navigation</ListSubheader>}>
    {addIndex(map)((item, index) => (
      <MenuListItem
        key={index}
        item={item}
        route={route}
        isRoot={true}
        className={classes.button}
        activeMenuName={activeMenuName}
      />
    ), menuList)}
  </List>
)

MenuList.propTypes = {
  classes: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
  menuList: PropTypes.array.isRequired,
  activeMenuName: PropTypes.string.isRequired
}

export default compose(
  withStyles(styles)
)(MenuList)
