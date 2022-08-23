import Typography from '@mui/material/Typography'
import {Link} from "@mui/material";

function NavLink(props) {
    return (
        <Link
            underline="hover"
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                mt: 1,
                width: '100%',
                cursor: 'pointer',
            }}
        >
            {props.icon}
            <Typography variant='button' color='initial' sx={{pl: 1, fontSize:'1rem'}}>
                {props.buttonText}
            </Typography>
        </Link>
    )
}

export default NavLink
