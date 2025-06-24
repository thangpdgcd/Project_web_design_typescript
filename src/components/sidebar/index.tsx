import React, { useState, useRef, useEffect } from "react";
import { Layout, Menu, Image } from "antd";
import { FolderOpenOutlined, FileTextOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import SubMenu from "antd/es/menu/SubMenu";
import { useTranslation } from "react-i18next"; // ✅ Thêm dòng này
import logo from "../../assets/img/logo2.svg";
import iconsearch from "../../assets/img/icons8-search.svg";
import sidebarItems from "./datasidebar";
import docItems from "./datasearchsidebar";
// Imports pages and styles...
import "./index.scss";

import Introduction from "../../pages/introduction";
import QuickStart from "../../pages/quickstart";
import StylingComponent from "../../pages/stylingcomponents/styling_component";
import PositioningComponents from "../../pages/positioningcomponents";
import BasicSetup from "../../pages/basicsetup/basic_setup";
import NestjsAppDirSetup from "../../pages/Nestjsappdirsetup/nesjs_app_dir_setup";
import NestjsPagesSetup from "../../pages/nestjspages-setup/nestjs_pages_setup";
import ReactRouterSetup from "../../pages/react_router_setup/react_router_setup";
import LimitationsWithPortals from "../../pages/Limitationswithportals/limitations_with_potals";
import AdvancedConfiguration from "../../pages/advanged_configuration";
import AdvancedStylingTechniques from "../../pages/advangedstylingtechniques";
import BrowserSupportMatrix from "../../pages/browersuportmatrix";
import BuildTimeStyles from "../../pages/building_time_style/building_time_style";
import CustomizingWithSlots from "../../pages/customizing_component";
import Theming from "../../pages/thememing/thememing";
import GettingStarted from "../../pages/gettingstarted/getting_started";
import KeeppingDesign from "../../pages/keepingdesignconsistent/keepping_design";
import HandlingBreakingChanges from "../../pages/handlebreakingchange/handlebreakingchange";
import BorderRadii from "../../pages/borderradi/border_radi";
import Colors from "../../pages/colors/colors";
import Fonts from "../../pages/fonts";
import Shadows from "../../pages/shadows/shadows";
import Spacing from "../../pages/spacing/spacing";
import StrokeWidths from "../../pages/stroke_widths/stroke_widths";
import Typography from "../../pages/typography/typography";
import MediaObjectPage from "../../pages/media_object/media_ocject";
import Accordion from "../../pages/accordion";
import Avatar from "../../pages/avatar";
import Badge from "../../pages/badge/badge";
import AvatarGroup from "../../pages/avatar_group";
import RecentlyOpened from "../layout";
interface SidebarProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<React.ComponentType>>;
}

// Map links to their corresponding components
const Sidebar: React.FC<SidebarProps> = ({ setCurrentPage }) => {
  const { t } = useTranslation(); // ✅ Lấy hàm dịch
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [recentlyOpened, setRecentlyOpened] = useState<any[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

      const translatedTitle = t(`sidebar.${item.key}`, item.title) as string;

      if (childItems && Array.isArray(childItems)) {
        const showFolderIcon = !["concepts", "theme", "components"].includes(
          item.key
        ); // ✅ kiểm soát icon

        return (
          <SubMenu
            key={item.key}
            title={
              <span
                className={`submenu-title-component flex items-center gap-3 ${
                  ["concepts", "theme", "components"].includes(item.key)
                    ? "submenu-title-lg"
                    : "submenu-title-sm"
                }`}>
                <span
                  className={`toggle ${
                    openKeys.includes(item.key) ? "open" : ""
                  }`}
                />
                {showFolderIcon && <FolderOpenOutlined />}{" "}
                {/* ✅ chỉ render nếu cần */}
                {translatedTitle}
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
          onClick={() => handleItemClick(item)}>
          <Link to={item.link}>
            {t(`sidebar.${item.key}`, item.title).toString()}
          </Link>
        </Menu.Item>
      );
    });

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

  const searchSidebar = (items: any[], term: string, results: any[] = []) => {
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
        if (Array.isArray(list)) searchSidebar(list, term, results);
      });
    }
    return results;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearchFocused(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleItemClick = (item: any) => {
    const Component = componentMap[item.link];
    if (Component) {
      setCurrentPage(() => Component);
      setRecentlyOpened((prev) => {
        const exists = prev.find((i) => i.link === item.link);
        if (exists) return prev;
        return [...prev, item];
      });
      setSearchTerm("");
      setIsSearchFocused(false);
      setMobileMenuOpen(false);
    }
  };

  const filteredResults = searchTerm
    ? searchSidebar(docItems, searchTerm)
    : searchSidebar(sidebarItems, searchTerm);

  const onOpenChange = (keys: string[]) => {
    setOpenKeys(keys);
  };

  const handleClearHistory = () => setRecentlyOpened([]);
  const handleBack = () => setIsSearchFocused(false);

  return (
    <Layout style={{ backgroundColor: "#fff" }}>
      {/* Nút mở menu khi ở mobile */}
      {!mobileMenuOpen && (
        <div className='mobile-toggle' onClick={() => setMobileMenuOpen(true)}>
          ☰
        </div>
      )}

      <Layout.Sider
        width={280}
        theme='light'
        className={`sidebar${mobileMenuOpen ? " open" : ""}`}>
        {/* Nút đóng menu (mobile only) */}
        {mobileMenuOpen && (
          <div className='close-btn' onClick={() => setMobileMenuOpen(false)}>
            ✕
          </div>
        )}

        {/* Logo + Search */}
        <div className='div-header'>
          <div className='img-sidebar'>
            <Image width={150} src={logo} />
          </div>
          <div className='search' ref={searchRef}>
            <img src={iconsearch} alt='search' className='iconsearch' />
            <input
              type='text'
              placeholder={t("sidebar.search_placeholder")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
            />
            {isSearchFocused && (
              <div className='search-panel block'>
                <div className='search-title'>
                  <RecentlyOpened
                    items={recentlyOpened}
                    onClear={handleClearHistory}
                    onBack={handleBack}
                    isSearchFocused={isSearchFocused}
                    searchTerm={searchTerm}
                    filteredResults={filteredResults}
                    onItemClick={handleItemClick}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Menu chính */}
        <div className={`menu-sidebar ${mobileMenuOpen ? "mobile-open" : ""}`}>
          {!isSearchFocused &&
            (searchTerm ? (
              <Menu mode='inline' theme='light'>
                {filteredResults.map((item) => (
                  <Menu.Item
                    key={item.key}
                    icon={<FileTextOutlined />}
                    onClick={() => handleItemClick(item)}>
                    <Link to={item.link}>{t(item.title)}</Link>
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
            ))}
        </div>
      </Layout.Sider>
    </Layout>
  );
};

export default Sidebar;
