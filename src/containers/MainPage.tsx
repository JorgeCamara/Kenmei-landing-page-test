import React, {useContext} from 'react';
import styled from 'styled-components';
import { componentsKeys } from '../constants/componentKeys';
import Button from '../components/Button';
import {NotificationContext} from '../state/providers/NotificationProvider';
import { globalStyles } from '../styles/constants';
import Notification from '../components/Notification';

const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    
    & img{
        width: 100%;
        object-fit: cover;
        height: 100%;
    }
`;

const StyledMainContainer = styled.main`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 20px 40px;
    flex: 1;
    overflow: hidden;
`;

const MainContentTitle = styled.h2.attrs(styles => {
})`
    width: 100%;
    text-align: center;
    color: ${({styles}) => styles.firstBlue};
`;

const CenteredButton = styled(Button)`
    position: absolute;
    top: calc(50% - 25px);
    left: calc(50% - 100px);
    min-width: 200px;
    height: 50px;
`;

const MainPage: React.FC = (): JSX.Element => {
    const {activeNotification, setActiveNotification} = useContext(NotificationContext);

    const handleButtonClick = () => {
        const notificationType: string = (new Date().getTime() % 2) === 0 ? "ADVERT_1" : "ADVERT_2";         
        setActiveNotification(notificationType);
    }
	
	return(
        <StyledMainContainer data-test-id={componentsKeys.MAIN_PAGE_CONTAINER}>
            {activeNotification ? <Notification notificationId={activeNotification}/> : null}
            <MainContentTitle styles={globalStyles}>KENMEI LANDING PAGE TEST </MainContentTitle>            
            <ImageContainer>
                <img alt="graphics" src="/images/graphics1.jpg"/>
                <CenteredButton label="Check notifications!" onClick={() => handleButtonClick()}/>
                <span>Photo by Stephen Dawson on Unsplash</span>
            </ImageContainer>
        </StyledMainContainer>
    );
};

export default MainPage;