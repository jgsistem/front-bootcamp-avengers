import * as React from "react"
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Link } from "gatsby"
import '../styles/category.scss'
import logoHeader from '../images/logo-header.jpg'
import JSONData from '../data/allCategories.json'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CardTravelIcon from '@material-ui/icons/CardTravel';
// styles

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  minHeight: "95vh"
}

//functions 

const handleSelect = (i) => {
    console.log(i)
}

// data

const category = [
    {
        description: "Productos",
        checked: false
    },
    {
        description: "Gastronomía",
        checked: false
    },
    {
        description: "Belleza",
        checked: true
    },
    {
        description: "Bienestar y salud",
        checked: false
    },
    {
        description: "Entretenimiento",
        checked: false
    },
    {
        description: "Viajes y turismo",
        checked: true
    },
    {
        description: "Servicios",
        checked: true
    }
]

// markup
const CategoryPage = () => {
  return (
    <Box className="category-container" display="flex" p={3} flexDirection="column" justifyContent="center" alignItems="center" style={pageStyles}>
        <Box width="100%" display="flex" justifyContent="center" bgcolor="#004193" position="absolute" top={0} >
            <img height={150} src={logoHeader} />
        </Box>
        <Box pt={18} width="100%">
            <Typography>
                <Box textAlign="left"  fontSize="h5.fontSize">
                    Bienvenido Jhon Doe,
                </Box>
                <Box fontSize="body2.fontSize" >
                    Selecciona las categorias que prefieras
                </Box>
            </Typography>
            <Box mt={3}  >
                {
                    JSONData.categories.map((item, index) => (
                        <Box key={index} my={2} position="relative" >
                            <Card className="category-container-card-ctn" >
                                <CardActionArea className="category-container-card" onClick={ () => (handleSelect(index)) } >
                                    
                                    <Typography variant="overline">
                                        <Box px={2} py={3} textAlign="left" className="category-container-text" > <CardTravelIcon /> {item.description}</Box>
                                    </Typography>
                                    <input className="category-container-input" id={item.description} name={item.description} type="checkbox" />
                                    <label className="category-container-label" htmlFor={item.description} >
                                        <ChevronRightIcon /></label>
                                </CardActionArea>
                            </Card>
                        </Box>
                    ))
                }
            </Box>
            <Box  display="flex" justifyContent="center" mt={5}  >
                <Button size="large"  variant="contained" color="primary">
                    <Link  to="/preferences" >Continuar</Link>
                </Button>
            </Box>
        </Box>
    </Box>
  )
}

export default CategoryPage
