import { useEffect } from "react";
import { Header } from "./Component/Header";
import { Mask } from "./Component/Mask";
import { Profile } from "./Component/Profile";
import { Routes, Route } from "react-router-dom";
import { Wallet } from "./Component/CreateWallet";
import Feed from "./Component/Feed";

function App() {
  useEffect(() => {
    document.title = "React App";
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/mask" element={<Mask />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </div>
  );
}

export default App;
