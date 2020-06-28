import React from "react"
import { AppBar, Toolbar, Typography, Grid } from "@material-ui/core"
import AdbIcon from "@material-ui/icons/Adb"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import GitHubIcon from "@material-ui/icons/GitHub"

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
            <Grid item xs={9}>
              <Typography variant="h5" align="left">
                Blog - linnefromice
              </Typography>
            </Grid>
            <Grid item align="center" xs={1}>
              <AccountCircleIcon fontSize="large" />
            </Grid>
            <Grid item align="center" xs={1}>
              <GitHubIcon fontSize="large" />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Content />
    </div>
  )
}

export default MyPage
