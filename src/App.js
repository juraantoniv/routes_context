
import './App.css';
import { Route, Routes } from "react-router-dom";

import {RouterEndpoints} from "./routes/routes";
import MainLayout from "./layouts/Main.Layout/Main.Layout";
import AlbumsPage from "./pages/Albums.Page/AlbumsPage";
import RequireAuth from "./hoc/RequireAuth";
import UsersPage from "./pages/Users.Page/UsersPage";
import TodosPage from "./pages/Todos.Page/TodosPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import CommentsPage from "./pages/Comments.Page/CommentsPage";
import Posts from "./components/Posts/Posts";



function App() {
  return (
    <div>
      <Routes>
          <Route path={RouterEndpoints.index} element={<MainLayout/>}>
          <Route path={RouterEndpoints.users}  element={
              <RequireAuth>
              <UsersPage/>
                </RequireAuth>}/>
          <Route path={RouterEndpoints.albums}  element={<AlbumsPage/>}/>
          <Route path={RouterEndpoints.todos} element={<TodosPage/>}/>
          <Route path={RouterEndpoints.login} element={<LoginPage/>}/>
          <Route path={RouterEndpoints.comments} element={<CommentsPage/>}>
            <Route path={RouterEndpoints.postId} element={<Posts/>}/>
          </Route>
          </Route>
      </Routes>

    </div>
  );
}

export default App;
