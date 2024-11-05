import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { createTheme, ThemeProvider, ThemeOptions } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
    palette: {
        primary: { main: '#635bff' },
        secondary: { main: '#ff5c8d' },
        background: {
            default: '#1C252E', // General background color
            paper: '#282C34',  // DataGrid and component background color
        },
        text: {
            primary: '#ffffff',
            secondary: '#a1a1a1',
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        h1: { fontSize: '2rem', fontWeight: 600 },
        h2: { fontSize: '1.75rem', fontWeight: 500 },
        body1: { fontSize: '1rem' },
        button: { textTransform: 'none' }, // Prevents uppercase on buttons
    },
    components: {
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    border: 'none',
                    color: '#fff',
                },
                columnHeaders: {
                    backgroundColor: '#333', // Header background color
                    color: '#fff',
                    fontSize: '1rem',
                },
                row: {
                    '&:nth-of-type(odd)': {
                        backgroundColor: '#1f2a35',
                    },
                    '&:hover': {
                        backgroundColor: '#2c3e50',
                    },
                },
                cell: {
                    color: '#fff',
                    '&:focus': {
                        outline: 'none',
                    },
                },
                footerContainer: {
                    backgroundColor: '#333', // Footer background color
                    color: '#fff',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#635bff',
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: '#5a51d1',
                    },
                },
            },
        },
    },
};

const theme = createTheme(themeOptions);

const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export interface DataGridTableProps {
    className: string;
}

const DataGridTable: React.FC<DataGridTableProps> = ({ className }) => {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    className={`${className}`}
                    sx={{
                        backgroundColor: theme.palette.background.paper,
                    }}
                />
            </Box>
        </ThemeProvider>
    );
}

export default DataGridTable;
