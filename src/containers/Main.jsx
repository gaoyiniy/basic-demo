import React from "react";
import { Layout } from "antd";

import SiderMenu from "./SiderMenu";
import PageHeader from "./PageHeader";
import Content from "./Content";
import PageFooter from "./PageFooter";

const Main = props => {
  const { route: { routes } = {}, location } = props;
  console.log(props);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SiderMenu routes={routes} />
      <Layout>
        <PageHeader />
        <Content routes={routes} pathname={location.pathname} />
        <PageFooter />
      </Layout>
    </Layout>
  );
};

export default Main;
