import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
// import ProductImg from '../../../public/Image'

type productProps = {
  id?: string
  code: number,
  name: string,
  price: number,
}

const ProductCard: React.FC<productProps> = ({ id, code, name, price }) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image='./Image/square.jpg'
            alt="green iguana"
          />
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
        </CardActions>
      </Card>
    </>
  )
}

export default ProductCard