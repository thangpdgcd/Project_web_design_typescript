import React, { useState } from "react";
import { Flex, Layout } from "antd";
import Sidebar from "./components/sidebar";
import Introduction from "./pages/introduction";
import "./App.scss";
const App = () => {
  //B1
  const [CurrentPage, setCurrentPage] = useState<React.ComponentType>(
    () => Introduction
  );

  return (
    <>
      <div style={{ display: "flex", height: "100vh" }}>
        <Layout.Sider className='app-container' style={{ flex: "1" }}>
          <div className='sidebar-container'>
            {/* B2 */}
            <Sidebar setCurrentPage={setCurrentPage} />
          </div>
        </Layout.Sider>
        <Layout.Content>
          <div className='content-container'>
            {CurrentPage ? <CurrentPage /> : <div>Page not found</div>}
          </div>
          {/* B3 */}
        </Layout.Content>
      </div>
    </>
  );
};
export default App;
