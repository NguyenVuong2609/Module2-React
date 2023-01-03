import Header from "./Components/Header";
import Slider from "./Components/slider";
import Menubars from "./Components/Menubar";
import ListProduct from "./Components/ListProduct";
import Catagories from "./Components/Catagories";
import ClientComment from "./Components/ClientComment";
import SignUp from "./Components/Signup";
import Footer from "./Components/InfoFooter";
import Copyright from "./Components/Copyright";


function App() {
  return (
    <div className="App">
        <div className="hero_area">
          {/* header section strats */}
          <Header></Header>
          {/* end header section */}
          {/* slider section */}
          <Slider></Slider>
          {/* end slider section */}
        </div>
        {/* detail section */}
        <Menubars></Menubars>
        {/* end detail section */}
        {/* products section */}
        <ListProduct></ListProduct>
        {/* end products section */}
        {/* find section */}
        <Catagories></Catagories>
        {/* end find section */}
        {/* client section */}
        <ClientComment></ClientComment>
        {/* end client section */}
        {/* sign section */}
        <SignUp></SignUp>
        {/* end sign section */}
        {/* info section */}
        <Footer></Footer>
        {/* end info section */}
        {/* footer section */}
        <Copyright></Copyright>
        {/* footer section */}
    </div>
  );
}
export default App;
