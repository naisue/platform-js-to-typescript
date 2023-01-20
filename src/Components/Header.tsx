import styled from "styled-components";

const Nav = styled.nav``;

const Col = styled.div``;

const Logo = styled.svg``;

const Items = styled.ul``;

const Item = styled.li``;

const Login = styled.button``;

function Header() {
    return (
        <Nav>
            <Col>
                <Logo/>
                <Items>
                    <Item></Item>
                    <Item></Item>
                </Items>
            </Col>
            <Col>
                <Login/>
            </Col>
        </Nav>
    );
}

export default Header;