import React from "react";
import { useState } from "react";
import { Table, Tag } from "antd";
import "./index.scss";

import {
  RedoOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@ant-design/icons";
import { Button, Flex, Modal } from "antd";

export type PropDefinition = {
  name: string;
  description: React.ReactNode;
  defaultValue?: string | React.ReactNode;
};

const PositioningComponent = () => {
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "20%",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: "60%",
    },
    {
      title: "Default",
      dataIndex: "default",
      key: "default",
      width: "20%",
    },
  ];
  const data = [
    {
      key: "1",
      name: "positioningRef",
      description:
        "An imperative handle to Popper methods.\n`Ref<PositioningImperativeRef>`",
      default: "-",
    },
    {
      key: "2",
      name: "target",
      description:
        "Manual override for the target element. Useful for scenarios where a component accepts user prop to override target\n`TargetElement | null`",
      default: "-",
    },
    {
      key: "3",
      name: "position",
      description: `Position for the component. Position has higher priority than align. 
  If position is vertical ('above' | 'below') and align is also vertical ('top' | 'bottom') or 
  if both position and align are horizontal ('before' | 'after') and 'start' | 'end' respectively,
  then provided value for 'align' will be ignored and 'center' will be used instead.\n
  Available values: "before", "after", "above", "below"`,
      default: "-",
    },
    {
      key: "4",
      name: "align",
      description: `Alignment for the component. Only has an effect if used with the position prop.\n
  Available values: "start", "end", "bottom", "center", "top"`,
      default: "-",
    },
    {
      key: "5",
      name: "arrowPadding",
      description: `Defines padding between the corner of the popup element and the arrow.
  Use to prevent the arrow from overlapping a rounded corner, for example.\n
  Type: number`,
      default: "-",
    },
    {
      key: "6",
      name: "autoSize",
      description: `Applies styles on the positioned element to fit it within the available space in viewport.`,
      default: "-",
    },
  ];

  return (
    <div className='positioning-container'>
      <h1>Positioning Components</h1>

      <div className='controls'>
        <select className='theme-select'>
          <div className='theme'>
            {" "}
            <option value=''>Theme</option>
            <option value=''>Web light</option>
            <option value=''>Web Dark</option>
            <option value=''>Team Light</option>
            <option value=''>Team Dark</option>
            <option value=''>Team High Contrast</option>
          </div>
        </select>
        <label className='switch-label'>
          <input type='radio' name='dir' defaultChecked />
          LTR
        </label>
        <label className='switch-label'>
          <input type='radio' name='dir' />
          RTL
        </label>
      </div>

      <p>
        Fluent components that make use of positioning can all be configured in
        the same way. Some components which make use of positioned DOM elements
        are:
      </p>

      <ul>
        <li>Tooltip</li>
        <li>Menu</li>
        <li>Popover</li>
      </ul>

      <p>
        Fluent components that have slots which are positioned will always
        expose a <code>positioning</code> prop where the positioning of the slot
        can be configured.
      </p>

      <p>
        Below you can try out the different positioning options in the
        playground. Further examples try to explain more clearly different
        configuration options for the <code>positioning</code> prop.
      </p>

      <h2>Best practices</h2>

      <p>
        These examples are intended to document the <code>positioning</code>{" "}
        prop used in Fluent UI React, please refer to component specific
        documentation for best practices for a specific component.
      </p>
      <h2>Default</h2>
      <div className='Default'>
        <div className='icon-text'>
          <div
            style={{
              display: "flex",
              gap: 16,
              padding: 16,
              background: "#fff",
              borderRadius: 8,
            }}>
            <ZoomInOutlined style={{ fontSize: 13, color: "grey" }} />
            <ZoomOutOutlined style={{ fontSize: 13, color: "grey" }} />
            <RedoOutlined style={{ fontSize: 13, color: "grey" }} />
          </div>
        </div>
        <div className='button-click'>
          <Flex gap='small' wrap>
            <Button type='primary' onClick={showModal}>
              Click Me
            </Button>

            <Modal
              className='modal'
              style={{ width: 100, height: 200 }}
              title='Basic Modal'
              closable={{ "aria-label": "Custom Close Button" }}
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}>
              <p>Container</p>
            </Modal>
          </Flex>
        </div>
        <div className='table-container'>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            bordered
          />
        </div>
      </div>
    </div>
  );
};

export default PositioningComponent;
