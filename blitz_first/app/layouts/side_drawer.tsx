import React from "react"
import {
  Drawer,
  Divider,
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core"
import CodeIcon from "@material-ui/icons/Code"
import GamesIcon from "@material-ui/icons/Games"
import AppsIcon from "@material-ui/icons/Apps"
import BookmarksIcon from "@material-ui/icons/Bookmarks"

const SideDrawer = ({ isOpen, closeDrawer }) => {
  return (
    <Drawer anchor={"right"} open={isOpen} onClick={closeDrawer}>
      <List
        component="nav"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Blog
          </ListSubheader>
        }
      >
        <ListItem button>
          <ListItemIcon>
            <CodeIcon />
          </ListItemIcon>
          <ListItemText primary="Development" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <GamesIcon />
          </ListItemIcon>
          <ListItemText primary="Game" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AppsIcon />
          </ListItemIcon>
          <ListItemText primary="Various" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <BookmarksIcon />
          </ListItemIcon>
          <ListItemText primary="Bookmarks" />
        </ListItem>
      </List>
    </Drawer>
  )
}

export default SideDrawer
