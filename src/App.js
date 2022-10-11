import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ErrorPage from './components/Header/ErrorPage/ErrorPage';
import Header from './components/Header/Header';
import Home from './components/Header/Home/Home';
import Main from './components/Header/Layout/Main';
import Question from './components/Header/Question/Question';
import Rechart from './components/Header/Rechart/Rechart';


function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children:[

        {path:'/', element: <Home></Home>},
        {path:'/home',
        loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Home></Home>},
        {path:'/rechart', element: <Rechart></Rechart>},
        {path:'/question', element: <Question></Question>},
      ] 
    },
    
    {path:'*', element: <ErrorPage></ErrorPage>}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}>

      <Header></Header>
      </RouterProvider>
    </div>
  );
}

export default App;
