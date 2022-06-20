import React from 'react';
import './ListOrder.css';
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';

function ListOrder() {
  return (
    <>
      <div>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label"><h2 className='feiraH2'>Nossa Feira</h2></FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="feira"
            name="radio-buttons-group"
          >
            <FormControlLabel value="Frutas" control={<Radio />} label="Frutas" />
            <FormControlLabel value="Legumes" control={<Radio />} label="Legumes" />
            <FormControlLabel value="Verduras" control={<Radio />} label="Verduras" />
            <FormControlLabel value="OvoeCarne" control={<Radio />} label="Ovos e carnes" />
            <FormControlLabel value="Mercearia" control={<Radio />} label="Mercearia" />
            <FormControlLabel value="Bebidas" control={<Radio />} label="Bebidas e laticínios" />
            <FormControlLabel value="CorpoeCasa" control={<Radio />} label="Corpo e Casa" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className='listOrder'>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label"><h2 className='orderH2'>Ordenar</h2></FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="order"
            name="radio-buttons-group"
          >
            <FormControlLabel value="MenorPreco" control={<Radio />} label="Menor preço" />
            <FormControlLabel value="MaiorPreco" control={<Radio />} label="Maior preço" />
            <FormControlLabel value="Alfabetica" control={<Radio />} label="Alfabética" />


          </RadioGroup>
        </FormControl>
      </div>
    </>
  );
}

export default ListOrder;