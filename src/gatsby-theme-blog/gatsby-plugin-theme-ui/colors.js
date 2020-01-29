import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"

// Change theme colors
const darkRed = `#C62828`
const lightRed = `#EF5350`
const blueGray = `#282c35`

export default merge(defaultThemeColors, {
   text: blueGray,
   primary: darkRed,
   heading: lightRed,
   modes: {
     dark: {
       background: blueGray,
       primary: lightRed,
       highlight: lightRed,
     },
   },
})
