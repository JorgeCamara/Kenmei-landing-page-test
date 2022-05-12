import React, { createContext, useState } from 'react';

export const NotificationContext = createContext<INotificationContext>({
    activeNotification: "",
    setActiveNotification: () => {}
});

const NotificationProvider: React.FC<IProviderProps> =({children}) => {
    const [activeNotification, setActiveNotification] = useState<string>("");
    const providerValue = {activeNotification, setActiveNotification};

    return(
        <NotificationContext.Provider value={providerValue}>
            {children}
        </NotificationContext.Provider>
    )
};

export default NotificationProvider;