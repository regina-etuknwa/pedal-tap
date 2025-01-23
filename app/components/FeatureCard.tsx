import { Box, Grid2, Typography } from "@mui/material";
import { SvgIconProps } from "@mui/material/SvgIcon";

interface FeatureCardProps {
    Icon: React.ComponentType<SvgIconProps>;
    header: string;
    body: string;
  }
  
  const FeatureCard: React.FC<FeatureCardProps> = ({ Icon, header, body }) => {
    return (
      <Grid2 size={{ xs: 12, sm:6, md: 3 }}>
        <Box
            sx={{
                textAlign: "center",
                p: 3,
                height: "100%",
                backgroundColor: "rgba(255,255,255,0.1)",
                borderRadius: "16px",
                boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
            }}
            >
            <Icon 
              sx={{ 
                fontSize: 50, 
                color: theme => theme.palette.primary.main 
                }} />
            <Typography variant="h6" mt={2}>
              {header}
            </Typography>
            <Typography variant="body2">
              {body}
            </Typography>
        </Box>
    </Grid2>
    );
  };

export default FeatureCard;
