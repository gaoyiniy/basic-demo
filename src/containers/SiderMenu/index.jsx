import React from "react";
import { connect } from "react-redux";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import "./index.css";

const { Sider } = Layout;
const { SubMenu } = Menu;

const SiderMenu = ({ collapsed, dispatch, routes }) => {
  const onCollapse = () => {
    dispatch({
      type: "global/collapsed"
    });
  };

  const renderMenu = route => {
    return route.map(({ path, icon, name, routes: child = [] }, key) =>
      child.length ? (
        <SubMenu
          title={
            <span>
              <Icon type="mail" />
              <span>{name}</span>
            </span>
          }
        >
          {renderMenu(child)}
        </SubMenu>
      ) : (
        <Menu.Item key={path}>
          <Link to={path}>
            {icon && <Icon type={icon} />}
            {name}
          </Link>
        </Menu.Item>
      )
    );
  };
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo">
        {/* <Link to="/"> */}
        <h1 className="logo-text">React Basic</h1>
        {/* </Link> */}
      </div>
      <Menu theme="dark" mode="inline">
        {renderMenu(routes)}
      </Menu>
    </Sider>
  );
};

const mapStateToProps = ({ commons: { collapsed } }) => ({ collapsed });

export default connect(mapStateToProps)(SiderMenu);
