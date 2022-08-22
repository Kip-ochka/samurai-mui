import Typography from '@mui/material/Typography'

import Button from '@mui/material/Button'

//todo type Button prop
function NavButton(props) {
  return (
    <Button
      variant='text'
      color='primary'
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        mt: 1,
        width: '100%',
      }}
    >
      {props.icon}
      <Typography variant='button' color='initial' sx={{ pl: 2 }}>
        {props.buttonText}
      </Typography>
    </Button>
  )
}
export default NavButton
