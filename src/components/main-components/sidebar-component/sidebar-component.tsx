import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar-component.css';
import { company_name } from '@zenra/configs';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useSelector } from 'react-redux';
import { RootState, setRouteTitle } from '@zenra/store';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ListItemButton } from '@mui/material';
import { ListItemContent, ListItemDecorator } from '@mui/joy';
import { useInitialService } from '@zenra/services';

export interface SidebarProps {
    isAuthenticated: boolean
}

const Sidebar: React.FC<SidebarProps> = ({ isAuthenticated }) => {

    const initialService = useInitialService()

    const navItems = [
        { key: 'home', label: 'Home', path: '/home', icon: <HomeIcon /> },
        { key: 'about', label: 'About', path: '/about', icon: <InfoIcon /> },
        { key: 'newhome', label: 'New Home', path: '/new-home', icon: <InfoIcon /> },
        ...(isAuthenticated ? [
            {
                key: 'dashboard', label: 'Dashboard', path: '/dashboard', icon: <DashboardIcon />
            }
        ] : [])
    ];

    const [selected, setSelected] = useState<string>('home');
    const theme = useSelector((state: RootState) => state.theme.theme);

    const handleSelect = (item: { key: string, label: string, path: string, icon: JSX.Element }) => {
        initialService.dispatch(setRouteTitle(item.label));
        setSelected(item.key);
    }

    return (
        <div className={`side-bar-layout padding-20 height-auto flex flex-direction-column justify-content-start ${theme}-background`}>
            <h2 className='padding-10 text-align-center margin-bottom-20 side-bar-header font-18'>{company_name}</h2>
            <nav>
                <List>
                    {navItems.map((item) => (
                        <ListItem key={item.key}>
                            <ListItemButton
                                onClick={() => handleSelect(item)}
                                className={`border-radius-5 ${selected === item.key ? `${theme}-selected-sidebar` : ''} ${theme}-sidebar-hover`}
                                sx={{
                                    borderRadius: '5px',
                                    ":hover": {
                                        backgroundColor: theme === 'dark' ? '#635bff9d' : '#4949e054'
                                    }
                                }}
                            >
                                <ListItemDecorator>
                                    {item.icon}
                                </ListItemDecorator>
                                <ListItemContent>
                                    <Link to={item.path} className={`${theme}-font font-14`}>
                                        {item.label}
                                    </Link>
                                </ListItemContent>
                            </ListItemButton>
                        </ListItem>
                    ))
                    }
                </List >
            </nav >

            {/* <nav className='log-out-button'>
                {isAuthenticated ? (
                    <li onClick={() => { logOut(); handleSelect('logout'); }} className={`flex justify-content-center align-items-center border-radius-5 padding-10 ${selected} === 'logout' ? 'selected' : ''`}>
                        <Link to="">
                            <LogoutIcon />
                            Logout
                        </Link>
                    </li>
                ) : (
                    <li
                        className={selected === 'login' ? 'selected' : ''}
                        onClick={() => handleSelect('login')}
                    >
                        <Link to="/login">
                            <LoginIcon />
                            Login
                        </Link>
                    </li>
                )}
            </nav> */}
        </div >
    );
};

export default Sidebar;
