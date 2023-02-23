import {React, useState} from 'react'
import {Link} from 'react-router-dom'
import { tokens } from '../../theme'
import {Menu, MenuItem, Sidebar, ProSidebar} from 'react-pro-sidebar'
import {Box, IconButton, Typography, useTheme} from '@mui/material'
import {HomeOutlined, PeopleOutlined, ContactsOutlined, ReceiptOutlined, 
  PersonOutline, CalendarTodayOutlined, HelpOutlined, TimelineOutlined, 
  MapOutlined,MenuOutlined, BarChartOutlined, PieChartOutlined } from '@mui/icons-material'
import user from '../../assets/user.jpg'


const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100], listStyle: 'none', 
        display:'flex', flexDirection:'row', cursor:"pointer"
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const LeftSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      width="400px"
      
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
          height:"100vh"
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
          marginRight: '10px'
        },
        "& .pro-inner-item": {
          padding: "5px 55px 5px 0px !important",
          display: 'flex',
          alignItems: 'center'
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed} width="100%">
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlined/> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
              listStyle: 'none', 
              
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]} mr="5rem">
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlined/>
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={user}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Ed Roh
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Link to="/">
              <Item
                display="flex"
                title="Dashboard"
                
                icon={<HomeOutlined/>}
                selected={selected}
                setSelected={setSelected}
              />
            </Link>

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 0px" }}
            >
              Data
            </Typography>

            <Link to="/team">
              <Item
                title="Manage Team"
                icon={<PeopleOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
            </Link>

            <Link  to="contacts">
              <Item
                title="Contacts Information"
                icon={<ContactsOutlined/>}
                selected={selected}
                setSelected={setSelected}
              />
            </Link>

            <Link to="/invoices">
              <Item
                title="Invoices Balances"                
                icon={<ReceiptOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
            </Link>

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 0px" }}
            >
              Pages
            </Typography>

            <Link to="/form">
              <Item
                title="Profile Form"                
                icon={<PersonOutline />}
                selected={selected}
                setSelected={setSelected}
              />
            </Link>

            <Link  to="/calendar">
              <Item
                title="Calendar"               
                icon={<CalendarTodayOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
            </Link>

            <Link to="/faq">
              <Item
                title="FAQ Page"               
                icon={<HelpOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
            </Link>

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 0px" }}
            >
              Charts
            </Typography>

            <Link to="/bar">
              <Item
                title="Bar Chart"             
                icon={<BarChartOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
            </Link>

            <Link to="/pie">
              <Item
                title="Pie Chart"               
                icon={<PieChartOutlined/>}
                selected={selected}
                setSelected={setSelected}
              />
            </Link>

            <Link to="/line">
              <Item
                title="Line Chart"               
                icon={<TimelineOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
            </Link>

            <Link to="/geography">
              <Item
                title="Geography Chart"
                icon={<MapOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
            </Link>

          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default LeftSidebar