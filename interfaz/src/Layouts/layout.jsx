import Header from "../components/container/header.jsx"
import Footer from '../components/Footer.jsx';

const Layout=({children}) =>{
    return(
        <div className= "page">
        <Header/> 
        <main>
                {children}
        </main>
        
  </div>
    );
};

export default Layout
