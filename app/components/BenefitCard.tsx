import { Grid2, Typography } from "@mui/material";
import { SvgIconProps } from "@mui/material/SvgIcon";

interface BenefitCardProps {
    Icon: React.ComponentType<SvgIconProps>;
    header: string;
    body: string;
  }
  
  const BenefitCard: React.FC<BenefitCardProps> = ({ Icon, header, body }) => {
    return (
      <Grid2 size={{ xs: 12, sm:6, md: 4 }} sx={{ height: "100%" }}>
          <Icon sx={{ fontSize: 50, color: theme => theme.palette.primary.main }} />
          <Typography variant="h6" mt={2}>
            {header}
          </Typography>
          <Typography variant="body2">
            {body}
          </Typography>
      </Grid2>
    );
  };

export default BenefitCard;
