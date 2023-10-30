import "../App.css";
import logoStikom from "../logo_stikom.jpg";

const Logo = {
    nama:"",
    imageUrl: "",
    imageSize: 95,
};
function Header(){
    return(
        <div className="flex-container">
            <img
            className="App-logo"
            src={logoStikom}
            alt={"Logo"+Logo.nama}
            style={{ width: Logo.imageSize, height: Logo.imageSize }}
         />
         <h3>{Logo.nama}</h3>
        <div className="header-tengah">
            <h1> Stikom PGRI Banyuwangi</h1>
            <h2> Kmpus IT Terbaik Di Banyuwangi</h2>
        </div>
      </div>
    );
 }
 export default Header;