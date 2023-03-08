import { AppBar, Toolbar,styled } from '@mui/material';
import {NavLink} from 'react-router-dom';

const Header=styled(AppBar)`
background:#111111;
`
const Tabs=styled('p')`
font-size:20px;
margin-right:20px;
color:inherit;
text-decoration:none;
`

const Navbar = () => {
  return (
    <Header position="static">
        <Toolbar>
            <Tabs to="">Code for interview</Tabs>
            <Tabs to="">All User</Tabs>
            <Tabs to="">Add User</Tabs>
        </Toolbar>
    </Header>
    

  )
}

export default Navbar
