import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";


const midLInks = [
  {title: 'catalog', path: '/catalog'},
  {title: 'about', path: '/about'},
  {title: 'contact', path: '/contact'}
]

const rightLInks = [
  {title: 'login', path: '/login'},
  {title: 'register', path: '/register'}
  
]

const navStyles = 
  { color: 'inherit', 
    Typography: 'h6', 
    textDecoration: 'none', 
    '&:hover':{
      color:'grey.500'
    },
    '&.active': {
      color: '#baecf9'
    }
  }


type props = {
    darkMode : boolean
    toggleDarkMode : () => void
}



export default function NavBar({darkMode, toggleDarkMode}: props) {
    
  return (
    <AppBar position="fixed">
<Toolbar sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
  <Box display={"flex"} alignItems={"center"}>
  <Typography component={NavLink} to='/' sx={navStyles} variant="h6">RE-STORE</Typography>
    <IconButton onClick={toggleDarkMode}>
        {darkMode ? <DarkMode/> : <LightMode sx={{color: "yellow"}}/>}
    </IconButton>
  </Box>
  <Box display={"flex"}>
  <List sx={{display:'flex'}}>
    {midLInks.map(({title, path}) => (
      <ListItem
        component={NavLink}
        to={path}
        key={path}
        sx={navStyles}
      >
        {title.toUpperCase()}
      </ListItem>
    ))}
      
    </List>
  </Box>
  <Box display={"flex"} alignItems={"center"}>
  <IconButton
size="large" sx={{color: 'inherit'}}
>
<Badge badgeContent='4' color="secondary">
<ShoppingCart/>
</Badge>
</IconButton>

    <List sx={{display:'flex'}}>
    {rightLInks.map(({title, path}) => (
      <ListItem
        component={NavLink}
        to={path}
        key={path}
        sx={navStyles}
      >
        {title.toUpperCase()}
      </ListItem>
    ))}
      
    </List>
  </Box>

</Toolbar>
    </AppBar>
  )
}