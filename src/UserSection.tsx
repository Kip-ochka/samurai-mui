import { Avatar, Box, Typography } from '@mui/material'
import styled from '@emotion/styled'

const BackgroundProfileImage = styled.img`
  width: 100%;
  height: 130px;
  object-fit: cover;
  object-position: center center;
  border-radius: 4px 4px 0 0;
`

export default function UserSection() {
  return (
    <section>
      <div>
        <Box sx={{ position: 'relative' }}>
          <BackgroundProfileImage src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlua2VkaW4lMjBjb3ZlcnxlbnwwfHwwfHw%3D&w=1000&q=80" />
          <Avatar
            alt="Your avatar"
            src=""
            sx={{
              position: 'absolute',
              top: 40,
              left: 40,
              height: 130,
              width: 130,
              border: 5,
              borderColor: '#fff',
            }}
          />
        </Box>
        <Box sx={{ p: 4, cursor: 'default' }}>
          <Typography
            variant="h2"
            color="primary"
            sx={{ pb: 1, fontWeight: 'bold' }}
          >
            User Name
          </Typography>
          <Typography variant="subtitle1" color="ligthgray">
            Date of Birth: <span></span>
          </Typography>
          <Typography variant="subtitle1" color="ligthgray">
            Education: <span></span>
          </Typography>
          <Typography variant="subtitle1" color="ligthray">
            Web Site: <span></span>
          </Typography>
        </Box>
      </div>
    </section>
  )
}
