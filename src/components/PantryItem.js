import React from 'react'
import { Card, CardContent, Typography, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

const PantryItem = ({ item, onDelete }) => (
  <Card>
    <CardContent>
      <Typography variant='h6'>{item.name}</Typography>
      <Typography color='textSecondary'>Quantity: {item.quantity}</Typography>
      <Typography color='textSecondary'>
        Expires on: {item.expirationDate}
      </Typography>
      <IconButton onClick={() => onDelete(item.id)}>
        <DeleteIcon />
      </IconButton>
    </CardContent>
  </Card>
)

export default PantryItem
