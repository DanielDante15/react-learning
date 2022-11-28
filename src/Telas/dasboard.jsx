import DashBoardView from "../components/Mui_Components/appBar";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

import "../css/dashboard.css";




export default function DashBoard() {
  return (
    <>
      <DashBoardView />
      <div className="dash-main">

        <div className="dash-menu">
          <Sidebar width="250">
            <Menu>
              <SubMenu  label="Charts">
                <MenuItem> Pie charts </MenuItem>
                <MenuItem> Line charts </MenuItem>
              </SubMenu>
              <MenuItem> Documentation </MenuItem>
              <SubMenu  label="Charts">
                <MenuItem> Line charts </MenuItem>
                <MenuItem> Line charts </MenuItem>
              </SubMenu>
              <SubMenu  label="Charts">
                <MenuItem> Line charts </MenuItem>
                <MenuItem> Line charts </MenuItem>
                <MenuItem> Line charts </MenuItem>
                <MenuItem> Line charts </MenuItem>
                <MenuItem> Line charts </MenuItem>
              </SubMenu>
            </Menu>
          </Sidebar>
        </div>



        <div className="dash-userView">
        </div>
      </div>
    </>
  )
}
