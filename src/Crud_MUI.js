import * as React from 'react';
import { IconButton,CardActionArea,CardHeader,CardMedia,Typography,CardContent,CardActions,Card, Grid, TextField, FormControl,MenuItem,Select,InputLabel, Button} from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


function Crud_MUI(){
	const [counter, setCounter] = React.useState(1);
	
	const [name,setName]=React.useState("");
	const [type,setType]=React.useState("");
	const [details,setDetails]=React.useState("");
	
	const[card,setCard]=React.useState([]);
	const[status,setStatus]=React.useState("true");
	const[id,setId]=React.useState("");
	
	 const handleChange = (event) => {
	 	
    		setType(event.target.value);
  		};
	
	
	const createCard=() =>{
	     if(status=="true"){
		let newCard={
			id:counter,
			name,type,details
		}
		setCounter(counter + 1);
		setCard([...card,newCard]);
	 }
	 else if(status=="false"){
	 	let editedCardUpdate=card.filter(item=>item.id!=id)
	 	let editedCard={id,name,type,details}
	 	setCard([...editedCardUpdate,editedCard]);
	 }
	 setName("");
	 setType("");
	 setDetails("");
	 setStatus("true");
		
	}
	const deleteCard=(id) =>{
		let removeCard = card.filter(item => item.id != id);
		setCard(removeCard);
	}
	const editCard=(id) =>{
		let editCard = card.filter(item => item.id == id)
		setName(editCard[0].name);
		setType(editCard[0].type);
		setDetails(editCard[0].details);
		setId(editCard[0].id);
		setStatus("edit");
	}
	return(
	 
	<div className="Layout">
		 <Grid container Spacing={1} sx={{bgcolor:"#DCB8AD",}} >
		 	
        		<Grid item xs={12} sx={{bgcolor:"#DCB8AD",p:2,}}>
        		 
        		<FormControl  sx={{ width:"100%", height:"100%", }}>
          			
          			<div>
          			<TextField sx={{ml:1, mt:2, width:"70%", }}
          			required  
          			value={name}
          			label="Pet Name" variant="filled" 					onChange={(e)=>setName(e.target.value)} />
          			</div>
          			
          			<div>
          			<FormControl variant="filled" sx={{ml:1, mt:2, width:"70%", height:"10%",}}>
          			 <InputLabel 
          			 required id="PType">Pet Type</InputLabel>
          			 <Select
					  id="Type"
					  labelId="PType"
					  label="PetType"
					  value={type}
					  onChange={handleChange}
				>
				  <MenuItem value="Dog">Dog</MenuItem>
				  <MenuItem value="Cat">Cat</MenuItem>
				</Select>
				</FormControl>
				</div>
          			
          			
          			<div>
          			<TextField sx={{ml:1, mt:2, width:"70%", }}
					  required
					  value={details}
					  label="Pet Description"
					  multiline
					  rows={4}
					  defaultValue="Write About Your Pet..."
					  variant="filled"
					  onChange={(e)=>setDetails(e.target.value)}
				/>
          			</div>
          			<div>
        				<Button sx={{p:2,mt:2, ml:1, width:"70%", }} 
        				variant="contained"
        				onClick={() => createCard() }>
        				SAVE
        				</Button>
        			</div>
          			
        		</FormControl>
        			
        		</Grid>
        		 
        		 
        		<Grid container rowSpacing={1} columnSpacing={1} sx={{bgcolor:"#D9DCAD ", }}>
          			
          			{
				 card &&card.map(eachDetails =>{
				    return(
          				   <Card sx={{  maxWidth: 400,ml:5, }}>	 
          					 <CardMedia
							component="img"
							height="200"
							image="golden-retriever-dog.jpg"
							alt="golden-retriever-dog"
						   />
						   <CardContent>
							<Typography sx={{ color:"#18B692",}}  
							gutterBottom variant="h3" >
							  {eachDetails.name}
							</Typography>
							<Typography gutterBottom variant="h4" component="div">
							 Pet Type: {eachDetails.type}
							</Typography>
							<Typography gutterBottom variant="p" component="div">
							 Pet Details : {eachDetails.details}
							</Typography>
						    </CardContent>
						    <CardActions>
							 <IconButton aria-label="edit">
							  	<EditIcon 
							  		onClick={()=>editCard(eachDetails.id)}
							  	/>
						  	</IconButton>
						  	 <IconButton aria-label="delete">
							  	<DeleteIcon 
							  		onClick={()=>deleteCard(eachDetails.id)}
							  	/>
							   </IconButton>
						    </CardActions>
						    
						    
          				   </Card>	 			
				    )
				 })
				}
          			
        		</Grid>
      		</Grid>
	</div>
	
	);
}

export default Crud_MUI;