import React from "react"
import { AppBar, Toolbar, Typography, Grid } from "@material-ui/core"
import AdbIcon from "@material-ui/icons/Adb"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import GitHubIcon from "@material-ui/icons/GitHub"
import MenuOpenIcon from "@material-ui/icons/MenuOpen"

const Header = () => {
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
          <Grid item align="center" xs={1}>
            <AccountCircleIcon fontSize="large" />
          </Grid>
          <Grid item align="center" xs={1}>
            <GitHubIcon fontSize="large" />
          </Grid>
          <Grid item align="center" xs={1}>
            <MenuOpenIcon fontSize="large" />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header
