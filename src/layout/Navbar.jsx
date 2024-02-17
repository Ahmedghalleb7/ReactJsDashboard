import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBBtn,
  MDBInputGroup
} from 'mdb-react-ui-kit';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from "@mui/material/colors";


function Navbar({ setToggle, toggle }) {
const productStore =useSelector

  return (
    <div
      className={`position-fixed bg-dark ${
        toggle === true ? "justify-content-between" : "justify-content-end"
      }  d-flex`}
      style={{ width: "100%", height: 70 , zIndex:2 }}
    >
      {toggle === true && (
        <button className="btn btn-light" onClick={() => setToggle(false)}>{"->"}</button>
      )}
      <Search className="p-2 m-2 d-flex aligne-items-center">
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
    </div>
  
  );

}

const Search = styled('div')(({ theme }) => ({
  display:"flex",
  alignItems:"center",
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  '&:hover': {
    backgroundColor: "white",
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default Navbar;

