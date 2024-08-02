import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  doc,
} from 'firebase/firestore'
import { db } from './firebaseConfig'

// Add a new pantry item
export const addPantryItem = async (item) => {
  try {
    const docRef = await addDoc(collection(db, 'pantryItems'), item)
    console.log('Document written with ID: ', docRef.id)
    return docRef.id
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}

// Update a pantry item
export const updatePantryItem = async (id, updatedFields) => {
  try {
    const docRef = doc(db, 'pantryItems', id)
    await updateDoc(docRef, updatedFields)
    console.log('Document updated with ID: ', id)
  } catch (e) {
    console.error('Error updating document: ', e)
  }
}

// Delete a pantry item
export const deletePantryItem = async (id) => {
  try {
    await deleteDoc(doc(db, 'pantryItems', id))
    console.log('Document deleted with ID: ', id)
  } catch (e) {
    console.error('Error deleting document: ', e)
  }
}

// Get all pantry items
export const getPantryItems = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'pantryItems'))
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  } catch (e) {
    console.error('Error getting documents: ', e)
  }
}
