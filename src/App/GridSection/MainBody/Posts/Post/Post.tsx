import { Avatar, Box, Typography } from '@mui/material'

export default function Post() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        p: 1,
        mt: 1,
        mb: 2,
        borderBottom: 1,
      }}
    >
      <Avatar />
      <Typography variant='body1' color='initial'>
        text
      </Typography>
    </Box>
  )
}
