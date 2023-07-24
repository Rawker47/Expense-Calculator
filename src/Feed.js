import React from 'react';
import "./Feed.css";
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
  return (
    <div className="feed">
      <StoryReel/>
      <MessageSender/>
      <Post
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
      />


    </div>
  )
}

export default Feed
