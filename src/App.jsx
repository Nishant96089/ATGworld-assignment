import "./App.css";
import Navbar from "./components/Navbar";
import Display from "./components/Display";
import Togglebar from "./components/Togglebar";
import PostContainer from "./components/PostContainer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Display></Display>
      <Togglebar></Togglebar>
      <PostContainer></PostContainer>
    </>
  );
}

export default App;
