import { Box, Button, FormControl, FormLabel, TextField } from "@mui/material";
import { useState } from "react";

export default function InputForm({ setList }) {

  const defaultPhoto = 'https://cavchronicle.org/wp-content/uploads/2018/03/top-travel-destination-for-visas-900x504.jpg';
  const helperText = 'Plese fill out this field';

  const [destination, setDestination] = useState('');
  const [destErr, setDestErr] = useState(false);
  const [location, setLocation] = useState('');
  const [locErr, setLocErr] = useState(false);
  const [photo, setPhoto] = useState('');
  const [description, setDescription] = useState('');

  function handleChange(e, setter) {
    setter(e.target.value)
  }

  function handleClick() {
    if (!destination) {
      setDestErr(true);
      return;
    } else {
      setDestErr(false);
    }

    if (!location) {
      setLocErr(true);
      return;
    } else {
      setLocErr(false);
    }

    setList(places => {
      let newList = [...places];
      let submittedPhoto = photo ? photo : defaultPhoto;

      newList.push({ destination, location, img: submittedPhoto, description })
      console.log(newList);
      clearFields();
      return newList;
    })
  }

  function clearFields() {
    setDestination('');
    setLocation('');
    setPhoto('');
    setDescription('');
  }

  return (
    <Box component="form" alignContent="top">
      <FormControl fullWidth required>
        <FormLabel sx={{ fontSize: 28 }}>Destination Name</FormLabel>
        <TextField onChange={(e) => handleChange(e, setDestination)} value={destination} placeholder="Enter the name of the destination" error={destErr} helperText={destErr ? helperText : ''} />
      </FormControl>
      <FormControl fullWidth required>
        <FormLabel sx={{ fontSize: 28 }}>Location</FormLabel>
        <TextField onChange={(e) => handleChange(e, setLocation)} value={location} placeholder="Where is it located" error={locErr} helperText={locErr ? helperText : ''} />
      </FormControl>
      <FormControl fullWidth>
        <FormLabel sx={{ fontSize: 28 }}>Photo</FormLabel>
        <TextField type="url" onChange={(e) => handleChange(e, setPhoto)} value={photo} placeholder="Enter an image of URL of the place" />
      </FormControl>
      <FormControl fullWidth>
        <FormLabel sx={{ fontSize: 28 }}>Description</FormLabel>
        <TextField 
        multiline minRows={2} maxRows={20}
        onChange={(e) => handleChange(e, setDescription)} value={description} placeholder="Enter the description" />
      </FormControl>
      <Button
        variant="contained"
        type="submit"
        sx={{ mt: 2 }}
        onClick={(e) => {
          e.preventDefault();
          handleClick();
        }}
        size="large"
      >
        Add to list
      </Button>
    </Box>
  )
}