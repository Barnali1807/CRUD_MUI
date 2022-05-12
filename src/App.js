import Crud_Layout from './Crud_MUI';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <div className="App">
    	 <AppBar position="static">
    	 	 <Typography variant="h2" component="div" >
            		CRUD OPERATIONS
          	 </Typography>
    	  </AppBar>
      	<Crud_Layout />
    </div>
  );
}

export default App;
