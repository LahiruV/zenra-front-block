import React from 'react';;
import './home-component.css';
import HomeCardGrid from './home-card-grid-component/home-card-grid-component';
import HomeChartGrid from './home-card-chart-component/home-card-chart-component';
import { Divider } from '@mui/joy';
import { useSelector } from 'react-redux';
import { RootState } from '@zenra/store';

export interface HomeComponentProps {
    isAuthenticated?: boolean
}

const HomeComponent: React.FC<HomeComponentProps> = () => {

    const { theme } = useSelector((state: RootState) => state.theme);

    return (
        <div>
            <HomeCardGrid />
            <div className={`margin-top-20`} />
            <HomeChartGrid />
        </div>);
};

export default HomeComponent;
