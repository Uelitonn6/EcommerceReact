import { Container } from "./style";
import { MagnifyingGlass } from '@phosphor-icons/react'

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
                    <img src="" alt="" />
                    <div className="contentRight"></div>
                </div>
            </Container>
           
        </>
    )
}