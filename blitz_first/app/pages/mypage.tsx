import BaseContainer from "app/layouts/base_container"
import { makeStyles } from "@material-ui/core/styles"
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
  },
  progress: {
    position: "absolute",
    zIndex: -1,
  },
  skill: {
    position: "absolute",
  },
}))

const MyPage = () => {
  const classes = useStyles()

  return (
    <BaseContainer>
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <div>
            <CircularProgress className={classes.progress} size={200} variant="static" value={75} />
            <CodeIcon className={classes.skill} />
          </div>
          <div>
            <CircularProgress className={classes.progress} size={200} variant="static" value={40} />
            <GitHubIcon className={classes.skill} />
          </div>
        </div>
      </div>
    </BaseContainer>
  )
}

export default MyPage
