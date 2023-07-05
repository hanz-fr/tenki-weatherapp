"use client";

import { createContext, useContext, Dispatch, SetStateAction, useState } from 'react';

interface Props {
    children: React.ReactNode;
}

interface TimeContextProps {
    time: string,
    setTime: Dispatch<SetStateAction<string>>
}

const TimeContext = createContext<TimeContextProps>({
    time: '',
    setTime: (): string => '',
});

export const GlobalTimeContextProvider: React.FC<Props> = ({ children }) => {
    const [time, setTime] = useState('');

    return (
        <TimeContext.Provider value={{ time, setTime }}> 
            {children}
        </TimeContext.Provider>
    )
}

export const useGlobalContext = () => useContext(TimeContext);