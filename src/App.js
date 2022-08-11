import './App.css';
import {ThemeProvider} from '@mui/material/styles';
import {theme} from './Theme';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {routes} from './routes/Routes';
import Home from './view/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}>
            {routes.length > 0 && routes.map((route, index) => (
              <Route
                key={index}
                element={route.component}
                path={route.path}
              />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
