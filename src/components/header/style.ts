import styled from 'styled-components'

export const Container = styled.header`
    display: flex;
    width: 100%;
    height: 14rem;
    background-color: var(--colorWhite);

    .gridScreen {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 139.6rem;
        padding: 0 1.5rem;
        margin: 0 auto;

        .contentLeft {
            .text{
                display: flex;
                flex-direction: column;
                gap: 2rem;

                .customerInteraction {
                    display: flex;
                    gap: 3rem;
                    
                    a {
                        color: var(--textBlueDark);
                        font-size: 1.8rem;
                    }
                }

                .containerInput {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border-radius: 2rem;
                    border: 1px solid var(--containerInput);
                    padding: 1rem 2rem;

                    input {
                        background-color: transparent;
                    }

                    input::placeholder {
                        font-size: 1.3rem;
                    }
                }
            }
        
        }

        .contentRight {
           

            .text {
                display: flex;
                flex-direction: column;
                gap: 2rem;

                .aboutTheCompany {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    gap: 3rem;

                    a {
                        color: var(--textBlueDark);
                    }
                }

                .containerProfile {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    gap: 1rem;

                    .register {
                        display: flex;
                        align-items: center;
                        gap: 0.7rem;
                        border-radius: 2rem;
                        border: 1px solid var(--containerInput);
                        padding: 1rem 2rem;

                        a, span {
                            color: var(--textBlueDark);
                        }
                    }

                    .containerShoppingCart {
                        display: flex;
                        align-items: center;
                        gap: 0.7rem;
                        border-radius: 2rem;
                        border: 1px solid var(--containerInput);
                        padding: 1rem 2rem;

                        span {
                            color: var(--textBlueDark);
                        }
                    }
                }
            }
        }
    } 
`
