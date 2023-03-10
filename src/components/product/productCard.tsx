import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, IconButton, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';

type productProps = {
  id?: string
  code: number,
  name: string,
  price: number,
  onDelete: (param: string) => void
}

const ProductCard: React.FC<productProps> = ({ id, code, name, price, onDelete }) => {

  const handleDelete = () => onDelete(id as string)


  return (
    <>
      <Card sx={{ maxWidth: 345 }} >
        <CardActionArea>
          <Link to={`product/${id}`}>
            <CardMedia
              component="img"
              height="140"
              image='./Image/square.jpg'
              alt="green iguana"
            />
          </Link>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {code}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            ${price}
          </Button>
          <Tooltip title="Delete" style={{ marginLeft: 'auto' }}>
            <IconButton onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    </>
  )
}

export default React.memo(ProductCard)