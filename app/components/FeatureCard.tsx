import { Box } from "@mui/material";
import { SvgIconProps } from "@mui/material/SvgIcon";

interface FeatureCardProps {
    Icon: React.ComponentType<SvgIconProps>;
  }
  
  const FeatureCard: React.FC<FeatureCardProps> = ({ Icon}) => {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: {
            xs: "60px",
            md: "120px",
          }, 
          height: {
            xs: "60px",
            md: "120px",
          },
          borderRadius: "50%",
          backgroundColor: theme => theme.palette.secondary.main, 
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Icon sx={{ 
            fontSize: {
                xs: "30px",
                md: "60px",
            }, 
          color: "white" 
          }} />
      </Box>
    );
  };

export default FeatureCard;
