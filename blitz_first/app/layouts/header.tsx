import React from "react"
import { AppBar, Toolbar, Typography, Grid, IconButton } from "@material-ui/core"
import AdbIcon from "@material-ui/icons/Adb"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import GitHubIcon from "@material-ui/icons/GitHub"
import MenuOpenIcon from "@material-ui/icons/MenuOpen"

const Header = ({ openDrawer }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid
          direction="row"
          justify="space-between"
          alignContent="center"
          alignItems="center"
          container
        >
          <Grid item align="center" xs={1}>
            <AdbIcon fontSize="large" />
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h5" align="left">
              MegaRed's Room
            </Typography>
          </Grid>
          <Grid
            item
            align="center"
            xs={1}
            onClick={() => window.open("https://linnefromice-portfolio.web.app/")}
          >
            <AccountCircleIcon fontSize="large" />
          </Grid>
          <Grid
            item
            align="center"
            xs={1}
            onClick={() => window.open("https://github.com/linnefromice")}
          >
            <GitHubIcon fontSize="large" />
          </Grid>
          <Grid item align="center" xs={1}>
            <IconButton color="inherit" onClick={openDrawer}>
              <MenuOpenIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header
