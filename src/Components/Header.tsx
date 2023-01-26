import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";
import { DarkLogo, LightLogo } from "./Logo";
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import { useRecoilState } from "recoil";
import { isDarkAtom } from "../atoms";
import { Link } from "react-router-dom";

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
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
`;

const DarkModeSwitch = styled.button`
    height: 30px;
    font-size: 20px;
    color: whitesmoke;
    background: none;
    border: none;
    transition: color 0.2s ease-in-out;`;

const Login = styled.button``;

function Header() {
    const [isDark, setMode] = useRecoilState(isDarkAtom);

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
                        Dashboard
                    </Item>
                </Items>
            </Col>
            <Col>
                <Items>
                    <DarkModeSwitch onClick={() => setMode(prev => !prev)}>
                        <FontAwesomeIcon icon={isDark? faSun : faMoon} />
                    </DarkModeSwitch>
                    <Login>
                        Login
                    </Login>
                </Items>
            </Col>
        </Nav>
    );
}

export default Header;