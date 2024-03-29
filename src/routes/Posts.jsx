import UnorderedList from "../components/UnorderedList";
import { useState } from "react";
import { Outlet } from "react-router-dom";


function Posts() {
  return<>
    <Outlet/>
    <main>
      <UnorderedList></UnorderedList>
    </main>
  </>
}

export default Posts;

export async function loader(){
  const response= await fetch('http://localhost:8080/posts')
  const resData= await response.json();
  return resData.posts;
}