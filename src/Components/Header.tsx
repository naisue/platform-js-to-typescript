import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as darkMoon } from "@fortawesome/free-solid-svg-icons";
// import { faMoon as lightMoon } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";
import { DarkLogo, LightLogo } from "./Logo";
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import { useRecoilState } from "recoil";
import { isDarkAtom } from "../atoms";
import { Link, useRouteMatch } from "react-router-dom";

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    padding: 1rem 1rem;
    background-color: #07274E;
`;

const Col = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-items: center;
`;

const LogoWrapper = styled.div`
    position: relative;    

    &:before {
        content: "";
        background-color: #6C6C6C;
        right: 0rem;
        top: 2.5px;
        width: 1px;
        height: 25px;
        display: block;
        position: absolute;
    }
`;

const Logo = styled.svg`
    margin: 0 1rem;
`;

const Apps = styled.li`
    display: flex;
    position: relative;
    flex-wrap: nowarp;
    width: auto;
    height: 30px;
    margin: 0 1rem;
    align-items: center;
    overflow: hidden;
    
    svg {
        margin-right: 0.5rem;
    }
`;

const Items = styled.ul`
    display: flex;
    align-items: center;
    font-family: 'Noto Sans', sans-serif;
    font-size: 16px;
    color: whitesmoke;

    &>li:after {
        content: "";
        width: 5.2rem;
        bottom: 0rem;
        height: 2px;
        background-color: #eb4d4b;
        display: block;
        position: absolute;
        transition: all 0.3s ease-in-out;
        transform: translateX(-5.2rem);
        z-index: -1;
    }

    &>li:hover:after {
        transform: translateX(0);
    }
    `;

const Item = styled.li`
    display: flex;
    margin: 0 1rem;
    padding: 0.4rem 0;
    height: auto;
    align-items: center;
    position: relative;
    overflow: hidden;
    cursor: pointer;
`;

const DarkModeSwitch = styled.button<DarkModeSwitchProps>`
    height: 30px;
    font-size: 20px;
    color: ${(props) => props.color};
    background: none;
    border: none;
    transition: color 0.2s ease-in-out;
    cursor: pointer;
    `;

const Login = styled.button`
    margin: 0 1rem;
    border: none;
    background: none;
    color: whitesmoke;
    font-size: 16px;
    transition: text-decoration 0.5s ease-in-out;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

interface DarkModeSwitchProps {
    color: string;
}

function Header() {
    const [isDark, setMode] = useRecoilState(isDarkAtom);
    const homeMatch = useRouteMatch("/");

    return (
        <Nav>
            <Col>
                <LogoWrapper>
                    <Link to={{ pathname: `/` }}>
                        <Logo width="130" height="30" viewBox="0 10 130 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {isDark? DarkLogo : LightLogo}
                        </Logo>
                    </Link>
                </LogoWrapper>
                <Items>
                    <Apps>
                        <AppsRoundedIcon />
                        Apps
                    </Apps>
                    <Item>
                        <Link to="/dashboard">
                            Dashboard
                        </Link>
                    </Item>
                </Items>
            </Col>
            <Col>
                <Items>
                    <DarkModeSwitch onClick={() => setMode(prev => !prev)} color={isDark? "whitesmoke" : "#07274E"}>
                        <FontAwesomeIcon icon={darkMoon} />
                    </DarkModeSwitch>
                    <Login>
                        <Link to="/login">
                        Login
                        </Link>
                    </Login>
                </Items>
            </Col>
        </Nav>
    );
}

export default Header;