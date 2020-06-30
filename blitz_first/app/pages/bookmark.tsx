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
  {
    imageUrl: "https://picsum.photos/200",
    title: "Build an isomorphic application with Nuxt.js and Node",
    date: 20200701,
    tag: "Nuxt.js",
    url: "https://blog.logrocket.com/build-an-isomorphic-application-with-nuxt-js-and-node/",
    rating: 2,
  },
  {
    imageUrl: "https://picsum.photos/200",
    title: "Creating Dynamic Routes in a Nuxt Application",
    date: 20200701,
    tag: "Nuxt.js",
    url: "https://css-tricks.com/creating-dynamic-routes-in-a-nuxt-application/",
    rating: 2,
  },
  {
    imageUrl: "https://picsum.photos/200",
    title: "How to set up and code Nuxt.js apps fully in TypeScript",
    date: 20200701,
    tag: "Nuxt.js",
    url: "https://blog.logrocket.com/how-to-set-up-and-code-nuxt-js-apps-fully-in-typescript/",
    rating: 3,
  },
  {
    imageUrl: "https://picsum.photos/200",
    title: "Getting Started with Nuxt.js",
    date: 20200701,
    tag: "Nuxt.js",
    url: "https://www.telerik.com/blogs/getting-started-with-nuxtjs",
    rating: 3,
  },
  {
    imageUrl: "https://picsum.photos/200",
    title: "7 Frontend Architecture Lessons From Nuxt.js",
    date: 20200701,
    tag: "Nuxt.js",
    url: "https://zendev.com/2018/09/17/frontend-architecture-lessons-from-nuxt-js.html",
    rating: 3,
  },
  {
    imageUrl: "https://picsum.photos/200",
    title: "How to Use Flat-File Data in a Static Nuxt App",
    date: 20200701,
    tag: "Nuxt.js",
    url: "https://www.freecodecamp.org/news/how-to-use-flat-file-data-in-a-static-nuxt-app/",
    rating: 1,
  },
  {
    imageUrl: "https://picsum.photos/200",
    title: "Deep dive into Gatsby — Building a static blog using Gatsby, React and GraphQL",
    date: 20200701,
    tag: "Gatsby.js",
    url:
      "https://levelup.gitconnected.com/deep-dive-into-gatsby-building-a-static-blog-using-gatsby-react-and-graphql-f8cb8d8fd036",
    rating: 2,
  },
]

const BookmarkCard = ({ data }) => (
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
)

const Content = () => (
  <Grid container justify="flex-start" spacing={3}>
    {articleLists.map((data, index) => (
      <Grid item key={index} xs={3}>
        <BookmarkCard data={data} />
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
