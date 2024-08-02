import React from 'react'
import { Card, CardContent, Typography, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

const PantryItem = ({ item, onDelete, onUpdate }) => {
  const handleUpdate = () => {
    const newQuantity = prompt('Enter new quantity:', item.quantity)
    if (newQuantity) {
      onUpdate(item.id, parseInt(newQuantity, 10))
    }
  }

  return (
    <Card
      className='bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300'
      sx={{ mb: 2 }}
    >
      <CardContent className='p-4'>
        <div className='flex justify-between items-center mb-2'>
          <Typography variant='h6' className='font-bold text-gray-800'>
            {item.name}
          </Typography>
          <div className='flex space-x-2'>
            <IconButton onClick={handleUpdate} color='primary'>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => onDelete(item.id)} color='error'>
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
        <Typography variant='body1' className='text-gray-700'>
          Quantity: {item.quantity}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default PantryItem
