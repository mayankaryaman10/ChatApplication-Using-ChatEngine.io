import {PrettyChatWindow} from 'react-chat-engine-pretty'
const ChatsPage = (props) => {
    return(
        <div style = {{height: '100vh'}}>
            <PrettyChatWindow
            projectId='0514923d-1766-4ae3-bd11-d5ffd1e38528'
            username={props.user.username}
            secret={props.user.secret}
            style={{height:'100%'}}
            />
        </div>
    )
}

// import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

// const ChatsPage = (props) =>{
//     const chatProps = useMultiChatLogic(
//         '0514923d-1766-4ae3-bd11-d5ffd1e38528',
//         props.user.username, 
//         props.user.secret
//     );
//     return(
//     <div style = {{height: '100vh'}}>
//         <MultiChatSocket {...chatProps} />
//         <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
//     </div>
//     )
// }
export default ChatsPage
