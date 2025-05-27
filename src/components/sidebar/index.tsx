import { BrowserRouter } from "react-router-dom";
import { Layout, Menu } from "antd";
import { FolderOpenOutlined, FileTextOutlined } from "@ant-design/icons";
import Introduction from "../../pages/introduction/index"; // Ensure the path is correct
import { Link } from "react-router-dom"; // Import Link component
import SubMenu from "antd/es/menu/SubMenu";
import { Image } from "antd";
import "./index.scss"; // Adjust the path to your CSS file
import logo from "../../assets/img/logo2.svg"; // Adjust the path to your logo file
import iconsearch from "../../assets/img/icons8-search.svg";
import QuickStart from "../../pages/quickstart";
import StylingComponent from "../../pages/stylingcomponents/styling_component";
import positioningComponents from "../../pages/positioningcomponents/positioning_components";
import BasicSetup from "../../pages/basicsetup/basic_setup";
import NestjsAppDirSetup from "../../pages/Nestjsappdirsetup/nesjs_app_dir_setup";
import NestjsPagesSetup from "../../pages/nestjspages-setup/nestjs_pages_setup";
import GettingStarted from "../../pages/gettingstarted/getting_started";
import KeeppingDesign from "../../pages/keepingdesignconsistent/keepping_design";
import BorderRadii from "../../pages/borderradi/border_radi";
import Colors from "../../pages/colors/colors";
import Fonts from "../../pages/fonts/fonts";
import Shadows from "../../pages/shadows/shadows";
import Spacing from "../../pages/spacing/spacing";
import StrokeWidths from "../../pages/stroke_widths/stroke_widths";
import Stypography from "../../pages/stypography/stypography";
import ThemeDesigner from "../../pages/themedesigners/themedesigners";
import React, { useState } from "react"; // Import React and useState hook

// Adjust the path to your search icon file
interface SidebarProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<React.ComponentType>>;
}

