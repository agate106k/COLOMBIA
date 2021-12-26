// import shuffleArray from './shuffleArray'

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
        title: 'JS太郎',
        message: "TS二郎と俺なら、どっちが好き？",
    },
    {
        id:2,
        pic: require('../assets/images/favicon.png'),
        title: 'React花子',
        message: "CSS完全に理解した",
    },
];