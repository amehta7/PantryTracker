import { useState, useEffect } from 'react'
import { Typography, Button, Container } from '@mui/material'
import AddItemForm from '../components/AddItemForm'
import PantryItem from '../components/PantryItem'
import { db } from '../lib/firebaseConfig'
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore'

export default function Pantry() {
  const [items, setItems] = useState([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fetchItems = async () => {
      const querySnapshot = await getDocs(collection(db, 'pantryItems'))
      setItems(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    }
    fetchItems()
  }, [])

  const handleAddItem = async (item) => {
    await addDoc(collection(db, 'pantryItems'), item)
    setOpen(false)
    // Fetch items again to update the list
    const querySnapshot = await getDocs(collection(db, 'pantryItems'))
    setItems(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
  }

  const handleDeleteItem = async (id) => {
    await deleteDoc(doc(db, 'pantryItems', id))
    setItems(items.filter((item) => item.id !== id))
  }

  return (
    <Container>
      <Typography variant='h4'>Your Pantry</Typography>
      <Button variant='contained' color='primary' onClick={() => setOpen(true)}>
        Add Item
      </Button>
      {items.map((item) => (
        <PantryItem key={item.id} item={item} onDelete={handleDeleteItem} />
      ))}
      <AddItemForm
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleAddItem}
      />
    </Container>
  )
}
