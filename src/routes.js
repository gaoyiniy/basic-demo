import { renderRoutes } from "react-router-config";
import Main from "./containers/Main";
import BoxShadow from "./containers/CssPage/boxshadow";
import JsDashBoard from "./containers/JsPage/dashboard";

const EmptyNode = ({ route: { routes } }) => renderRoutes(routes);

const routes = [
  {
    component: Main,
    routes: [
      {
        path: "/css",
        name: "CSS",
        icon: "pie-chart",
        component: EmptyNode,
        routes: [
          {
            path: "/css/boxshadow",
            name: "box-shadow",
            component: BoxShadow
          },
          {
            path: "/css/tickets",
            name: "礼券",
            component: EmptyNode
          }
        ]
      },
      {
        path: "/js",
        name: "JavaScript",
        icon: "desktop",
        component: EmptyNode,
        routes: [
          {
            path: "/js/closure",
            name: "闭包",
            component: JsDashBoard
          }
        ]
      },
      {
        path: "/dom",
        name: "DOM",
        icon: "desktop",
        component: EmptyNode,
        routes: [
          {
            path: "/js/Node",
            name: "Node",
            component: JsDashBoard
          }
        ]
      }
    ]
  }
];

export default routes;
