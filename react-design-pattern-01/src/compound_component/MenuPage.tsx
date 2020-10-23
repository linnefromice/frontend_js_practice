import React = require("react")
import Menu from "./Menu"

const MenuPage = (): JSX.Element => {
    return (
        <Menu>
            <Menu.Tabs />
            <div
                style={{
                    width: 300,
                    height: 300,
                    border: '1px solid black',
                    padding: 10
                }}
            >
                <Menu.Home>Home時の表示</Menu.Home>
                <Menu.About>About時の表示</Menu.About>
                <Menu.Others>Others時の表示</Menu.Others>
            </div>
        </Menu>
    )
}
export default MenuPage