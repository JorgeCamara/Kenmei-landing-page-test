import React from 'react';
import Header from './containers/Header';
import Footer from './containers/Footer';
import MainPage from './containers/MainPage';
import styled from 'styled-components';
import NotificationProvider from './state/providers/NotificationProvider';
import { componentsKeys } from './constants/componentKeys';

const AppContainer = styled.div`
	height: 100%;
	width: 100%;
	position: absolute;
	display: flex;
	flex-direction: column;
`;

const App: React.FC = (): JSX.Element => {
	return (
        <NotificationProvider>
            <AppContainer data-testid={componentsKeys.APP_CONTAINER}>
                <Header />
                <MainPage />
                <Footer />			
            </AppContainer>
        </NotificationProvider>
	);
}

export default App;
