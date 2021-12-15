import Homepage from "./pages/homepage/Homepage";
import styled from "styled-components";
import tw from "twin.macro";
import { Navbar } from "./components/navbar/Navbar";

const AppContainer = styled.div`
  ${tw`
    bg-dark-blue
    w-screen
    h-screen
    flex
    flex-col
  `}
`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Homepage />
    </AppContainer>
  );
}

export default App;
