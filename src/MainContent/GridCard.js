import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { TextField, Button, Box, Typography , Grid, InputBase,IconButton, Divider} from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';

const Gridcard = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const columnDefs = [
    { headerName: 'Job ID', field: 'jobId', sortable: true, filter: true, width: 100 },
    { headerName: 'Name', field: 'name', sortable: true, filter: true, width: 150 },
    { headerName: 'Position', field: 'position', sortable: true, filter: true, width: 150 },
    { headerName: '1st Level', field: 'firstLevel', sortable: true, filter: true, width: 100 },
    { headerName: '2nd Level', field: 'secondLevel', sortable: true, filter: true, width: 100 },
    { headerName: '3rd Level', field: 'thirdLevel', sortable: true, filter: true, width: 100 },
    { headerName: '4th Level', field: 'fourthLevel', sortable: true, filter: true, width: 100 },
    { headerName: 'Total Marks', field: 'totalMarks', sortable: true, filter: true, width: 120 },
    { headerName: 'Status', field: 'status', sortable: true, filter: true, width: 100, cellRenderer: statusRenderer },
    { headerName: 'Actions', field: 'actions', width: 100, cellRenderer: actionRenderer }
  ];

  const rowData = [
    { jobId: '#001', name: 'John Doe', position: 'Designer', firstLevel: '6/10', secondLevel: '7/10', thirdLevel: '3/10', fourthLevel: '...', totalMarks: '...', status: 'Active' },
    { jobId: '#002', name: 'John Smith', position: 'Angular Developer', firstLevel: '6/10', secondLevel: '5/10', thirdLevel: '5/10', fourthLevel: '8/10', totalMarks: '24/40', status: 'Hired' },
    { jobId: '#003', name: 'Johnson Smith', position: 'Python Developer', firstLevel: '6/10', secondLevel: '7/10', thirdLevel: '3/10', fourthLevel: '...', totalMarks: '...', status: 'Active' },
    { jobId: '#004', name: 'Stella', position: 'Android Developer', firstLevel: '6/10', secondLevel: '2/10', thirdLevel: '✖', fourthLevel: '✖', totalMarks: '8/40', status: 'Reject' },
    { jobId: '#005', name: 'Randy', position: 'IOS Developer', firstLevel: '6/10', secondLevel: '7/10', thirdLevel: '3/10', fourthLevel: '...', totalMarks: '...', status: 'Active' },
    { jobId: '#006', name: 'John Doe', position: 'Junior Designer', firstLevel: '6/10', secondLevel: '7/10', thirdLevel: '3/10', fourthLevel: '...', totalMarks: '...', status: 'Active' },
    { jobId: '#007', name: 'John Doe', position: 'Junior Designer', firstLevel: '6/10', secondLevel: '7/10', thirdLevel: '3/10', fourthLevel: '...', totalMarks: '...', status: 'Active' },
  
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  function statusRenderer(params) {
    const statusMap = {
      'Active': { color: 'orange', label: 'Active' },
      'Hired': { color: 'green', label: 'Hired' },
      'Reject': { color: 'red', label: 'Reject' }
    };
    const status = statusMap[params.value];
    return (
      <span style={{ backgroundColor: status.color, color: 'white', padding: '2px 5px', borderRadius: '4px' }}>
        {status.label}
      </span>
    );
  }

  function actionRenderer() {
    return <span role="img" aria-label="view">👁️</span>;
  }

  return (
    <Box p={0} className="ag-theme-alpine" style={{ height: 500, width: '100%' }}>

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6}>
          <Typography variant="h5">Candidate Status</Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <InputBase
            placeholder="Search"
            inputProps={{ 'aria-label': 'search' }}
            endAdornment={
              <IconButton size="small" sx={{ p: '8px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
            }
            fullWidth
            style={{
              backgroundColor: '#FFFFFF',
              height: '45px',
              color: 'black',
              padding: '8px',
              boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.1)',
              float:'right'
            }}
            onChange={handleSearchChange}
            value={searchTerm}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button style={{width:"100%",height:"45px"}} variant="outlined" startIcon={<FilterAltIcon />}>Filters</Button>
        </Grid>
      </Grid>
      <Divider  style={{padding:4}}/>
      <div style={{padding:8}}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        pagination={true}
        paginationPageSize={10}
        domLayout="autoHeight"
      />
      </div>
     
    </Box>
  );
};

export default Gridcard;
