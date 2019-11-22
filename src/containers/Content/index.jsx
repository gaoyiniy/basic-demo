import React from "react";
import { Layout, Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { renderRoutes, matchRoutes } from "react-router-config";

const { Content } = Layout;

const Main = ({ routes, pathname }) => {
  const matchRoute = matchRoutes(routes, pathname);
  return (
    <Content style={{ margin: "0 16px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        {matchRoute.map((item, key) => {
          const { name, path } = item.route;
          return (
            <Breadcrumb.Item>
              {/* <Link to={path}> */}
              <span>{name}</span>
              {/* </Link> */}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
      {}
      <div style={{ padding: 24, background: "#fff", height: "100%" }}>
        {renderRoutes(routes)}
      </div>
    </Content>
  );
};

export default Main;
