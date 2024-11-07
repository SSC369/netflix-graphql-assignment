import React from "react";
import { observer } from "mobx-react-lite";

import Header from "./components/Header";
import Episodes from "./pages/Episodes";
import Hero from "./components/Hero";

const App: React.FC = observer(() => {
  return (
    <div className="bg-primary">
      <Header />
      <Hero />
      <Episodes />
    </div>
  );
});

export default App;
