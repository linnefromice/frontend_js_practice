import BaseContainer from "app/layouts/base_container"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import CircularProgress from "@material-ui/core/CircularProgress"
import CodeIcon from "@material-ui/icons/Code"
import GitHubIcon from "@material-ui/icons/GitHub"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
    height: "50vh",
    width: "50vw",
  },
  progress: {
    position: "absolute",
    zIndex: -1,
    //    top: "50%",
    //    left: "50%",
  },
  skill: {
    position: "absolute",
    fontSize: 50,
    //    top: "50%",
    //    left: "50%",
    //    transform: "translate(-50%, -50%)",
    //    height: "50vh",
    //    width: "50vw",
  },
}))

const MyPage = () => {
  const classes = useStyles()

  return (
    <BaseContainer>
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <div className={classes.progress}>
            <CircularProgress size={400} variant="static" value={75} />
          </div>
          <div className={classes.skill}>
            <CodeIcon />
          </div>
        </div>
      </div>
    </BaseContainer>
  )
}

/*
        <Grid container>
          <Grid item xs={4} className={classes.wrapper}>
            <CircularProgress className={classes.progress} size={200} variant="static" value={75} />
            <CodeIcon className={classes.skill} />
          </Grid>
          <Grid item xs={4} className={classes.wrapper}>
            <CircularProgress className={classes.progress} size={200} variant="static" value={40} />
            <GitHubIcon className={classes.skill} />
          </Grid>
        </Grid>

*/

export default MyPage
