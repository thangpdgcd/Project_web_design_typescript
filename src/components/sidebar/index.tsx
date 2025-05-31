import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Layout, Menu, Image } from "antd";
import { FolderOpenOutlined, FileTextOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import SubMenu from "antd/es/menu/SubMenu";

// Assets
import logo from "../../assets/img/logo2.svg";
import iconsearch from "../../assets/img/icons8-search.svg";

// Sidebar Data
import sidebarItems from "./datasidebar";

// Pages – Concepts
import Introduction from "../../pages/introduction/introduction";
import QuickStart from "../../pages/quickstart/quickstart";
import StylingComponent from "../../pages/stylingcomponents/styling_component";
import PositioningComponents from "../../pages/positioningcomponents/positioning_components";

// Pages – Server-Side Rendering
import BasicSetup from "../../pages/basicsetup/basic_setup";
import NestjsAppDirSetup from "../../pages/Nestjsappdirsetup/nesjs_app_dir_setup";
import NestjsPagesSetup from "../../pages/nestjspages-setup/nestjs_pages_setup";
import ReactRouterSetup from "../../pages/react_router_setup/react_router_setup";
import LimitationsWithPortals from "../../pages/Limitationswithportals/limitations_with_potals";

// Pages – Accessibility
import AdvancedConfiguration from "../../pages/advanged_configuration/advangec_onfiguration";
import AdvancedStylingTechniques from "../../pages/advangedstylingtechniques/advanced_styling_techniques";
import BrowserSupportMatrix from "../../pages/browersuportmatrix";
import BuildTimeStyles from "../../pages/building_time_style/building_time_style";
import CustomizingWithSlots from "../../pages/customizing_component/customizing_component";
import Theming from "../../pages/thememing/thememing";

// Pages – Migration
import GettingStarted from "../../pages/gettingstarted/getting_started";
import KeeppingDesign from "../../pages/keepingdesignconsistent/keepping_design";
import HandlingBreakingChanges from "../../pages/handlebreakingchange/handlebreakingchange";

// Pages – Theme
import BorderRadii from "../../pages/borderradi/border_radi";
import Colors from "../../pages/colors/colors";
import Fonts from "../../pages/fonts/fonts";
import Shadows from "../../pages/shadows/shadows";
import Spacing from "../../pages/spacing/spacing";
import StrokeWidths from "../../pages/stroke_widths/stroke_widths";
import Typography from "../../pages/typography/typography";
import MediaObjectPage from "../../pages/media_object/media_ocject";

// Pages – Components
import Accordion from "../../pages/accordion/accordion";
import Avatar from "../../pages/avatar/avatar";
import Badge from "../../pages/badge/badge";
import AvatarGroup from "../../pages/avatar_group/avatar_group";

// Styles
import "./index.scss";

interface SidebarProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<React.ComponentType>>;
}

