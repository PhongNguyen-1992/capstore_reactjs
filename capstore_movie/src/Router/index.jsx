import { Route } from "react-router-dom";
import Home from "../HomeTemplete/_index";
import TrendingNow from "../HomeTemplete/TrendingNow";
import RecentlyUpdate from "../HomeTemplete/RecentlyUpdate";
import MovieDetail from "../HomeTemplete/DetailMovie.jsx";



const routers = [
  // HomeTemplate
  {
    path: "",
    element: Home,
    nested: [       
       {
        path: "trending-now",
        element: TrendingNow,
      },   
       {
        path: "recently-update",
        element:RecentlyUpdate,
      },      
      {
        path: "movie-detail/:movieID",
        element: MovieDetail,
      },
    ],
  },
  // AdminTemplate
//   {
//     path: "admin",
//     element: AdminTemplate,
//     nested: [
//       {
//         path: "dash-board",
//         element: Dashboard,
//       },
//       {
//         path: "add-user",
//         element: AddUser,
//       },
//       {
//         path: "movie-managment",
//         element: MovieManagement,
//       },
//       {
//         path: "movie-managment/add-movie",
//         element: AddMovie,
//       },
//       {
//         path: "theater-manager",
//         element: TheaterManagement,
//       },
//     ],
//   },
//   // AuthTemplate
//   {
//     path: "auth",
//     element: Auth,
//   },
];

// Hàm chính
export const genarateRoutes = () => {
  return routers.map((router) => {
    if (router.nested) {
      return (
        <Route
          key={router.path}
          path={router.path}
          element={<router.element />}
        >
          {router.nested.map((route2) => (
            <Route
              key={route2.path}
              path={route2.path}
              element={<route2.element />}
            />
          ))}
        </Route>
      );
    } else {
      return (
        <Route
          key={router.path}
          path={router.path}
          element={<router.element />}
        />
      );
    }
  });
};
