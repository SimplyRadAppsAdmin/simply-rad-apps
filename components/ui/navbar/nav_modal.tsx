// components/Modal.tsx
import React from "react";
import {
  Backdrop,
  Box,
  Modal,
  Fade,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const modalStyle = {
  position: "absolute" as "absolute",
  border: "1px solid #797676",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "black",
  color: "white",
  boxShadow: 24,
  p: 4,
  borderRadius: "16px",
  width: "90%",
};

const cardContent = {
  marginLeft: "5px",
};

const cardStyles = {
  height: "224px",
  maxWidth: "384px",
  borderRadius: "8px",
  color: "white",
  position: "relative",
  cursor: "pointer",
  flexDirection: "column", // Make it a column layout
  display: "flex",
  justifyContent: "flex-end",
};

const overlayStyles = {
  marginBottom: "10px",
  marginRight: "10px",
  marginLeft: "20px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};

const iconStyles = {
  color: "white",
  position: "relative",
  right: "10px",
  bottom: "10px",
  border: "1px solid white",
  borderRadius: "10%",
};

const NavModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
        style: { backgroundColor: "rgba(0, 0, 0, 0.8)" },
      }}
    >
      <Fade in={isOpen}>
        <Box sx={modalStyle}>
          <Grid container spacing={2}>
            {/* First Card */}
            <Grid item xs={12} sm={4}>
              <Card
                sx={{
                  ...cardStyles,
                  background:
                    "linear-gradient(to right, rgba(229, 46, 113, 0.9), rgba(255, 149, 0, 0.8))",
                }}
              >
                <CardContent style={cardContent}>
                  <Typography
                    fontFamily={"Jost"}
                    variant="h6"
                    fontSize={28}
                    lineHeight={"32px"}
                  >
                    App Development <br /> & Launch
                  </Typography>
                </CardContent>
                <Box sx={overlayStyles}>
                  <Typography fontFamily={"Jost"} variant="body2">
                    concept and beyond.
                  </Typography>
                  <IconButton sx={iconStyles}>
                    <ArrowForwardIcon />
                  </IconButton>
                </Box>
              </Card>
            </Grid>

            {/* Second Card */}
            <Grid item xs={12} sm={4}>
              <Card
                sx={{
                  ...cardStyles,
                  background:
                    "linear-gradient(to right, rgba(0, 0, 255, 0.9), rgba(80, 0, 160, 0.8))",
                }}
              >
                <CardContent style={cardContent}>
                  <Typography
                    fontFamily={"Jost"}
                    variant="h6"
                    fontSize={28}
                    lineHeight={"32px"}
                  >
                    Website Creation
                  </Typography>
                </CardContent>
                <Box sx={overlayStyles}>
                  <Typography fontFamily={"Jost"} variant="body2">
                    A boutique digital experience.
                  </Typography>
                  <IconButton sx={iconStyles}>
                    <ArrowForwardIcon />
                  </IconButton>
                </Box>
              </Card>
            </Grid>

            {/* Third Card */}
            <Grid item xs={12} sm={4}>
              <Card
                sx={{
                  ...cardStyles,
                  background:
                    "linear-gradient(to right, rgba(255, 80, 0, 0.9), rgba(255, 149, 0, 0.8))",
                }}
              >
                <CardContent style={cardContent}>
                  <Typography
                    fontFamily={"Jost"}
                    variant="h6"
                    fontSize={28}
                    lineHeight={"32px"}
                  >
                    Design & Development Consulting
                  </Typography>
                </CardContent>
                <Box sx={overlayStyles}>
                  <Typography fontFamily={"Jost"} variant="body2">
                    We’re good with blockers.
                  </Typography>
                  <IconButton sx={iconStyles}>
                    <ArrowForwardIcon />
                  </IconButton>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Fade>
    </Modal>
  );
};

export default NavModal;
