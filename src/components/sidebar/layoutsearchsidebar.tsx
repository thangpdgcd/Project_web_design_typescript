import React from "react";
import {
  FileTextOutlined,
  DeleteOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import "./layoutsearchsidebar.scss";


interface RecentlyOpenedItem {
  title: string;
  link: string;
  children?: RecentlyOpenedItem[];
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

// Đệ quy hiển thị title và children (nếu có)
const renderItems = (
  items: RecentlyOpenedItem[],
  onItemClick: (item: RecentlyOpenedItem) => void
) => {
  return items.map((item, index) => (
    <li
      className='item'
      key={index}
      onClick={() => onItemClick(item)}
      style={{ cursor: "pointer" }}>
      <FileTextOutlined className='file-icon' />
      <div className='details'>
        <div className='label'>Docs</div>
        <div className='path'>
          {item.title}
          {item.link}
        </div>
      </div>
      {item.children && item.children.length > 0 && (
        <ul className='item-list-children'>
          {renderItems(item.children, onItemClick)}
        </ul>
      )}
    </li>
  ));
};

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
      <div className='section-title'>
        {searchTerm ? "SEARCH RESULTS" : "RECENTLY OPENED"}
      </div>

      <ul className='item-list'>{renderItems(displayedItems, onItemClick)}</ul>

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
