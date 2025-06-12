import React from "react";
import {
  FileTextOutlined,
  DeleteOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import "./layoutsearchsidebar.scss";

interface RecentlyOpenedItem {
  title: string;
  path: string;
  children?: string;
}

interface RecentlyOpenedProps {
  items: RecentlyOpenedItem[];
  onClear: () => void;
  onBack: () => void;
  isSearchFocused: boolean;
  searchTerm: string;
  filteredResults: RecentlyOpenedItem[];
  onItemClick: (item: RecentlyOpenedItem) => void;
}

const RecentlyOpened: React.FC<RecentlyOpenedProps> = ({
  items,
  onClear,
  onBack,
  searchTerm,
  filteredResults,
  onItemClick,
}) => {
  const displayedItems = searchTerm ? filteredResults : items;

  return (
    <div className='recently-opened grid'>
      <div className='section-title'>{(searchTerm = "RECENTLY OPENED")}</div>

      <ul className='item-list'>
        {displayedItems.map((item, index) => (
          <li
            className='item'
            key={index}
            onClick={() => onItemClick(item)}
            style={{ cursor: "pointer" }}>
            <FileTextOutlined className='file-icon' />
            <div className='details'>
              {searchTerm && <div className='label'> Docs</div>}
              <div className='path'>
                {item.path}{item.title}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className='footer-actions'>
        <div className='action back' onClick={onBack}>
          <LeftOutlined />
          <span>Back to components</span>
          <span className='shortcut'>ESC</span>
        </div>
        <div className='action clear' onClick={onClear}>
          <DeleteOutlined />
          <span>Clear history</span>
        </div>
      </div>
    </div>
  );
};

export default RecentlyOpened;
