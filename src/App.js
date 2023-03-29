import {BrowserRouter ,Routes, Route } from 'react-router-dom';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import {FeedbackProvider} from './context/FeedbackContext';
import AboutIconLInk from './components/AboutIconLInk';



function App()  {
   

   
   
     
   return(
    <FeedbackProvider>
    <BrowserRouter>
    <Header />
    <div className='container'>
 
      <Routes>
         <Route 
          exact path='/' 
          element={
          <>
           <FeedbackForm />
           <FeedbackStats />
           <FeedbackList />
          </>
          }

         ></Route>
        <Route path='/about' element={<AboutPage/>}/>
      </Routes>
      
      
    </div>
    <AboutIconLInk />
    
    </BrowserRouter>
    </FeedbackProvider>
  );
}
export default App;
