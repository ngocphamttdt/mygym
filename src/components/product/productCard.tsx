import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, IconButton, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useLocalStorage } from 'hooks';
import { IShoppingItem } from '../models/shoppingCartInterface';
import { DialogBox } from 'components/common';

interface productProps {
  id?: string
  code: number,
  name: string,
  price: number,
  onDelete: (param: string) => void
}

export const ProductCard = ({ id, code, name, price, onDelete }: productProps) => {

  const [storageValue, setStorageValue] = useLocalStorage<IShoppingItem[]>('shopping-cart', [])
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleConfirmDelete = () => setIsOpen(true)

  const handleDelete = () => {
    onDelete(id as string)
    setIsOpen(false)
  }

  const handleAddToCart = () => {
    const newItem = { id: id, productName: name, price: price, count: 1 } as IShoppingItem
    if (storageValue.length === 0)
      storageValue.push(newItem)

    else {
      storageValue.forEach(item => {
        if (item.id === id) item.count++
        else
          storageValue.push(newItem)
      })
    }
    setStorageValue([...storageValue])
  }

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
          <IconButton size="small" color="primary" onClick={handleAddToCart}>
            <AddShoppingCartIcon />
          </IconButton>
          <Tooltip title="Delete" style={{ marginLeft: 'auto' }}>
            <IconButton onClick={handleConfirmDelete}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
      <div>
        <DialogBox
          title='Delete product'
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onSuccess={handleDelete}>
          <p>Do you want to delete this product?</p>
        </DialogBox>
      </div>
    </>
  )
}
