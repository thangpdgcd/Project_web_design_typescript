import React, { useState } from "react";
import { Layout } from "antd";

import Sidebar from "./components/sidebar";
import Introduction from "./pages/introduction/introduction";
import QuickStart from "./pages/quickstart/quickstart";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  const [CurrentPage, setCurrentPage] = useState<React.ComponentType>(
    () => Introduction
  );

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Layout.Sider className='app-container' style={{ flex: "1" }}>
        <div className='sidebar-container'>
          <Sidebar setCurrentPage={setCurrentPage} />
        </div>
      </Layout.Sider>

      <Layout.Content>
        <div className='content-container'>
          {CurrentPage ? <CurrentPage /> : <div>Page not found</div>}
        </div>
      </Layout.Content>
    </div>
  );
};

export default App;
