import React, { useState } from "react";
import { Layout } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Introduction from "./pages/introduction/introduction";
import QuickStart from "./pages/quickstart/quickstart";
import StylingComponent from "./pages/stylingcomponents/styling_component";
import PositioningComponents from "./pages/positioningcomponents/positioning_components";
import BasicSetup from "./pages/basicsetup/basic_setup";
import LimitationsWithPortals from "./pages/Limitationswithportals/limitations_with_potals";
import NestjsAppDirSetup from "./pages/Nestjsappdirsetup/nesjs_app_dir_setup";
import NestjsPagesSetup from "./pages/nestjspages-setup/nestjs_pages_setup";
import ReactRouterSetup from "./pages/react_router_setup/react_router_setup";
import AdvancedConfiguration from "./pages/advanged_configuration/advangec_onfiguration";
import AdvancedStylingTechniques from "./pages/advangedstylingtechniques/advanced_styling_techniques";
import "./App.scss";

const App = () => {
  const [CurrentPage, setCurrentPage] = useState<React.ComponentType>(() => Introduction);
  

  return (
        <BrowserRouter>
    <div style={{ display: "flex", height: "100vh" }}>
      <Layout.Sider className='app-container' style={{ flex: "1" }}>
        <div className='sidebar-container'>
          <Sidebar setCurrentPage={setCurrentPage} />
        </div>
      </Layout.Sider>
      <Layout.Content>
          <div className='content-container'>
            <Routes>
              <Route path="/" element={<Introduction />} />
              <Route path="/quickstart" element={<QuickStart />} />
              <Route path="/styling" element={<StylingComponent />} />
              <Route path="/positioning" element={<PositioningComponents />} /> 
              <Route path="/basicsetup" element={<BasicSetup />} />
              <Route path="/limitations" element={<LimitationsWithPortals />} />
              <Route path="/nest.js-appDir-setup" element={<NestjsAppDirSetup />} />
              <Route path="/nest.js-pages-setup" element={<NestjsPagesSetup />} />
              <Route path="/react-router" element={<ReactRouterSetup />} />
              <Route path="/advanced-configuration" element={<AdvancedConfiguration />} />
              <Route path="/advanced-styling-techniques" element={<AdvancedStylingTechniques />} />
              {/* Thêm các route khác tại đây */}
              <Route path="*" element= {CurrentPage ? <CurrentPage /> : <div>Page not found</div>} />
            </Routes>
    
        </div>
      </Layout.Content>
      </div>
      </BrowserRouter>
  );
};

export default App;
