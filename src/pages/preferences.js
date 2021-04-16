import * as React from "react"
import SwipeableTextMobileStepper from "../components/carrousel/index"
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import '../styles/preferences.scss'
import logoHeader from '../images/logo-header.jpg'
import { Link } from "gatsby"
import Button from '@material-ui/core/Button';

const PreferencesPage = () => {
  return (
    <Box className="container-preferences" display="flex" flexDirection="column" justifyContent="center" >
        <Box width="100%" display="flex" justifyContent="center" bgcolor="#004193" position="absolute" top={0} >
            <img  height={150} src={logoHeader} />
        </Box>
        <Typography gutterBottom>
            <Box px={3} mt={10} fontSize="h6.fontSize" >
                Actividades que te podrian 
            </Box>
            <Box  px={3} fontSize="h6.fontSize" mb={1} >interesar: </Box>
        </Typography>
        <SwipeableTextMobileStepper></SwipeableTextMobileStepper>
        <Box  display="flex" justifyContent="center" mt={5}  >
            <Button size="large" variant="contained" color="primary">
                <Link  to="/category" > Categorias</Link>
            </Button>
        </Box>
    </Box>
  )
}

export default PreferencesPage
