import logo from './logo.svg';
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import{Container}  from 'react-bootstrap';
import{useEffect,useState} from 'react';
import Header from "./component/Header";
import Products from "./component/products";
import Stringlink from './component/stringlink';
import {useParams}from 'react-router-dom';
import {Route,Routes} from 'react-router-dom';
import { ProductList } from './component/ProductList';
import {MobileView} from './component/mobView';
import SingleProduct from './component/singleprod';
import MobileSearch from './component/mobSearch';
import AppContext from './contexts/AppContext';
// import ProductCard from'./component/productcard';
import AddtoCart from './component/AddtoCart';
import WishList from "./component/wishlist";



function App() {
  const[search1,setsearch1]=useState('');
  function searchbarhold(s){
    setsearch1(s);
    console.log("searchbarhold:",search1)
  }
  const [search2,setsearch2]=useState('');
  function filtersearch(s1){
   setsearch2(s1);
  }

  //cart
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    console.log("cartitem", cartItems);
  }, [cartItems]);


  //add item to cart
  const addItemToCart = (ProductList) => {
    const newItemList = [...cartItems, ProductList];
    setCartItems(newItemList);
    console.log("@app onclick", cartItems);
  };

  //increment item
  const incrementItem = (ProductList) => {
    const selectedItem = cartItems.find((i) => i.id === ProductList.id);
    selectedItem.qty = selectedItem.qty? selectedItem.qty+ 1:1;
    setCartItems([...cartItems]);
    console.log("incrmnt",cartItems)
  };

  //decrement item
  const decrementItem = (ProductList) => {
    const selectedItem = cartItems.find((i) => i.id === ProductList.id);
    selectedItem.qty = selectedItem.qty - 1;
    setCartItems([...cartItems]);
  };

  //remove item 
  const removeItem = (ProductList) => {
    const newList = cartItems.filter((i) => i.id !== ProductList.id);
    setCartItems([...newList]);
  };

  const SaveLaterButton = (ProductList) => {
    const newList = cartItems.filter((i) => i.id !== ProductList.id);
    setCartItems([...newList]);
    const newItemList = [...WishListItems, ProductList];
    setWishListItems(newItemList);
    console.log("Onclick the CartItems",cartItems);
  };


//wish list

const [WishListItems, setWishListItems] = useState([]);

  useEffect(() => {
    console.log("WishListItems", WishListItems);
  }, [WishListItems]);

  const addWishListItems = (ProductList) => {
    console.log("data onclick addWishListItems", ProductList);
    const newItemList = [...WishListItems, ProductList];
    setWishListItems(newItemList);
    console.log("Onclick the WishListItems", WishListItems);
  };




  
  return (
    <>
    <AppContext.Provider value={{
      searchbarhold,
      search1:search1,
      search2:search2,
      ProductList:ProductList,
      Stringlink,
      filtersearch,
      //ProductCard,
      cartItems,
      setCartItems,
      addItemToCart,
      incrementItem,
      decrementItem,
      removeItem,
      SaveLaterButton,
      WishListItems,
      addWishListItems ,
      setWishListItems

    
      
    }}>
   <Container fluid>
   <Header searchbarhold={searchbarhold}/>
    <Row>
      <Col xl={2}>
      <Stringlink filtersearch={filtersearch}/>
      </Col>
       <Col xl={10}>
       <Routes>
 
 <Route path ='/' element={<Products search1={search1} search2={search2} ProductList={ProductList}/> }/>
 <Route path ='/All' element={"Products"}/>
 <Route path ='/Todays Deals' element={"Todays Deals"}/>
 <Route path ='/Customer Service' element={"Customer Service"}/>
 <Route path ='/Registry' element={"Registry"}/>
 <Route path ='/giftcard' element={"giftcard"}/>
 <Route path ='/sell'element={"sell"}/>
 <Route path ='/Products/:productId' element={<SingleProduct Filter={ProductList}/>}/>
 {/* <Route path ='/Products/mobiles/:productId' element={<singleProduct Filter={ProductList}/>}/> */}
 <Route path ='/mobiles' element={<MobileView/> }/>
 <Route path ='/Products/mobiles' element={<MobileSearch/> }/>
 {/* <Route path='productcard' element={<ProductCard/>}/> */}
 <Route path="/AddtoCart" element={<AddtoCart />} />
 <Route path="/wishlist" element={<WishList />} />


</Routes>
     </Col> 
   
   


</Row> 
    </Container>
    </AppContext.Provider>

</>

  )
}

export default App;
