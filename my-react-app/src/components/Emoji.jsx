import { useEmojiContext } from "../context/EmojiContext"

function Emoji() {
    const {emoji, handleSwitchEmoji} = useEmojiContext();
    // const [emoji, setEmoji] = useState('😊')

    // const handleSwitchEmoji = () => {
    //     let newEmoji = emoji === '😊' ? "😒" : "😊"
    //     setEmoji(newEmoji)
    // }

    return (
        <div className="Emoji componentBox">
            Emoji: {emoji}
            <button onClick={handleSwitchEmoji}>switchEmoji</button>
        </div>
    )
}

export default Emoji