// theme.ts

// 1. import `extendTheme` function
import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({
  config: config,
  styles: {
    global: (props) => ({
      // styles for the `body`
      body: {
        bg: mode('white', 'gray.800')(props),
      },
      // styles for the `a`
      // a: {
      //   color: 'teal.500',
      //   _hover: {
      //     textDecoration: 'underline',
      //   },
      // },
    }),
  },
})

export default theme
