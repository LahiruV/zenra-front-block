/* eslint-disable @typescript-eslint/no-explicit-any */
import { BarChart } from '@mui/x-charts/BarChart';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export interface SimpleBarChartProps {
    textColor: string
    data: number[]
    xLabels: string[]
    xAxisLabel: string
    label: string
    forMatter?: string
    width?: number
    height?: number
    color?: string
}

const SimpleBarChart: React.FC<SimpleBarChartProps> = ({ textColor, data, xLabels, label, forMatter, width, height, xAxisLabel, color }) => {

    function valueFormatter(value: number | null) {
        return `${value} ${forMatter || ''}`;
    }

    const customTheme = createTheme({
        palette: {
            text: {
                primary: textColor,
            },
        },
        typography: {
            fontSize: 12,
        },
    });
    return (
        <ThemeProvider theme={customTheme}>
            <BarChart
                width={width || 500}
                height={height || 400}
                series={[
                    { data: data, label: label, valueFormatter, color: color || '#02B2AF' },
                ]}
                xAxis={[{ data: xLabels, scaleType: 'band', label: xAxisLabel, }]}
            />
        </ThemeProvider>
    );
}

export default SimpleBarChart;
