//import component Header(teknik export default) 
import Header from "./components/Header";
import { Navbar } from "./components/NavBar";

export default function MyApp() {
  return ( 
    <div>
     <Header />
     <Navbar/>
    </div>
  );
}