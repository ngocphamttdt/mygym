import React, { useRef, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Slider, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { IProduct } from '../models/productInterface';
import { useSelector } from 'react-redux';
import { IObject, ISearchingParams } from '../models/interfaceModels';

const SearchingBox: React.FC<ISearchingParams> = ({ onSearchProduct }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [productPrice, setProductPrice] = useState<number | number[]>()
  const [selectedCategory, setSelectedCategory] = useState<string>('')

  const categorySelector = useSelector((state: any) => state.category.data)
  const nameRef = useRef<HTMLInputElement>(null)

  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleSearch = () => {
    onSearchProduct(
      {
        name: nameRef.current?.value,
        categoryId: selectedCategory,
        price: productPrice
      } as IProduct
    )
    handleClose()
  }

  const handlePriceChange = (event: Event, newValue: number | number[]) => setProductPrice(newValue)

  const handleCategoryChange = (event: SelectChangeEvent) =>
    setSelectedCategory(event.target.value as string)

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Search product
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Search Products"}
        </DialogTitle>
        <DialogContent>

          <DialogContentText id="alert-dialog-description">
            <Grid
              container
              spacing={{ xs: 1, md: 1 }}
              rowSpacing={3}
              columns={{ md: 12 }}
              style={{ marginTop: '10px' }}>
              <Grid item xs={12}><FormControl fullWidth>
                <TextField id="outlined-basic" label="Product Name" variant="outlined" inputRef={nameRef} />
              </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    onChange={handleCategoryChange}
                  >
                    {categorySelector && categorySelector.map((item: IObject, idx: any) =>
                      <MenuItem value={item.value} key={idx}>{item.label}</MenuItem>
                    )}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <Box width={300}>
                    <p>Price</p>
                    <Slider defaultValue={0} aria-label="Default" valueLabelDisplay="auto" onChange={handlePriceChange} />
                  </Box>
                </FormControl>
              </Grid>
            </Grid>

          </DialogContentText>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleSearch}>Search</Button>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default SearchingBox