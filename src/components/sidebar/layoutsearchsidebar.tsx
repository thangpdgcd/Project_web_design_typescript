import React from "react";
import { FileTextOutlined, DeleteOutlined, LeftOutlined } from "@ant-design/icons";
import "./layoutsearchsidebar.scss"

interface RecentlyOpenedItem {
  title: string;
  path: string;
}

interface RecentlyOpenedProps {
  items: RecentlyOpenedItem[];
  onClear: () => void;
  onBack: () => void;
}


const RecentlyOpened: React.FC<RecentlyOpenedProps> = ({ items, onClear, onBack }) => {
  return (
    <div className="recently-opened grid ">
      <div className="section-title">RECENTLY OPENED</div>
      <ul className="item-list">
        {items.map((item, index) => (
          <li className="item" key={index}>
                <FileTextOutlined className="file-icon" />
            <div className="details">
              <div className="label">Docs</div>
              <div className="path">{item.path}</div>
            </div>
          </li>
        ))}
      </ul>
      <div className="footer-actions">
        <div className="action back" onClick={onBack}>
          <LeftOutlined />
          <span>Back to components</span>
          <span className="shortcut">ESC</span>
        </div>
        <div className="action clear" onClick={onClear}>
          <DeleteOutlined />
          <span>Clear history</span>
        </div>
      </div>
    </div>
  );
};

export default RecentlyOpened;
