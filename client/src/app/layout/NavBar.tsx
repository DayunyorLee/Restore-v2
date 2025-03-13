import { DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

type props = {
    darkMode : boolean
    toggleDarkMode : () => void
}


export default function NavBar({darkMode, toggleDarkMode}: props) {
    
  return (
    <AppBar position="fixed">
<Toolbar>
    <Typography variant="h6">RE-STORE</Typography>
    <IconButton onClick={toggleDarkMode}>
        {darkMode ? <DarkMode/> : <LightMode sx={{color: "yellow"}}/>}
    </IconButton>
</Toolbar>
    </AppBar>
  )
}