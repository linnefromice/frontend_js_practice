import BaseContainer from "app/layouts/base_container"
import { makeStyles } from "@material-ui/core/styles"
import CircularProgress from "@material-ui/core/CircularProgress"
import CodeIcon from "@material-ui/icons/Code"
import { Typography } from "@material-ui/core"

/*
const useSkillStyles = makeStyles((theme) => ({
  progress: {
    position: "absolute",
    height: "100%",
    width: "100%",
    zIndex: -1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  skill: {
    position: "absolute",
    top: "25%",
    right: "25%",
    height: "50%",
    width: "50%",
    zIndex: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}))

const SkillCircle = ({value, skillName, children}) => {
  const classes = useSkillStyles()
  return (
    <React.Component>
      <div className={classes.progress}>
        <CircularProgress size={200} variant="static" value={value} />
      </div>
      <div className={classes.skill}>
        {children}
        <span>{skillName}</span>
      </div>
    </React.Component>  
  )
};
*/

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
    height: "50vh",
    width: "50vw",
  },
  progress: {
    position: "absolute",
    height: "100%",
    width: "100%",
    zIndex: -1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  skill: {
    position: "absolute",
    top: "25%",
    right: "25%",
    height: "50%",
    width: "50%",
    zIndex: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  mainContext: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}))

const MyPage = () => {
  const classes = useStyles()

  return (
    <BaseContainer>
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <div className={classes.progress}>
            <CircularProgress size={200} variant="static" value={75} />
          </div>
          <div className={classes.skill}>
            <CodeIcon fontSize="large" />
            <span>Frontend</span>
          </div>
        </div>
        <div className={classes.wrapper}>
          <div className={classes.mainContext}>
            <Typography>Hello, World.</Typography>
            <Typography>Hello, Design.</Typography>
          </div>
        </div>
        <div className={classes.wrapper}>
          <div className={classes.progress}>
            <CircularProgress size={200} variant="static" value={75} />
          </div>
          <div className={classes.skill}>
            <CodeIcon fontSize="large" />
            <span>Backend</span>
          </div>
        </div>
      </div>
    </BaseContainer>
  )
}

export default MyPage
