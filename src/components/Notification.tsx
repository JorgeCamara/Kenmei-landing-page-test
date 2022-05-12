import React, { useState, useEffect, useContext } from 'react';
import {NotificationContext} from '../state/providers/NotificationProvider';
import { componentsKeys } from '../constants/componentKeys';
import {NotificationMessage, NOTIFICATION_LIVE_TIME} from '../constants/NotificationConstants';
import styled from 'styled-components';
import {globalStyles} from '../styles/constants';


const NotificationContainer = styled.div`
    z-index: 10;
    position: fixed;
    display: flex;
    width: 100%;
    height: 100vh;
    padding: 20px 40px;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.8);
    justify-content: center;
    align-items: center;
`;

const NotificationContent = styled.div.attrs(styles=>{
})`
    width: 400px;
    height: 70px;
    padding: 8px 15px;
    background-color: ${({styles}) => styles.mainBackground};
    border: 2px solid ${({styles}) => styles.firstBlue};
    color: ${({styles}) => styles.firstBlue};
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 20px 40px -10px rgb(7 144 191 / 90%);
`;

const Notification: React.FC<INotificationMessageProps> = ({notificationId}) => {
    const [isExpired, setIsExpired] = useState<boolean>(false);
    const {setActiveNotification} = useContext(NotificationContext);
    
    /**
     * When the component is mounted, the 'isExpired' variable starts as false but we start a timer after which we will set that variable to true,
     * meaning that the notification should be hidden
     */
    useEffect(() =>{
        const startNotificationTimeout = setTimeout(setNotificationExpired, NOTIFICATION_LIVE_TIME);
        return(() => clearTimeout(startNotificationTimeout));
    }, []);

    /**
     * Each time that the variable isExpired changes, we want to check if its value is true. When true, we trigger the Provider's function to set the value
     * the value of the context, assigning an empty value to the active notification.
     */
    useEffect(() => {
        if(isExpired){
            setActiveNotification("");
        }
    }, [isExpired, setActiveNotification])

    const setNotificationExpired = () => {
        setIsExpired(true);
    };

    const message = NotificationMessage(notificationId)
    
    return(
        <NotificationContainer data-testid={componentsKeys.NOTIFICATION_MODAL}>
            <NotificationContent styles={globalStyles}>
                <span>{message}</span>
            </NotificationContent>
        </NotificationContainer>
    )
};

export default Notification;