//props: truyền dữ liệu truyền sidebar qua app
const Sidebar: React.FC<SidebarProps> = ({ setCurrentPage }) => {
  const renderMenuItems = (items: any[]): React.ReactNode =>
    items.map((item) => {
      const childItems =
        item.key === "concepts" ||
        item.key === "theme" ||
        item.key === "components"
          ? item.children
          : item.key === "developer" ||
            item.key === "migration" ||
            item.key === "recipes"
          ? item.childrenconcepts
          : item.key === "server-side-rendering" || item.key === "accessibility"
          ? item.childrenconcepts_developer
          : item.children;

      if (childItems && Array.isArray(childItems)) {
        return (
          <SubMenu
            key={item.key}
            title={
              <span
                className={`submenu-title-component flex items-center gap-3 ${
                  item.key === "concepts" ||
                  item.key === "theme" ||
                  item.key === "components"
                    ? "submenu-title-lg"
                    : "submenu-title-sm"
                }`}>
                <span
                  className={`toggle ${
                    openKeys.includes(item.key) ? "open" : ""
                  }`}
                />

                {item.key === "developer" && <FolderOpenOutlined />}
                {item.key === "migration" && <FolderOpenOutlined />}
                {item.key === "recipes" && <FolderOpenOutlined />}
                {item.key === "server-side-rendering" && <FolderOpenOutlined />}
                {item.key === "server-side-accessibility" && (
                  <FolderOpenOutlined />
                )}
                {item.title}
              </span>
            }>
            {renderMenuItems(childItems)}
          </SubMenu>
        );
      }

      return (
        <Menu.Item
          key={item.key}
          icon={<FileTextOutlined />}
          onClick={() => {
            const Component = componentMap[item.link];
            if (Component) setCurrentPage(() => Component);
          }}>
          <Link to={item.link}>{item.title}</Link>
        </Menu.Item>
      );
    });

  // flatten sidebar items để tìm kiếm

  const flattenSidebar = (items: any[], term: string, results: any[] = []) => {
    for (const item of items) {
      const match =
        item.title?.toLowerCase().includes(term.toLowerCase()) ||
        item.key?.toLowerCase().includes(term.toLowerCase());
      if (match && item.link) {
        results.push({ key: item.key, title: item.title, link: item.link });
      }

      [
        item.children,
        item.childrenconcepts,
        item.childrenconcepts_developer,
      ].forEach((list) => {
        if (Array.isArray(list)) {
          flattenSidebar(list, term, results);
        }
      });
    }
    return results;
  };

  //search
  const [searchTerm, setSearchTerm] = useState("");

  // Quản lý trạng thái submenu mở
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  // Kết quả lọc tìm kiếm
  const filteredResults = searchTerm
    ? flattenSidebar(sidebarItems, searchTerm)
    : [];

  // map link -> component
  const componentMap: Record<string, React.ComponentType> = {
    "/introduction": Introduction,
    "/quickstart": QuickStart,
    "/styling": StylingComponent,
    "/positioning": PositioningComponents,
    "/basicsetup": BasicSetup,
    "/limitations": LimitationsWithPortals,
    "/nest.js-appDir-setup": NestjsAppDirSetup,
    "/nest.js-pages-setup": NestjsPagesSetup,
    "/react-router": ReactRouterSetup, // Bạn cần đảm bảo component này đã được import
    "/advanced-configuration": AdvancedConfiguration,
    "/advanced-styling-techniques": AdvancedStylingTechniques,
    "/browser-support-matrix": BrowserSupportMatrix,
    "/build-time-styles": BuildTimeStyles,
    "/fonts": Fonts,
    "/customizing-with-slots": CustomizingWithSlots,
    "/theming": Theming,
    "/media-objects": MediaObjectPage,
    "/borderradi": BorderRadii,
    "/colors": Colors,
    "/shadows": Shadows,
    "/accordion": Accordion,
    "/avatar": Avatar,
    "/avatargroup": AvatarGroup,
    "/typography": Typography,
    "/getting-started": GettingStarted,
    "/keeping-design-consistent": KeeppingDesign,
    "/handling-breaking-changes": HandlingBreakingChanges,
    "/spacing": Spacing,
    "/stroke_widths": StrokeWidths,
    "/badges": Badge,
  };

  // Xử lý toggle submenu
  const onOpenChange = (keys: string[]) => {
    // cho phép nhiều submenu mở cùng lúc, hoặc chỉ 1 submenu mở
    // Ở đây ta cho phép nhiều submenu cùng mở
    setOpenKeys(keys);
  };

  return (
    <BrowserRouter>
      <Layout style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
        <Layout.Sider width={280} theme='light' className='sidebar'>
          <div className='div-header'>
            <div className='img-sidebar'>
              <Image width={150} src={logo} />
            </div>
            <div className='search'>
              <img src={iconsearch} alt='search' className='iconsearch' />
              <input
                type='text'
                placeholder='Find Component...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className='menu-sidebar'>
            {searchTerm ? (
              <Menu mode='inline' theme='light'>
                {filteredResults.map((item) => (
                  <Menu.Item
                    key={item.key}
                    icon={<FileTextOutlined />}
                    onClick={() => {
                      const Component = componentMap[item.link];
                      if (Component) setCurrentPage(() => Component);
                    }}>
                    <Link to={item.link}>{item.title}</Link>
                  </Menu.Item>
                ))}
              </Menu>
            ) : (
              <Menu
                mode='inline'
                theme='light'
                openKeys={openKeys}
                onOpenChange={onOpenChange}>
                {renderMenuItems(sidebarItems)}
              </Menu>
            )}
          </div>
        </Layout.Sider>
      </Layout>
    </BrowserRouter>
  );
};

export default Sidebar;
