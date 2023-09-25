import { MultiChatSocket,MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'b2bc9b79-9fd2-4561-8c9d-a2f67cad0d66', 
        props.user.username, 
        props.user.secret
    );
    return (
            <div style={{ height: '100vh' }}>
                <MultiChatSocket {...chatProps} />
                <MultiChatWindow {...chatProps} style={{ height: '100%'}} />
            </div>
        )
}
export default ChatsPage