import { Box, Grid2, Paper, Typography } from "@mui/material";
// import { SvgIconProps } from "@mui/material/SvgIcon";
import Image from "next/image";

interface TeamMemberCardProps {
    // Icon: React.ComponentType<SvgIconProps>;
    name: string;
    role: string;
    alt: string;
    img: string;

  }
  
  const TeamMemberCard: React.FC<TeamMemberCardProps> = ({  name, role, alt, img }) => {
    return (
        <Paper
            sx={(theme) => ({
                p: "1rem",
                textAlign: "center",
                bgcolor: "#fff",
                boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)",
                borderRadius: "16px",
                border: `1px solid ${theme.palette.primary.main}`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)", 
                },
            })}
            >
            <Box
                sx={{
                    width: 150,
                    height: 150,
                    borderRadius: "50%",
                    overflow: "hidden",
                    mb: "1rem",
                }}
                >
                <Image
                src={img}
                alt={alt}
                width={150}
                height={150}
                style={{
                    objectFit: "cover",
                    objectPosition: "center",
                }}
                />
            </Box>
            <Typography
                variant="h6"
                sx={{
                color: theme => theme.palette.primary.main,
                fontWeight: "bold",
                mb: "0.5rem",
                }}
            >
                {name}
            </Typography>
            <Typography
                variant="body2"
                sx={{
                color: "#666", // Softer color for secondary text
                fontStyle: "italic", // Make the role italicized for a stylistic touch
                }}
            >
                {role}
            </Typography>
</Paper>

    );
  };

export default TeamMemberCard;
