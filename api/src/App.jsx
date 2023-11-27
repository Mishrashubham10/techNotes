import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Public from './components/Public';
import Login from './features/auth/Login';
import DashLayout from './components/DashLayout';
import Welcome from './features/auth/Welcome';
import NotesList from './features/notes/NotesList';
import UsersList from './features/users/UsersList';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="/login" element={<Login />} />
        {/* Dash start */}
        <Route path="/dash" element={<DashLayout />}>
          <Route index element={<Welcome />} />
          {/* Note route start */}
          <Route path="notes" element={<NotesList />}>
            <Route index element={<NotesList />} />
          </Route>
          {/* Note route end */}
          {/* User route start */}
          <Route path="users" element={<UsersList />}>
            <Route index element={<UsersList />} />
          </Route>
          {/* User route end */}
        </Route>
        {/* Dash end */}
      </Route>
    </Routes>
  );
};

export default App;