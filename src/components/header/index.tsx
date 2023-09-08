import { Container } from "./style";
import { MagnifyingGlass, UserCircle, Heart, ShoppingCart } from '@phosphor-icons/react'
import imgLogo from '../../assets/logo.svg'

export function Header() {
    return (
        <>
            <Container>
                <div className="gridScreen">
                    <div className="contentLeft">
                        <div className="text">
                            <div className="customerInteraction">
                                <a href="#">Troca e Devoluções</a>
                                <a href="#">Atendimento ao cliente</a>
                            </div>
                            <div className="containerInput">
                                <input type="text" name="" id="" />
                                <MagnifyingGlass />
                            </div>
                        </div>
                    </div>

                    <img src={ imgLogo } alt="Logo da empresa" />

                    <div className="contentRight">
                        <div className="text">
                            <div className="aboutTheCompany">
                                <a href="#">Sobre nós</a>
                                <a href="#">Contato</a>
                            </div>
                            <div className="containerProfile">
                                <div className="register">
                                    <a href="#">Entre</a>
                                    <span>ou</span>
                                    <a href="#">Cadastre-se</a>
                                    <UserCircle />
                                </div>
                                <Heart />
                                <div className="ContainerShoppingCart">
                                    <span>04 itens</span>
                                    <span>R$ 150,00</span>
                                    <ShoppingCart />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
           
        </>
    )
}