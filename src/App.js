import { Wallet } from "./Component/Create_wallet";
import { Mask } from "./Component/Mask";
import { Profile } from "./Component/Profile";
import { Header } from "./Component/Header";
import Feed from "./Component/feed";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Amit ka App";
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
