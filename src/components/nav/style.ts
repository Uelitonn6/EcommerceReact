import  styled from 'styled-components'

export const Container = styled.nav`
    display: flex;
    width: 100%;
    height: 7rem;
    background: var(--headerNav);

    .gridScreen {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 139.6rem;
        padding: 0 1.5rem;
        margin: 0 auto;

        nav {
            ul {
                display: flex;
                gap: 6rem;

                li, a {
                    color: var(--colorWhite);
                    font-weight: 600;
                    font-size: 1.8rem;
                }
            }
        }
    }
`