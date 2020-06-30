import BaseContainer from "app/layouts/base_container"
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  IconButton,
  Chip,
} from "@material-ui/core"
import LinkIcon from "@material-ui/icons/Link"

const articleLists = [
  {
    imageUrl: "https://picsum.photos/200",
    title: "ProductHunt - Blitz.js",
    date: 20200701,
    tag: "Blitz.js",
    url: "https://www.producthunt.com/posts/blitz-js",
    rating: 1,
  },
  {
    imageUrl: "https://picsum.photos/200",
    title: "Building a fullstack React application with Blitz.js",
    date: 20200701,
    tag: "Blitz.js",
    url: "https://blog.logrocket.com/building-a-fullstack-react-application-with-blitz-js/",
    rating: 3,
  },
  {
    imageUrl: "https://picsum.photos/200",
    title: "Github - Blitz.js",
    date: 20200701,
    tag: "Blitz.js",
    url: "https://github.com/blitz-js/blitz",
    rating: 2,
  },
  {
    imageUrl: "https://picsum.photos/200",
    title: "Introduction to Blitz.js",
    date: 20200701,
    tag: "Blitz.js",
    url: "https://blog.logrocket.com/introduction-to-blitz-js/",
    rating: 2,
  },
]

const Content = () => (
  <Grid container justify="flex-start" spacing={3}>
    {articleLists.map((data, index) => (
      <Grid item key={index} xs={3}>
        <Card>
          <CardActionArea>
            <CardMedia src={data.imageUrl} />
            <CardContent>
              <Typography>{data.title}</Typography>
              <Typography>{data.date}</Typography>
            </CardContent>
            <CardActions>
              <Chip label={data.tag} color="primary" />
              <IconButton onClick={() => window.open(data.url)}>
                <LinkIcon />
              </IconButton>
            </CardActions>
          </CardActionArea>
        </Card>
      </Grid>
    ))}
  </Grid>
)

const Bookmark = () => (
  <BaseContainer>
    <Content />
  </BaseContainer>
)

export default Bookmark
