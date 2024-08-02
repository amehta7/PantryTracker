import React from 'react'
import { Typography, Button } from '@mui/material'
import Link from 'next/link'

const Home = () => (
  <div className='flex flex-col items-center justify-center min-h-screen px-4 py-6 bg-gradient-to-br from-teal-100 via-teal-100 to-teal-100'>
    <div className='text-center'>
      <Typography
        variant='h2'
        className='text-6xl font-extrabold mb-12 text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400'
      >
        Pantry Tracker
      </Typography>
      <Typography variant='h6' className='text-xlg mb-8 text-gray-600'>
        Manage your pantry items efficiently and effortlessly.
      </Typography>
      <Link href='/pantry' passHref>
        <Button
          variant='contained'
          color='primary'
          className='text-gray-900 font-semibold text-lg bg-gradient-to-r from-green-300 to-blue-400 hover:from-green-400 hover:to-blue-500 transition-colors duration-300 ease-in-out py-3 px-6 rounded-full shadow-lg'
        >
          Go to Pantry
        </Button>
      </Link>
    </div>
  </div>
)

export default Home
