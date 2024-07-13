import {RouteProps} from "react-router-dom";
import {Home} from "../components/Home";
import {NewPost} from "../components/NewPost";
import {PostPage} from "../components/PostPage/PostPage";

export enum AppRoutes {
  HOME = "home",
  NEWPOST = "newpost",
  POSTPAGE = "post",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.NEWPOST]: "/newpost",
  [AppRoutes.POSTPAGE]: "posts/:id",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    element: <Home />,
    path: RoutePath.home,
  },
  [AppRoutes.NEWPOST]: {
    element: <NewPost />,
    path: RoutePath.newpost,
  },
  [AppRoutes.POSTPAGE]: {
    element: <PostPage />,
    path: RoutePath.post,
  },
};
