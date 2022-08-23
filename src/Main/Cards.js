import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Cards({ list, setList }) {

  function handleEdit(index) {
    let copyArray = [...list];
    let newDestination = window.prompt("Enter new name");
    let newLocation = window.prompt("Enter new location");
    let newImg = window.prompt("Enter new photo URL");

    copyArray[index].destination = newDestination ? newDestination : copyArray[index].destination;
    copyArray[index].location = newLocation ? newLocation : copyArray[index].location;
    copyArray[index].img = newImg ? newImg : copyArray[index].img;
    setList(copyArray);
  }

  function handleDelete(index) {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }


  return (
    <Box>
      <Typography variant='h4' sx={{textAlign: "center"}}>My WishList</Typography>
      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 2, pl: 5}}>
        {list.map((card, index) => <Card key={index} sx={{ width: 345 } }>
          <CardMedia
            component="img"
            height={200}
            image={card.img}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {card.destination}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {card.location}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {card.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="warning" size="large" onClick={(e) => { handleEdit(index) }}>Edit</Button>
            <Button variant="contained" color="error" size="large" onClick={(e) => { handleDelete(index) }}>Remove</Button>
          </CardActions>
        </Card>)}
      </Box>
    </Box>
  )
}