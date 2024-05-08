import { TextField } from "@mui/material";

import { styled } from '@mui/material/styles';


export const WhiteTextField = styled(TextField)({

    width: '100%',
    marginBottom: '5%',

    '& .MuiInputBase-root': {
        color: 'white',
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    '& label': {
        color: 'white',
      },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
});