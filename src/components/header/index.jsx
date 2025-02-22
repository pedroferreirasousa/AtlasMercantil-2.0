
import styled from "styled-components";

 const Header = styled.header`

    width: 90%;
    min-width: 100vw;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 10;
`

 const Nav = styled.nav`
    width: 85%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80%;
    border-radius: 1.5rem;
    padding: 0px 5%;
    background-color: #182215;
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.767);
    z-index: 10;
`

 const Logo = styled.img`
    width: 150px;

`

 const List = styled.ul`

    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;

    a{
        color: #dedede;
        text-decoration: none;
        font-size: 16px;
        text-transform: uppercase;
    }

    a:hover{
        color: #df9f15;
        transition: 0.5s;
    }
`


export default function Navbar(){
    return   (
        <Header>
            <Nav>
                <div>
                    <Logo src="../../../public/images/logo-AtlasMercantil.png" alt="" />
                </div>
                <div>
                    <List>
                        <li><a href="#home">Início</a></li>
                        <li><a href="#history">Nossa história</a></li>
                        <li><a href="#benefits">Beneficios</a></li>
                        <li><a href="#depoiments">Depoimentos</a></li>
                        <li><a href="#">Contato</a></li>
                    </List>
                </div>
            </Nav>
        </Header>
    )
}