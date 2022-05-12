

export const NotificationMessage = (() => {
    const messages: IKeyMap = {
        ADVERT_1: "Mensaje con notificación tipo 1",
        ADVERT_2: "Mensaje con notificación tipo 2"
    };

    const getMessage = (id: string) => {
        const message: string = messages[id] || ""; 
        return message;
    }
    return getMessage;
})();

export const NOTIFICATION_LIVE_TIME = 3000;