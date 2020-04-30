import React from 'react'
import {Link,BrowserRouter,Route,Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {startLogout} from './actions/userAction'

//material-ui
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

//users imports
import Home from './components/Users/Home'
import Register from './components/Users/Register'
import Login from './components/Users/Login'
import Account from './components/Users/Account'

//customers imports
import CustomersList from './components/Customers/CustomersList'
import CustomerShow from './components/Customers/CustomerShow'
import CustomerNew from './components/Customers/CustomerNew'
import CustomerEdit from './components/Customers/CustomerEdit'

//departments imports
import DepartmentList from './components/Departments/DepartmentList'
import DepartmentShow from './components/Departments/DepartmentShow'
import DepartmentNew from './components/Departments/DepartmentNew'
import DepartmentEdit from './components/Departments/DepartmentEdit'

//employee imports
import EmployeesList from './components/Employees/EmployeesList'
import EmployeeShow from './components/Employees/EmployeeShow'
import EmployeeNew from './components/Employees/EmployeeNew'
import EmployeeEdit from './components/Employees/EmployeeEdit'

//tickets imports
import TicketLists from './components/Tickets/TicketsList'
import AddTicket from './components/Tickets/TicketsNew'
import EditTicket from './components/Tickets/TicketsEdit'
import ShowTicket from './components/Tickets/TicketShow'

const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }));
  

function App(props){
    console.log('App Component Props',props)

    //material-ui
    const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}><Link to="/users/register">REGISTER</Link></MenuItem>
      <MenuItem onClick={handleMenuClose}><Link to="/users/login">LOGIN</Link></MenuItem>
      <MenuItem onClick={handleMenuClose}><Link to="/">HOME</Link></MenuItem>
      <MenuItem onClick={handleMenuClose}><Link to="/users/account">ACCOUNT</Link></MenuItem>
      <MenuItem onClick={handleMenuClose}><Link to="#" onClick={()=>{
                    handleLogout()
                }}>LOGOUT</Link></MenuItem>

         
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
     
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
       
      </MenuItem>
    </Menu>
  );

    const handleLogout=()=>{
        const status = window.confirm('are you sure to logout')
        if(status){
            props.dispatch(startLogout())
        }
    }
    
    return(
        <BrowserRouter>
        <div>
        <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            TICKET MASTER WEBSITE
          </Typography>

          <div>
            {Object.keys(props.user).length!==0 ? (
            <div>
          <Typography variant="h6" noWrap>
          <Link style={{color:"white",padding:"15px"}} to="/customers">CUSTOMERS</Link>
          <Link style={{color:"white",padding:"15px"}} to="/departments">DEPARTMENTS</Link>
          <Link style={{color:"white",padding:"15px"}} to="/employees">EMPLOYEES</Link>
          <Link style={{color:"white",padding:"15px"}} to="/tickets">TICKETS</Link>
          </Typography>
          </div>):(
              <div>
                  Loading....................
              </div>
          )
            }
         
           
      
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
             
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
            
       {
        Object.keys(props.user).length==0 ? (
            <div>
                
               {/* <Link to="/users/register">Register</Link>
               <Link to="/users/login">Login</Link> */}
            </div>
        ):(
            <div>
                
               
                {/* <Link to="/customers">Customers</Link>
                <Link to="/departments">Departments</Link>
                <Link to="/employees">Employees</Link>
                <Link to="/tickets">Tickets</Link>
                <Link to="#" onClick={()=>{
                    handleLogout()
                }}>Logout</Link> */}
            </div>
        )
     }
</div>

<Switch>
 
{/* user routes */}
<Route path="/" component={Home} exact={true} />
<Route path="/users/register" component={Register} exact={true}/>
<Route path="/users/login" component={Login}/>
<Route path="/users/account" component={Account}/>

{/* Customer routes */}
<Route path="/customers" component={CustomersList} exact={true} />
<Route path="/customers/new" component={CustomerNew} />
<Route path="/customers/edit/:id" component={CustomerEdit} />
<Route path="/customers/:id" component={CustomerShow} />

{/* Departments routes */}
<Route path="/departments" component={DepartmentList} exact={true} />
<Route path="/departments/new" component={DepartmentNew} />
<Route path="/departments/edit/:id" component={DepartmentEdit} />
<Route path="/departments/:id" component={DepartmentShow} />

{/* Employees routes */}
<Route path="/employees" component={EmployeesList} exact={true} />
<Route path="/employees/new" component={EmployeeNew} />
<Route path="/employees/edit/:id" component={EmployeeEdit} />
<Route path="/employees/:id" component={EmployeeShow} />

{/* Tickets routes */}
<Route path="/tickets" component={TicketLists} exact={true} />
<Route path="/ticket/new" component={AddTicket} />
<Route path="/tickets/edit/:id" component={EditTicket} />
<Route path="/tickets/:id" component={ShowTicket} />

</Switch>         
</BrowserRouter>
)   
}

const mapStateToProps=(state)=>{
    return {
         user : state.user
    }
}

export default connect(mapStateToProps)(App)