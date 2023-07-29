import React, { useEffect, useState } from 'react';
import "./Feed.css";
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import app from './fb';

// import database from './firebase';
import { doc, getDocs,onSnapshot, collection, query} from "firebase/firestore";
import { getFirestore } from 'firebase/firestore';


function Feed() {

  const [posts,setPosts]=useState([]);
    
    // useEffect(()=>{
    // app.collection("posts").onSnapshot(snapshot=>(
    //   setPosts(snapshot.docs.map(doc=>({id:doc.id,data:doc.data()})))
    // ))
    // },[])



    useEffect(() => {
      getDocs(collection(getFirestore(app), "posts")).then((querySnapshot) => {
        setPosts( querySnapshot.docs.map(d => d.data()));
        
      });
    }, [])
    


  return (
    <div className="feed">
      <StoryReel/>
      <MessageSender/>
      {/* <Post
      profilePic="https://lh3.googleusercontent.com/ogw/AGvuzYYxc9bl_63hFPyKEh1gdtpuFILxpnk1huAIvmnvTQ=s32-c-mo"
      message="kaam vayo hai"
      timestamp="Yo xai timestamp ko laagi"
      username="Raskin Ewaram"
      image="https://images1.wionews.com/images/wion/900x1600/2023/6/25/1687694691463_PeakyBlinders.jpg"
      />
      <Post
      profilePic="https://lh3.googleusercontent.com/ogw/AGvuzYYxc9bl_63hFPyKEh1gdtpuFILxpnk1huAIvmnvTQ=s32-c-mo"
      message="kaam vayo hai"
      timestamp="Yo xai timestamp ko laagi"
      username="Raskin Ewpoouaram"
      /> */}
{posts.map((post)=>{
console.log("post ",post)
return <Post 
  key={post.id}
  profilePic={post.profilePic}
  message={post.message}
  timestamp={post.timestamp}
  username={post.username}
  image={post.image}
  />
}
  
)}

    </div>
  )
}

export default Feed
