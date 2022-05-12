import React from 'react';
import styled from 'styled-components';
import { componentsKeys } from '../constants/componentKeys';
import { globalStyles } from '../styles/constants';
import HeaderTitle from '../components/HeaderTitle';
import Button from '../components/Button';

const HeaderContainer = styled.header.attrs(styles => {
})`
    display: flex;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    padding: 10px 30px;
    background-color: ${({styles}) => styles.mainBackground};
`;


const Header: React.FC = (): JSX.Element => {
    return(
        <HeaderContainer data-testid={componentsKeys.HEADER_CONTAINER} styles={globalStyles}>
            <img />
            <HeaderTitle />            
            <Button label="Demo" onClick={() => alert("Mostrar demo!!") }/>
        </HeaderContainer>
    )
};

export default Header;