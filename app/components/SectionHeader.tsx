import { Paper } from '@mui/material'

type SectionHeaderProps = {
    header: string;
  };

export const SectionHeader: React.FC<SectionHeaderProps> = ({header}) => {
  return (
    <Paper 
        square 
        sx={{
            display: 'flex',                   
            justifyContent: 'center',          
            alignItems: 'center',              
            width: 'fit-content',              
            height: 'fit-content',  
            textAlign: 'center',
            bgcolor: 'black',
            color: "white",
            py: theme => theme.spacing(1),
            px: theme => theme.spacing(2),
            typography: {
              xs: "h6",
              md: "h4"
            },
    }} >
        {header}
    </Paper>
  )
}
