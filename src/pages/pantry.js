import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Container, Typography, Button } from '@mui/material'
import AddItemForm from '../components/AddItemForm'
import PantryList from '../components/PantryList'
import {
  addPantryItem,
  updatePantryItem,
  deletePantryItem,
  getPantryItems,
} from '../lib/firestoreService'

const Pantry = () => {
  const [items, setItems] = useState([]) // Initialize as an empty array
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fetchItems = async () => {
      const pantryItems = await getPantryItems()
      setItems(pantryItems || []) // Ensure items is always an array
    }
    fetchItems()
  }, [])

  const handleAddItem = async (item) => {
    const id = await addPantryItem(item)
    if (id) {
      setItems([...items, { ...item, id }])
      setOpen(false)
    }
  }

  const handleDeleteItem = async (id) => {
    await deletePantryItem(id)
    setItems(items.filter((item) => item.id !== id))
  }

  const handleUpdateItem = async (id, newQuantity) => {
    await updatePantryItem(id, { quantity: newQuantity })
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-teal-100 via-teal-100 to-teal-100 flex items-center justify-center'>
      <Container className='bg-white rounded-lg shadow-lg p-6 max-w-3xl w-full mx-4 md:mx-0'>
        <Link
          href='/'
          className='text-gray-700 mb-8 inline-block border border-gray-300 hover:bg-gray-100 px-4 py-2 rounded-lg shadow-md transition duration-300'
        >
          Back to Home
        </Link>
        <Typography
          variant='h4'
          gutterBottom
          className='text-3xl font-bold text-gray-800'
        >
          Your Pantry
        </Typography>

        <Button
          variant='contained'
          color='primary'
          className='bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white py-2 px-4 rounded-lg shadow-md mb-6'
          onClick={() => setOpen(true)}
        >
          Add Item
        </Button>
        <PantryList
          items={items}
          onDelete={handleDeleteItem}
          onUpdate={handleUpdateItem}
        />
        <AddItemForm
          open={open}
          onClose={() => setOpen(false)}
          onSubmit={handleAddItem}
        />
      </Container>
    </div>
  )
}

export default Pantry
