import React, { useState } from 'react';
import { AccountDemoSignedOut, AlertDialogModal, CustomizedSwitches } from '@zenra/widgets';
import { useSelector } from 'react-redux';
import { RootState, toggleTheme } from '@zenra/store';
import PeopleIcon from '@mui/icons-material/People';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './header-component.css';
import { reset_redux } from '@zenra/functions';
import { useInitialService } from '@zenra/services';

export interface HeaderProps {
    isAuthenticated: boolean
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated }) => {
    const { themeButton, theme } = useSelector((state: RootState) => state.theme);
    const { loggedUser } = useSelector((state: RootState) => state.user);
    const [open, setOpen] = useState(false);

    const initialService = useInitialService()

    const handleSignOut = () => {
        reset_redux();
        setOpen(false);
        window.location.href = '/';
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div>
            <header className={`main-header  ${theme}-background ${theme}-main-header`}>
                <CustomizedSwitches id='mode-switch' isMaterialUISwitch={true} value={themeButton} setState={() => initialService.dispatch(toggleTheme())} title={themeButton ? 'Dark Mode' : 'Light Mode'} />
                {isAuthenticated && (
                    <div className='flex align-items-center'>
                        <NotificationsIcon className={`margin-right-20 ${theme}-icon`} />
                        <PeopleIcon className={`margin-right-20 ${theme}-icon`} />
                        <div className="margin-right-20">
                            <span>🇱🇰</span>
                        </div>
                        <div className="cursor" >
                            <AccountDemoSignedOut onClick={handleOpen} theme={theme} name={loggedUser.name} email={loggedUser.email} image={`data:image/png;base64,${loggedUser.image}`} />
                        </div>
                    </div>
                )}
            </header>
            <AlertDialogModal theme={theme} open={open} setOpen={setOpen} labelTitle='Logout' colorYes='danger' labelContent='Are you sure you want to logout?' onClickY={handleSignOut} onClickN={handleClose} />
        </div>);
};

export default Header;
