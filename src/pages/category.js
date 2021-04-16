import * as React from "react"
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Link } from "gatsby"
import '../styles/category.scss'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
// styles

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  minHeight: "95vh"
}

//functions 

const handleSelect = (i) => {
    category[i].checked = true
}

// data

const category = [
    {
        description: "Lorem ipsum dolor",
        checked: false
    },
    {
        description: "Consectetur adipiscing elit",
        checked: false
    },
    {
        description: "Quam id leo in vitae",
        checked: true
    },
    {
        description: "Lorem ipsum dolo2r",
        checked: false
    },
    {
        description: "Consectetur adipiscing elit2",
        checked: false
    },
    {
        description: "Quam id leo in vitae2",
        checked: true
    }
]

// markup
const CategoryPage = () => {
  return (
    <Box display="flex" p={3} flexDirection="column" justifyContent="center" alignItems="center" style={pageStyles}>
        <Box width="100%">
            <Typography>
                <Box textAlign="left"  fontSize="h5.fontSize">
                    Welcome Jhon Doe,
                </Box>
                <Box fontSize="body2.fontSize" >
                    Selecciona las categorias que prefieras
                </Box>
            </Typography>
            <Box mt={3} >
                {
                    category.map((item, index) => (
                        <Box key={index} my={2} position="relative" >
                            <Card>
                                <CardActionArea onClick={ () => (handleSelect(index)) } >
                                    <Typography variant="overline">
                                        <Box px={2} py={3} textAlign="left" >{item.description}</Box>
                                    </Typography>
                                    <input className="category-container-input" id={item.description} name={item.description} type="checkbox" />
                                    <label className="category-container-label" for={item.description} >
                                        <CheckCircleIcon /></label>
                                </CardActionArea>
                            </Card>
                        </Box>
                    ))
                }
            </Box>
            <Box  display="flex" justifyContent="center" mt={5}  >
                <Button  variant="contained" color="primary">
                    <Link  to="/preferences" >Continuar</Link>
                </Button>
            </Box>
        </Box>
    </Box>
  )
}

export default CategoryPage
