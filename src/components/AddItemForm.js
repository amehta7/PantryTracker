import React, { useState } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from '@mui/material'

const AddItemForm = ({ open, onClose, onSubmit }) => {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [expirationDate, setExpirationDate] = useState('')

  const handleSubmit = () => {
    if (name && quantity) {
      onSubmit({ name, quantity, expirationDate })
      setName('')
      setQuantity('')
      setExpirationDate('')
      onClose()
    }
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth='sm' fullWidth>
      <DialogTitle className='bg-blue-500 text-white'>Add New Item</DialogTitle>
      <DialogContent>
        <TextField
          margin='dense'
          label='Name'
          fullWidth
          variant='outlined'
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          margin='dense'
          label='Quantity'
          type='number'
          fullWidth
          variant='outlined'
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          margin='dense'
          label='Expiration Date'
          type='date'
          fullWidth
          variant='outlined'
          InputLabelProps={{ shrink: true }}
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
          sx={{ mb: 2 }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant='outlined' color='secondary'>
          Cancel
        </Button>
        <Button onClick={handleSubmit} variant='contained' color='primary'>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddItemForm
