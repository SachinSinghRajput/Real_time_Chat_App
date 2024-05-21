import { useEffect } from "react";
import Chat from "./components/chat/Chat";
import Details from "./components/details/Details";
import List from "./components/list/List";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import { auth } from "./lib/firebase";
import { useUserStore } from "./lib/userStore";
import { onAuthStateChanged } from "firebase/auth";
import { useChatStore } from "./lib/chatStore";
const App = () => {
  const {currentUser,isLoading,fetchUserInfo} = useUserStore();
  const {chatId} = useChatStore();

  useEffect(()=>{

    const unSub= onAuthStateChanged(auth,(user)=>{
      if (user) {
        fetchUserInfo(user.uid);
      } else {
        fetchUserInfo(null); // Handle case where user is null
      }
    });
    return () =>{
      unSub();
    };

  },[fetchUserInfo]);

  if(isLoading) return <div className="loading">Loading...</div>
  return (
    <div className='container'>
      { currentUser ? (
      <>
          <List/>
          {chatId&&<Chat/>}
         {chatId&&<Details/>}
      </>
    ) : (
        <Login/>
      ) }
      <Notification/>
      </div>
  );
};

export default App ; 