interface IKeyMap{
    [key: string]: string
}

interface IButtonProps{
    label: string;
    className?: string;
    onClick: () => void;
    disabled?: boolean;
}

interface INotificationContext{
    activeNotification: string;
    setActiveNotification: (notificationId: string) => void;
}

interface INotificationMessageProps{
    notificationId: string;
    onNotificationExpired?: () => void;
}

interface IProviderProps{
    children: JSX.Element;
}