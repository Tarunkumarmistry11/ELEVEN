import {
    Box,
    Container,
    Button,
    List,
    ListItem,
    Stack,
    Typography,
    useMediaQuery,
    IconButton,
  } from "@mui/material";
  import { Link } from "react-router-dom";
//   import logo from "../../Assets/logo.png";
  import styles from "./Navbar.module.css";
  import { useState } from "react";
  import CloseIcon from "@mui/icons-material/Close";
  import MenuIcon from "@mui/icons-material/Menu";
  
  export default function NavBar() {
    const isMobile = useMediaQuery("(max-width:900px)");
    const [menuOpen, setMenuOpen] = useState(false);
  
    return (  
        <Container maxWidth="xl">
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
            py={2}
          >
            {/* <Link to="/">
              <img src={"/"} alt="Logo" height={27} />
            </Link> */}
            <h1 className="Brand-name">E L E V E N</h1>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={4}
              alignItems={{ xs: "flex-start", md: "center" }}
              className={[styles.navlinks, menuOpen && styles.active]}
              pt={{ xs: 12, md: 1 }}
              pb={{ xs: 4, md: 1 }}
              px={{ xs: 4, md: 0 }}
            >
              <Link>Home</Link>
              <Link>Gallery</Link>
              <Link>About</Link>
              <Link>Videos</Link>
              <Link>Presets & Luts</Link>
              <Link>Contact</Link>
              {isMobile && (
                <IconButton
                  onClick={() => setMenuOpen(false)}
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 32,
                    color: "#fff",
                  }}
                >
                  <CloseIcon />
                </IconButton>
              )}
            </Stack>
  
            {isMobile && (
              <IconButton onClick={() => setMenuOpen(true)}>
                <MenuIcon />
              </IconButton>
            )}
          </Stack>
        </Container>
    );
  }