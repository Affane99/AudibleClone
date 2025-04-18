import { AudioPlayer, useAudioPlayer } from "expo-audio";
import { createContext, PropsWithChildren, useContext, useState } from "react";

import dummyBooks from '@/dummyBooks';
import { Book } from "@/types/Book";

type PlayerContextType = {
    player: AudioPlayer;
    book: Book | null;
    setBook: (book: Book) => void;
}
const PlayerContext = createContext<PlayerContextType>({} as PlayerContextType);

export default function PlayerProvider({ children }: PropsWithChildren) {
    const [book, setBook] = useState<Book | null>(null);

    const player = useAudioPlayer({ uri: book?.audio_url });
    return (
        <PlayerContext.Provider value={{ player, book, setBook }}>
            {children}
        </PlayerContext.Provider>
    );
}

export const usePlayer = () => {
    const context = useContext(PlayerContext);
    if (!context) {
        throw new Error("usePlayer must be used within a PlayerProvider");
    }
    return context;
}