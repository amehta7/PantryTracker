import React from 'react'
import PantryItem from './PantryItem'
import { Container } from '@mui/material'

const PantryList = ({ items = [], onDelete, onUpdate }) => (
  <div className='bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto space-y-4'>
    {items.length > 0 ? (
      items.map((item) => (
        <PantryItem
          key={item.id}
          item={item}
          onDelete={onDelete}
          onUpdate={onUpdate}
          className='bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 p-4 rounded-lg shadow-sm'
        />
      ))
    ) : (
      <p className='text-center text-gray-500 text-lg font-medium'>
        No items in the pantry.
      </p>
    )}
  </div>
)

export default PantryList
