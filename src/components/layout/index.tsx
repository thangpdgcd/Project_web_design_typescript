import React from "react";
import {
  FileTextOutlined,
  DeleteOutlined,
  LeftOutlined,
  FolderOpenOutlined,
} from "@ant-design/icons";
import "./index.scss";
import { Link } from "react-router-dom";

interface RecentlyOpenedItem {
  key: string;
  title: string;
  link?: string;
  children?: RecentlyOpenedItem[];
  childrenconcepts?: RecentlyOpenedItem[];
  childrenconcepts_developer?: RecentlyOpenedItem[];
  childrencomponents?: RecentlyOpenedItem[];
}

// Hàm lấy link đầu tiên của item (ưu tiên link của chính nó, nếu không có thì lấy link của con đầu tiên)
const getFirstLink = (item: RecentlyOpenedItem): string | undefined => {
  if (item.link) return item.link;
  const childItems =
    item.children ||
    item.childrenconcepts ||
    item.childrenconcepts_developer ||
    item.childrencomponents;
  if (childItems && childItems.length > 0) {
    return getFirstLink(childItems[0]);
  }
  return undefined;
};

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
  onItemClick: (item: RecentlyOpenedItem) => void,
  parentTitle?: string
): React.ReactNode => {
  return items.map((item, index) => {
    const childItems =
      item.children ||
      item.childrenconcepts ||
      item.childrenconcepts_developer ||
      item.childrencomponents;

    if (childItems && Array.isArray(childItems)) {
      const firstLink = getFirstLink(item);
      return (
        <li className='item' key={item.key || index}>
          <FolderOpenOutlined className='file-icon' />
          <div className='details'>
            <div className='label'>Docs</div>
            <div className='path'>{item.title}</div>
            {firstLink && (
              <div className='link text-[8px] text-amber-300'>{firstLink}</div>
            )}
          </div>
          <ul className='item-list-children'>
            {renderItems(childItems, onItemClick, item.title)}
          </ul>
        </li>
      );
    }

    // Luôn ghép parentTitle nếu có
    return (
      <li
        className='item'
        key={item.key || index}
        onClick={() => onItemClick(item)}
        style={{ cursor: "pointer" }}>
        <FileTextOutlined className='file-icon' />
        <div className='details'>
          <div className='label'>Docs</div>
          <div className='path'>
            {parentTitle ? `${parentTitle}/${item.title}` : item.title}
          </div>
          {item.link && (
            <Link
              to={item.link}
              className='link text-[8px] text-amber-300 cursor-pointer underline '
              onClick={(e) => e.stopPropagation()}>
              {item.link}
            </Link>
          )}
        </div>
      </li>
    );
  });
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
      <div className='section-title'>{searchTerm ? "SEARCH RESULTS" : ""}</div>

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
