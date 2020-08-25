import React from "react";
import Dropdown from "react-simple-dropdown";

export default function MyDropDown() {
    return (
        <Dropdown>
            <Dropdown.DropdownTrigger>Profile</Dropdown.DropdownTrigger>
            <Dropdown.DropdownContent>
                {/* <img src="https://api.adorable.io/avatars/285/abott@adorable.png" /> */}
                Username
                <ul>
                    <li>
                        <a href="/profile">Profile</a>
                    </li>
                    <li>
                        <a href="/favorites">Favorites</a>
                    </li>
                    <li>
                        <a href="/logout">Log Out</a>
                    </li>
                </ul>
            </Dropdown.DropdownContent>
        </Dropdown>
    );
}
