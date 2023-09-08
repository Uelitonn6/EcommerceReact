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
                                <input placeholder="Pesquise..." type="text" name="" id="" />
                                <MagnifyingGlass color="#2c487b" size={25} />
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
                                    <UserCircle color="#2c487b" size={25} />
                                </div>
                                <Heart color="#2c487b" size={25}  />
                                <div className="containerShoppingCart">
                                    <span><strong>04</strong> itens</span>
                                    <span>R$ <strong>150,00</strong></span>
                                    <a href="#">
                                        <ShoppingCart color="#2c487b" size={25} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
           
        </>
    )
}