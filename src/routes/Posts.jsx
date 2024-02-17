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
