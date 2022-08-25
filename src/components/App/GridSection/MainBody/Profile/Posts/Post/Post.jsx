import { Avatar, Box, Typography, Button } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

export default function Post({id, textContent, likeCount }) {
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
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Avatar />
        <Typography variant='body1' color='initial'>
          {textContent}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minWidth: '10%',
        }}
      >
        <Button color='secondary' sx={{}}>
          <FavoriteBorderIcon />
        </Button>
        <Typography variant='span' color='primary' sx={{ textAlign: 'center' }}>
          {likeCount}
        </Typography>
      </Box>
    </Box>
  )
}
