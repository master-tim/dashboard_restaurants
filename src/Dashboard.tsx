import * as React from "react";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import { Typography, Box } from "@mui/material";

import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ReplayIcon from '@mui/icons-material/Replay';

import { handlers } from "./mocks/handlers";


const columns = [
    { field: 'starred', headerName: 'star', width: 100, 
    renderHeader: () => <ReplayIcon />,
    renderCell: (params: GridCellParams) => {
      return params.value ? <StarIcon color="primary" /> : <StarOutlineIcon />;
    }},
    { field: 'locations', headerName: 'Locations', width: 250 },
    { field: 'robots', headerName: 'Robots', width: 250 },
    { field: 'locationtypes', headerName: 'Location Types', width: 150 },
  ];

  const rows = [
    { id: 1, starred: true, locations: 'New York City', robots: 'R2-D2, C-3PO', locationtypes: 'City' },
    { id: 2, starred: false, locations: 'London', robots: 'BB-8, K-2SO', locationtypes: 'City' },
    { id: 3, starred: false, locations: 'Tokyo', robots: 'Wall-E, EVE', locationtypes: 'City' },
    { id: 4, starred: true, locations: 'San Francisco', robots: 'Optimus Prime, Bumblebee', locationtypes: 'City' },
    { id: 5, starred: false, locations: 'Paris', robots: 'Megatron, Starscream', locationtypes: 'City' },
    { id: 6, starred: true, locations: 'New York City', robots: 'R2-D2, C-3PO', locationtypes: 'City' },
    { id: 7, starred: false, locations: 'London', robots: 'BB-8, K-2SO', locationtypes: 'City' },
    { id: 8, starred: false, locations: 'Tokyo', robots: 'Wall-E, EVE', locationtypes: 'City' },
    { id: 9, starred: true, locations: 'San Francisco', robots: 'Optimus Prime, Bumblebee', locationtypes: 'City' },
    { id: 10, starred: false, locations: 'Paris', robots: 'Megatron, Starscream', locationtypes: 'City' },
    { id: 11, starred: true, locations: 'New York City', robots: 'R2-D2, C-3PO', locationtypes: 'City' },
    { id: 12, starred: false, locations: 'London', robots: 'BB-8, K-2SO', locationtypes: 'City' },
    { id: 13, starred: false, locations: 'Tokyo', robots: 'Wall-E, EVE', locationtypes: 'City' },
    { id: 14, starred: true, locations: 'San Francisco', robots: 'Optimus Prime, Bumblebee', locationtypes: 'City' },
    { id: 15, starred: false, locations: 'Paris', robots: 'Megatron, Starscream', locationtypes: 'City' },
  ];

export default function Dashboard() {
    console.log(handlers[0])
  return (
    <Box
      display="grid"
      justifyContent="center"
      alignItems="center"
      minHeight="90vh"
    >
      <Typography align="left" variant="h4" fontWeight="semibold.600">
        Overview
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Box sx={{ height: 600, width: 1300 }}>
          <DataGrid
            rowHeight={80}
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 6,
                },
              },
            }}
            autoPageSize={true}
            checkboxSelection
            disableRowSelectionOnClick
            sx={{
                boxShadow: 0,
                border: 0,
                '& .MuiDataGrid-cell:hover': {
                  color: '#0091FF',
                },
              }}
          />
        </Box>
      </Box>
    </Box>
  );
}
