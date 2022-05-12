import React from 'react';
import styled from 'styled-components';
import HeaderTitle from '../components/HeaderTitle';
import { componentsKeys } from '../constants/componentKeys';
import {globalStyles} from '../styles/constants';

const FooterContainer = styled.footer.attrs(styles=>{
})`
    background-color: ${({styles}) => styles.mainBackground};
`;

const Footer: React.FC = (): JSX.Element => {
    return(
        <FooterContainer data-test-id={componentsKeys.FOOTER_CONTAINER} styles={globalStyles}>
            <HeaderTitle />
        </FooterContainer>
    )
};

export default Footer;