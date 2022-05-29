import React from "react";
import Logo from "./Logo";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Link,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div className="Container">
      <Logo />
      <div className="menuDiv">
        <Menu isLazy>
          <MenuButton>Inspirations</MenuButton>
          <MenuList>
            {/* MenuItems are not rendered unless Menu is open */}
            <MenuItem>New Window</MenuItem>
            <MenuItem>Open Closed Tab</MenuItem>
          </MenuList>
        </Menu>
        <Menu isLazy>
          <MenuButton>Find Work</MenuButton>
          <MenuList>
            {/* MenuItems are not rendered unless Menu is open */}
            <MenuItem>New Window</MenuItem>
            <MenuItem>Open Closed Tab</MenuItem>
            <MenuItem>Open File</MenuItem>
          </MenuList>
        </Menu>
        <Menu isLazy>
          <MenuButton>Learn Designs</MenuButton>
          <MenuList>
            {/* MenuItems are not rendered unless Menu is open */}
            <MenuItem>New Window</MenuItem>
            <MenuItem>Open Closed Tab</MenuItem>
            <MenuItem>Open File</MenuItem>
          </MenuList>
        </Menu>
        <Menu isLazy>
          <MenuButton>Hire Designers</MenuButton>
          <MenuList>
            {/* MenuItems are not rendered unless Menu is open */}
            <MenuItem>New Window</MenuItem>
            <MenuItem>Open Closed Tab</MenuItem>
            <MenuItem>Open File</MenuItem>
          </MenuList>
        </Menu>
      </div>
      <div className="signDiv">
        <Link>Sign In</Link>
        <Button colorScheme="pink" variant="solid">
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
