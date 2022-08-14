import { Avatar, Box, Typography } from '@mui/material'

export default function Post() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        pt: 1,
        pb: 1,
        pl: 1,
        border: 1,
      }}
    >
      <Avatar />
      <Typography variant="body1" color="initial">
        text
      </Typography>
    </Box>
  )
}