const Sidebar: React.FC<SidebarProps> = ({ setCurrentPage }) => {
  //Fields search
  let Sidebar = ([] = [
    {
      text: "Introduction",
      link: "/introduction",
    },
    {
      text: "Concepts",
      link: "/concepts",
    },
    {
      text: "Components",
      link: "/components",
    },
  ]);

  const searchSidebar = () => {
    Sidebar.filter((item) => {
      console.log(item.link);
      return item.link && item.link.startsWith("/");
    });
  };

  const [isOpen, setIsOpen] = useState(false); // State to manage the open/close status of the submenu

  const [openKeys, setOpenKeys] = useState<{ [key: string]: boolean }>({
    sub1: false,
    sub1_1: false, //developer
    sub2: false,
    sub1_2: false, //migrations
    sub3: false,
    sub3_1: false, //recipes
    sub1_1_2: false, //server-side rendering
  });

  const handleToggle = (key: string) => {
    setOpenKeys((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <BrowserRouter>
      <Layout style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
        <Layout.Sider width={280} theme='light' className='sidebar'>
          <div className='div-header'>
            <div className='img-sidebar' style={{}}>
              <Image width={150} style={{}} src={logo}></Image>
            </div>
            <div className='search'>
              <img src={iconsearch} alt='search' className='iconsearch' />
              <input
                onChange={(e) => searchSidebar()}
                type='text'
                placeholder='Find Component...'
              />
            </div>
          </div>
          <div className='menu-sidebar'>
            <Menu mode='inline' theme='light' defaultSelectedKeys={["1"]}>
              {/* Introduction */}
              <SubMenu
                className='text-decoration-none  relative mr-[-20px] '
                key='sub1'
                // icon={<DownOutlined />}
                title={
                  <span className='submenu-title flex items-center gap-3'>
                    <span
                      className={`toggle ${
                        openKeys.sub1 ? "open" : ""
                      }`}></span>
                    Concepts
                  </span>
                }
                onTitleClick={() => handleToggle("sub1")} // xử lý toggle
                // xử lý toggle
              >
                {/* B */}
                <Menu.Item
                  className='ant-menu-title-content pl-[20px] ml-[10px] mr-[10px]'
                  key='introduction'
                  onClick={() => setCurrentPage(() => Introduction)}
                  icon={<FileTextOutlined />}>
                  <Link to='/introduction'>Introduction</Link>
                </Menu.Item>

                <SubMenu
                  key='sub1_1'
                  title={
                    <span className='submenu-title-child flex items-center gap-3'>
                      <span
                        className={`toggle ${
                          openKeys.sub1_1 ? "open" : ""
                        }`}></span>
                      <FolderOpenOutlined className='folderopenoutlined' />
                      Developer
                    </span>
                  }>
                  <Menu.Item
                    key='quickstart'
                    onClick={() => setCurrentPage(() => QuickStart)}
                    icon={<FileTextOutlined />}>
                    <Link to='/quickstart'>Quickstart</Link>{" "}
                  </Menu.Item>
                  <Menu.Item key='3' icon={<FileTextOutlined />}>
                    <Link
                      to='/styling'
                      onClick={() => setCurrentPage(() => StylingComponent)}>
                      Styling Components
                    </Link>{" "}
                  </Menu.Item>
                  <Menu.Item key='4' icon={<FileTextOutlined />}>
                    <Link
                      to='/positioning'
                      onClick={() =>
                        setCurrentPage(() => positioningComponents)
                      }>
                      Positioning Components
                    </Link>{" "}
                  </Menu.Item>
                  <SubMenu
                    key='sub1-1-2'
                    title={
                      <span className='submenu-title-child flex p-10 items-center gap-3'>
                        <span
                          className={`toggle ${
                            openKeys.sub1_1_2 ? "open" : ""
                          }`}></span>
                        <FolderOpenOutlined className='folderopenoutlined' />
                        Server-Side Rendering
                      </span>
                    }>
                    <Menu.Item key='5' icon={<FileTextOutlined />}>
                      <Link
                        to='/basic'
                        onClick={() => setCurrentPage(() => BasicSetup)}>
                        Basic setup
                      </Link>{" "}
                    </Menu.Item>
                    <Menu.Item key='6' icon={<FileTextOutlined />}>
                      <Link
                        to='/Limitations-with-portals'
                        onClick={() => setCurrentPage(() => BasicSetup)}>
                        Limitations with Portals
                      </Link>{" "}
                    </Menu.Item>
                    <Menu.Item key='7' icon={<FileTextOutlined />}>
                      <Link
                        to='/Nest.js-appDir-setup'
                        onClick={() => setCurrentPage(() => NestjsAppDirSetup)}>
                        Nest.js appDir setup
                      </Link>{" "}
                    </Menu.Item>
                    <Menu.Item key='7' icon={<FileTextOutlined />}>
                      <Link
                        to='/Nest.js-pages-setup'
                        onClick={() => setCurrentPage(() => NestjsPagesSetup)}>
                        Nest.js pages setup
                      </Link>{" "}
                    </Menu.Item>
                  </SubMenu>
                </SubMenu>
                <SubMenu
                  key='sub1_2'
                  title={
                    <span className='submenu-title-child flex items-center gap-3'>
                      <span
                        className={`toggle ${
                          openKeys.sub1_2 ? "open" : ""
                        }`}></span>
                      <FolderOpenOutlined className='folderopenoutlined' />
                      Migrations
                    </span>
                  }>
                  <Menu.Item key='3' icon={<FileTextOutlined />}>
                    <Link
                      to='/gettingstarted'
                      onClick={() => setCurrentPage(() => GettingStarted)}>
                      Getting Started
                    </Link>{" "}
                  </Menu.Item>
                  <Menu.Item key='3' icon={<FileTextOutlined />}>
                    <Link
                      to='/keepingdesign'
                      onClick={() => setCurrentPage(() => KeeppingDesign)}>
                      Keepping Design Consistent
                    </Link>{" "}
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key='sub1-3'
                  title={
                    <span className='submenu-title-child flex items-center gap-3'>
                      <span
                        className={`toggle   ${
                          openKeys.sub1_3 ? "open" : ""
                        }`}></span>
                      <FolderOpenOutlined className='folderopenoutlined' />
                      Recipes
                    </span>
                  }>
                  <Menu.Item key='4' icon={<FileTextOutlined />}>
                    <Link to='/quickstart'>Quickstart</Link>{" "}
                  </Menu.Item>
                </SubMenu>
              </SubMenu>

              {/* Theme */}
              <SubMenu
                key='sub2'
                title={
                  <span className='submenu-title flex items-center gap-3'>
                    <span
                      className={`toggle ${
                        openKeys.sub2 || isOpen ? "open" : ""
                      }`}></span>
                    Theme
                  </span>
                }
                onTitleClick={() => handleToggle("sub2")}>
                <Menu.Item key='2' icon={<FileTextOutlined />}>
                  <Link
                    to='/borderradi'
                    onClick={() => setCurrentPage(() => BorderRadii)}>
                    BorderRadi
                  </Link>
                </Menu.Item>
                <Menu.Item key='2' icon={<FileTextOutlined />}>
                  <Link
                    to='/colors'
                    onClick={() => setCurrentPage(() => Colors)}>
                    Colors
                  </Link>{" "}
                </Menu.Item>

                <Menu.Item key='3' icon={<FileTextOutlined />}>
                  <Link to='/fonts' onClick={() => setCurrentPage(() => Fonts)}>
                    Fonts
                  </Link>{" "}
                </Menu.Item>

                <Menu.Item key='4' icon={<FileTextOutlined />}>
                  <Link
                    to='/shadows'
                    onClick={() => setCurrentPage(() => Shadows)}>
                    Shadows
                  </Link>{" "}
                </Menu.Item>
                <Menu.Item key='5' icon={<FileTextOutlined />}>
                  <Link
                    to='/spacing'
                    onClick={() => setCurrentPage(() => Spacing)}>
                    Spacing
                  </Link>{" "}
                </Menu.Item>
                <Menu.Item key='6' icon={<FileTextOutlined />}>
                  <Link
                    to='/stroke_widths'
                    onClick={() => setCurrentPage(() => StrokeWidths)}>
                    Stroke Widths
                  </Link>{" "}
                </Menu.Item>
                <Menu.Item key='7' icon={<FileTextOutlined />}>
                  <Link
                    to='/stypography'
                    onClick={() => setCurrentPage(() => Stypography)}>
                    Stypography
                  </Link>{" "}
                </Menu.Item>
                <Menu.Item key='8' icon={<FileTextOutlined />}>
                  <Link
                    to='/themedesigner'
                    onClick={() => setCurrentPage(() => ThemeDesigner)}>
                    Theme Designer
                  </Link>{" "}
                </Menu.Item>
              </SubMenu>

              {/* components
               */}
              <SubMenu
                key='sub3'
                title={
                  <span className='submenu-title flex items-center gap-3'>
                    <span
                      className={`toggle ${
                        openKeys.sub3 ? "open" : ""
                      }`}></span>
                    Components
                  </span>
                }
                onTitleClick={() => handleToggle("sub3")}>
                <Menu.Item key='3-1' icon={<FileTextOutlined />}>
                  <Link to='/accordion'>Accordion</Link>
                </Menu.Item>
                <Menu.Item key='3-2' icon={<FileTextOutlined />}>
                  <Link to='/avatar'>Avatar</Link>{" "}
                </Menu.Item>
                <Menu.Item key='3-3' icon={<FileTextOutlined />}>
                  <Link to='/avatarGroup'>AvatarGroup</Link>{" "}
                </Menu.Item>
                <SubMenu
                  key='sub1-1'
                  title='Badge'
                  icon={<FolderOpenOutlined />}>
                  <Menu.Item key='2' icon={<FileTextOutlined />}>
                    <Link to='/badge'>badge</Link>{" "}
                  </Menu.Item>
                  <Menu.Item key='3' icon={<FileTextOutlined />}>
                    <Link to='/counter-badge'>Counterbadge</Link>{" "}
                  </Menu.Item>
                  <Menu.Item key='4' icon={<FileTextOutlined />}>
                    <Link to='/presenceBadge'>PresenceBadge</Link>{" "}
                  </Menu.Item>
                </SubMenu>
                <Menu.Item key='4-1' icon={<FileTextOutlined />}>
                  <Link to='/breadcrumb'>Breadcrumb</Link>{" "}
                </Menu.Item>
                <SubMenu
                  key='sub1-2'
                  title='Badge'
                  icon={<FolderOpenOutlined />}>
                  <Menu.Item key='4-1' icon={<FileTextOutlined />}>
                    <Link to='/button'>Button</Link>{" "}
                  </Menu.Item>
                  <Menu.Item key='4-2' icon={<FileTextOutlined />}>
                    <Link to='/compoundbutton-'>CompoundButton</Link>{" "}
                  </Menu.Item>
                  <Menu.Item key='4-3' icon={<FileTextOutlined />}>
                    <Link to='/menubuton'>MenuButon</Link>{" "}
                  </Menu.Item>
                  <Menu.Item key='4-4' icon={<FileTextOutlined />}>
                    <Link to='/splitbutton'>SplitButton</Link>{" "}
                  </Menu.Item>
                  <Menu.Item key='4-4' icon={<FileTextOutlined />}>
                    <Link to='/togglebutton'>ToggleButton</Link>{" "}
                  </Menu.Item>
                </SubMenu>
              </SubMenu>
            </Menu>{" "}
            //đặt điều kiện menu
          </div>
        </Layout.Sider>
      </Layout>
    </BrowserRouter>
  );
};

export default Sidebar;
