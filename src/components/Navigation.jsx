import { AppBar, Box, CssBaseline, Divider, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Button, Drawer } from "@mui/material";
import React, { useEffect, useState } from "react";
import ListIcon from '@mui/icons-material/List';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const drawerWidth = 240;
const navItems = [['Skills', 'skills'], ['Experiences', 'experiences'], ['Contact', 'contact']];

const Navigation = ({parentToChild, modeChange}) => {

    const {mode} = parentToChild;

    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };
  
    useEffect(() => {
      const handleScroll = () => {
        const navbar = document.getElementById("navigation");
        if (navbar) {
          const scrolled = window.scrollY > navbar.clientHeight;
          setScrolled(scrolled);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const scrollToSection = (section) => {
      const expertiseElement = document.getElementById(section);
      if (expertiseElement) {
        expertiseElement.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    const drawer = (
      <Box className="navigation-bar-responsive" onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <p className="mobile-menu-top"><ListIcon/>Menu</p>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item[0]} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }} onClick={() => scrollToSection(item[1])}>
                <ListItemText primary={item[0]} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" id="navigation" className={`navbar-fixed-top${scrolled ? ' scrolled' : ''}`}>
        <Toolbar className='navigation-bar'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {mode === 'dark' ? (
            <LightModeIcon onClick={() => modeChange()}/>
          ) : (
            <DarkModeIcon onClick={() => modeChange()}/>
          )}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item[0]} onClick={() => scrollToSection(item[1])} sx={{ color: '#fff' }}>
                {item[0]}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  )
}

export default Navigation