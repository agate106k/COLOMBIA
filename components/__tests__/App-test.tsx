type Messages = {
    id: number;
    pic: HTMLImageElement;
    title: string;
    message: string;
};

export const messages_list: Partial<Messages>[] = [
    {
        id: 1,
        pic: require('../assets/images/matching-app-icon.png'),
        title: 'Amelia, 27',
        message: "Let's get to your favorite restaurant.",
    },
    {
        id:2,
        pic: require('../assets/images/favicon.png'),
        title: 'John, 22',
        message: "Hej.",
    },
];



