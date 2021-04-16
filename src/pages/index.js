import * as React from "react"
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Link } from "gatsby"
import logoBg from '../images/login_bg.jpg'
import '../styles/index.scss'
// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  minHeight: "99vh"
}
const linkStyles = {
  color: "#fff",
}
const imgStyles = {
  position: 'absolute',
  minHeight: "100vh"
}
// data

// markup
const IndexPage = () => {
  return (
    <Box overflow="hidden" position="relative" display="flex" p={3} py={0} flexDirection="column" justifyContent="flex-end" alignItems="center" style={pageStyles}>
      <img alt="background" style={imgStyles} src={logoBg}/>
      <Box 
        position="relative" 
        borderRadius={15} 
        px={3}
        py={5}
        mb={5} 
        boxSizing="border-box" 
        textAlign="center" 
        width="100%" 
        bgcolor="rgb(255 255 255 / 80%)">
        <Box mb={1} fontSize="h6.fontSize">
          Se parte de
        </Box>
        <Box fontWeight="bold" fontSize="h5.fontSize">
            BCP TOTAL
        </Box>
        <Box width="100%" mb={5} mt={5}>
          <TextField fullWidth id="outlined-basic" label="Ingresa tu DNI" variant="outlined"  />
        </Box>
        <Button size="large" variant="contained" color="primary">
          <Link style={linkStyles} to="/category" >Ingresar</Link>
        </Button>
      </Box>
    </Box>
  )
}

export default IndexPage
