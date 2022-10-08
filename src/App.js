import React from "react";
import TopNavigation from "./components/TopNavigtion/TopNavigation";
import TopBanner from "./components/TopBaner/TopBanner";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
function App() {
  return (
      <div>
          <TopNavigation/>
          <TopBanner/>
          <Services/>
          <Footer/>

      </div>

  );
}

export default App;
