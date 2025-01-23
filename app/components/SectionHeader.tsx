import { Box, Typography } from '@mui/material'

type SectionHeaderProps = {
    header: string;
  };

export const SectionHeader: React.FC<SectionHeaderProps> = ({header}) => {
  return (
    <Box
        sx={{
          height: "20vh",
          // backgroundImage: "url('/images/hero-background.jpg')",
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "black",
          textAlign: "center",
          // p: 3,
        }}
      >
        <Typography variant='h3' sx={{ mt: 1, }}>
          {header}
        </Typography>
      </Box>
  )
}

