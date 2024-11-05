import React from 'react';
import { Header, Sidebar } from '@zenra/components';
import './main-base-layout.css';
import { useSelector } from 'react-redux';
import { RootState } from '@zenra/store';

interface LayoutProps {
    children: React.ReactNode;
    showSidebar?: boolean;
}

const MainBaseLayout: React.FC<LayoutProps> = ({ children, showSidebar = true }) => {
    const theme = useSelector((state: RootState) => state.theme.theme);
    const { routeTitle } = useSelector((state: RootState) => state.common);

    return (
        <div id='main-base-layout' className='main-base-layout flex'>
            <div className={`${theme}-background ${theme}-border-right-sidebar`}>
                {showSidebar && <Sidebar isAuthenticated={true} />}
            </div>
            <div className='flex-1 flex flex-direction-column'>
                {showSidebar && <Header isAuthenticated={true} />}
                <div className={`main-header-routes bolder ${theme}-content-background ${theme}-main-header font-16`}>
                    {routeTitle}
                </div>
                <div id='main-base-layout-children' className={`flex-1 padding-10 ${theme}-content-background main-base-layout-children`}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MainBaseLayout;