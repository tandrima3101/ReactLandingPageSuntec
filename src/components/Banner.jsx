import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import MenuIcon from "@mui/icons-material/Menu";

function Banner() {
  return (
    <Container className="banner_section" maxWidth={false}>
        <Container maxWidth="lg">
          <Box
            sx={{
              width: "100%",
              height: "5vh",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: "10px",
            }}
          >
            <Button>
              <KeyboardBackspaceIcon style={{ color: "#fff" }} />
            </Button>
            <Button>
              <MenuIcon style={{ color: "#fff" }} />
            </Button>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "95vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "10px",
            }}
          >
            <Typography variant="h1" color="#fff" textAlign="center">
              CUSTOMERS JOURNEY
            </Typography>
          </Box>
        </Container>
      </Container>
  )
}

export default Banner