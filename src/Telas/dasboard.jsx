import Drawer from "../components/Dashboard/Drawer";
import NavBar2 from "../components/Dashboard/Navbar";
import "../css/App.css";
import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";




export default function DashBoard() {
  return (
    <>

        <div>
          <Drawer />
          {/* <NavBar2 /> */}
        </div>

    </>
  );
}
