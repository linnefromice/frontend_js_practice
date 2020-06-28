import React from "react"
import Header from "app/layouts/header"
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

const Content = () => (
  <div className="container">
    <main>
      <p>This is my page.</p>
    </main>
  </div>
)

const MyPage = () => {
  return (
    <div>
      <Header />
      <Drawer anchor={"right"} open={true}>
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
      <Content />
    </div>
  )
}

export default MyPage
