import React, { useContext, useState, createContext } from "react";
// import { createContext, useState, useContext  } from "react";

// 1. Create the context
 const EmojiContext = createContext();

//use top level...
export const EmojiProvider = ({children}) => {
    // store the current user in state at the top level
    const [currentEmoji, setEmoji] = useState('😊');

    // sets emoji object in state, shared via context
    const handleUpdateEmoji = (newEmoji) => {
        setEmoji(newEmoji);
    }
    //Switched Emoji
    const handleSwitchEmoji = () => {
        setEmoji ((prevEmoji) => (prevEmoji === '😊' ? "😒" : "😊")); 
        setEmoji(newEmoji)
    }


    // 2. Provide the context.
    // The Provider component of any context (UserContext.Provider)
    // sends data via its value prop to all children at every level.
    // We are sending both the current user and an update function
    return (
    <EmojiContext.Provider value={{currentEmoji, handleUpdateEmoji, handleSwitchEmoji}}>
    {props.children}
    </EmojiContext.Provider>
    );
}   
    // 3. Use the context. This custom hook allows easy access
    // of this particular context from any child component
    export const useEmojiContext = () => {
    return useContext(EmojiContext);
}