import UnorderedList from "./components/UnorderedList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";

function App() {
  const [modalIsVisible, setModalIsVisible]=useState(false);

  function showModalHandler(){
    setModalIsVisible(true);
  }
  function hideModalHandler(){
    setModalIsVisible(false);
 }
  return<>
    <MainHeader onCreatePost={showModalHandler}/>
    <main>
      <UnorderedList willPost={modalIsVisible} onStopPosting={hideModalHandler}></UnorderedList>
    </main>
  </>
}

export default App;
