import PlatformRouter from "./PlatformRouter";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms";

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  
  return (
    <>
      <PlatformRouter/>
    </>
  );
}

export default App;
