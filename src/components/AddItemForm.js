import React, { useState } from 'react'
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'

const AddItemForm = ({ open, onClose, onSubmit }) => {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [expirationDate, setExpirationDate] = useState('')

  const handleSubmit = () => {
    onSubmit({ name, quantity, expirationDate })
    setName('')
    setQuantity('')
    setExpirationDate('')
    onClose()
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Item</DialogTitle>
      <DialogContent>
        <TextField
          margin='dense'
          label='Name'
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin='dense'
          label='Quantity'
          type='number'
          fullWidth
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <TextField
          margin='dense'
          label='Expiration Date'
          type='date'
          fullWidth
          InputLabelProps={{ shrink: true }}
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Add</Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddItemForm
