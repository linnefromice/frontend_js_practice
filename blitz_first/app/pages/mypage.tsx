import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import { AppBar, Toolbar, Typography } from "@material-ui/core"

const theme = createMuiTheme()
const MyPage = () => (
  <ThemeProvider theme={theme}>
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h4">Blog - linnefromice</Typography>
      </Toolbar>
    </AppBar>
    <div className="container">
      <main>
        <p>This is my page.</p>
      </main>
    </div>
  </ThemeProvider>
)

export default MyPage
