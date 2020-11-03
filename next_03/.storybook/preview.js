import { addDecorator } from '@storybook/react'
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { defaultTheme } from '../lib/themes'

addDecorator(storyFn => (
  <ThemeProvider theme={defaultTheme}>
    <CssBaseline />
    {storyFn()}
  </ThemeProvider>
))
