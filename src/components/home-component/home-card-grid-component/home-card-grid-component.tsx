import Grid from '@mui/joy/Grid';
import { useSelector } from 'react-redux';
import { RootState } from '@zenra/store';
import Typography from '@mui/joy/Typography';
import { Divider } from '@mui/joy';
import { BasicChip, CardLayers3d } from '@zenra/widgets';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GroupIcon from '@mui/icons-material/Group';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import './home-card-grid-component.css';

const HomeCardGrid: React.FC = () => {
    const { theme } = useSelector((state: RootState) => state.theme);

    // Example data
    const cardData = [
        { title: "September Income", icon: <AttachMoneyIcon style={{ fontSize: '70px', color: '#1976D2' }} />, content: "12,000", color: '#1976D2', suffix: 'LKR' },
        { title: "October Income", icon: <AttachMoneyIcon style={{ fontSize: '70px', color: '#C62828' }} />, content: "12,000", color: '#C62828', suffix: 'LKR' },
        { title: "2024 Income", icon: <AttachMoneyIcon style={{ fontSize: '70px', color: '#F9A825' }} />, content: "12,000", color: '#F9A825', suffix: 'LKR' },
        { title: "2023 Income", icon: <AttachMoneyIcon style={{ fontSize: '70px', color: '#2E7D32' }} />, content: "512,000", color: '#2E7D32', suffix: 'LKR' },
        { title: "Active Students", icon: <GroupIcon style={{ fontSize: '70px', color: '#EF6C00' }} />, content: "12000", color: '#EF6C00' },
        { title: "Payed Students", icon: <GroupAddIcon style={{ fontSize: '70px', color: '#00838F' }} />, content: "12000", color: '#00838F' },
        { title: "InActive Students", icon: <PersonOffIcon style={{ fontSize: '70px', color: '#455A64' }} />, content: "12000", color: '#455A64' },
    ];

    return (
        <Grid
            container
            spacing={{ xs: 2, md: 0.5 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{ flexGrow: 1 }}
        >
            {cardData.map((data, index) => (
                <div key={index} className='padding-5'>
                    <CardLayers3d
                        className={`home-card-width height-80 ${theme}-background ${theme}-border`}
                        content={
                            <div className="flex align-items-center justify-content-between">
                                <div className="padding-10">
                                    {data.icon}
                                </div>
                                <div className="card-title text-align-center">
                                    <Typography
                                        className={`${theme}-card-font bolder font-14 padding-bottom-5`}
                                    >
                                        {data.title.toLocaleUpperCase()}
                                    </Typography>
                                    <Divider className={`width-100 margin-auto ${theme}-border-background`} />

                                    <div className={`padding-top-5`}>
                                        <div className={`${theme}-card-font font-12`}>
                                            <BasicChip
                                                size='sm'
                                                style={{ backgroundColor: `${data.color}` }}
                                                variant={'solid'}
                                                label={`${data.content} ${data.suffix || ''}`}
                                                className='dark-font'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <Divider />
                            </div>
                        }
                    />
                </div>
            ))}
        </Grid>
    );
};

export default HomeCardGrid;
