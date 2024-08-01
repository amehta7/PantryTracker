import { Typography, Button } from '@mui/material'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Typography variant='h2'>Pantry Tracker</Typography>
      <Link href='/pantry'>
        <Button variant='contained' color='primary'>
          Go to Pantry
        </Button>
      </Link>
    </div>
  )
}
