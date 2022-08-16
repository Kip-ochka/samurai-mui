import { Avatar, Box, Typography, Button } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
export default function Post() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        p: 1,
        mt: 1,
        mb: 2,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar />
        <Typography variant='body1' color='initial'>
          text
        </Typography>
      </Box>

      <Button variant='text' color='secondary' sx={{ minWidth: '40px' }}>
        <FavoriteBorderIcon />
      </Button>
    </Box>
  )
}
