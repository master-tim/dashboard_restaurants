import * as React from "react";
import {
  DataGrid,
  GridCellParams,
  GridColDef,
  GridFilterForm,
  GridRowParams,
  GridRowSelectionModel,
} from "@mui/x-data-grid";
import { Typography, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import StarOutlineIcon from "@mui/icons-material/StarOutline";
import ReplayIcon from "@mui/icons-material/Replay";
import Brightness1Icon from "@mui/icons-material/Brightness1";

const fetchLocation = async () => {
  const response = await fetch("http://localhost:3000/locations");
  if (!response.ok) {
    throw Error("something");
  }
  return response.json();
};
const fetchStarredLocations = async () => {
  const response = await fetch("http://localhost:3000/starred_location_ids");
  if (!response.ok) {
    throw Error("something");
  }
  return response.json();
};

export default function Dashboard() {
  const [location, setLocation] = React.useState([]);
  const [locStatus, setLocStatus] = React.useState("loading");

  const [starredLocationIds, setStarredLocationIds] = React.useState(null);
  const [starLocStatus, setStarLocStatus] = React.useState("loading");

  const [rowSelectionModel, setRowSelectionModel] =
    React.useState<GridRowSelectionModel>([]);

  React.useEffect(() => {
    fetchLocation()
      .then((data) => {
        setLocation(data.locations);
        setLocStatus("success");
      })
      .catch(() => {
        setLocStatus("Error");
      });

    fetchStarredLocations()
      .then((data) => {
        // console.log(data)
        setStarredLocationIds(data.location_ids);
        setStarLocStatus("success");
      })
      .catch(() => {
        setStarLocStatus("Error");
      });
  }, []);

  // console.log(typeof(JSON.stringify(location)))
  let rows = location;
  let columns: GridColDef[] = [
    {
      field: "starred",
      headerName: "star",
      width: 100,
      renderHeader: () => <ReplayIcon />,
      renderCell: (params: GridCellParams) => {
        return params.value ? (
          <StarIcon color="primary" />
        ) : (
          <StarOutlineIcon />
        );
      },
    },
    {
      field: "name",
      headerName: "Locations",
      width: 250,
      renderHeader: () => (
        <Typography variant="subtitle1">Locations</Typography>
      ),
      renderCell: (params: GridCellParams) => {
        return params.row.robot.is_online ? (
          <Box
            component="span"
            sx={{ p: 2, bgcolor: "#3A5FFF", width: "80%", borderRadius: 6 }}
          >
            <Typography sx={{color:"white"}} variant="subtitle2">{params.row.name}</Typography>
          </Box>
        ) : (
          <Box
            component="span"
            sx={{ p: 2, bgcolor: "#E4E4E4", width: "80%", borderRadius: 6 }}
          >
            <Typography variant="subtitle2">{params.row.name}</Typography>
          </Box>
        );
      },
    },
    {
      field: "row.robot.is_online",
      headerName: "Robots Availability",
      width: 150,
      renderCell: (params: GridCellParams) => {
        // console.log(params.row.robot.is_online)
        return params.row.robot.is_online ? (
          <Brightness1Icon color="success" />
        ) : (
          <Brightness1Icon />
        );
      },
    },
    {
      field: "robot.id",
      headerName: "Robot ID",
      width: 250,

      renderCell: (params: GridCellParams) => {
        // console.log(params.row.robot.id);
        return params.row.robot.id ? (
          <Typography variant="subtitle2">
            Penny-{params.row.robot.id}
          </Typography>
        ) : (
          <Typography
            component="span"
            sx={{ color: "#3A5FFF" }}
            variant="subtitle2"
          >
            Add
          </Typography>
        );
      },
    },
  ];

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
            checkboxSelection
            disableRowSelectionOnClick
            onRowSelectionModelChange={(newRowSelectionModel) => {
              setRowSelectionModel(newRowSelectionModel);
            }}
            rowSelectionModel={rowSelectionModel}
            // sx={{
            //   boxShadow: 0,
            //   border: 0,
            //   "& .MuiDataGrid-cell:hover": {
            //     color: "#0091FF",
            //   },
            // }}
          />
          <Box display='flex'>
          {rowSelectionModel.map(name => {
            console.log(name)
            return (
              <Typography variant="h5">{name}</Typography> 
          )
            })}
        </Box>
        </Box>
      </Box>
    </Box>
  );
}
