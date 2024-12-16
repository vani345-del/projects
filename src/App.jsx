import React from 'react'
import Nav1 from './Navigation/Nav1'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import Category from './Sidebar/Category/Category'
import './index.css';
import Sidebar from './Sidebar/Sidebar'
import { useState } from 'react'
import Card from './components/Card'
//database
import products from './db/data'


const App = () => {
 
  const[selectedCategory,setSelectedCategory]=useState(null);
  //input value
  const[query,setQuery]=useState("");
  const handlerInputClick=(event)=>{
    setQuery(event.target.value);
  }
  const filteredItems=products.filter((product)=>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase())!==-1
  )
  
  //......radio input.......
  const handerchange=(event)=>{
    setSelectedCategory(event.target.value);
  }
  //.......Button filter.......
  const handleClick=(event)=>{
    setSelectedCategory(event.target.value)
  }
  function filteredData(products,selected,query){
    let filteredproducts=products
    //filtering input items
    if(query){
      filteredproducts=filteredItems;
    }
    if(selected){
      filteredproducts=filteredproducts.filter(
        ({category,color,company,newPrice,title})=>
          category===selected||
          color===selected||
          company===selected||
          newPrice===selected||
          title===selected
      );
    }
    return filteredproducts.map(
      ({img,title,star,reviews,newPrice,prevPrice})=>(
       <Card  
       key={Math.random()}
       img={img}
       title={title}
       star={star}
       reviews={reviews}
       newPrice={newPrice}
       prevPrice={prevPrice}
       />
      )
      
    )
  }
  const result= filteredData(products,selectedCategory,query)
  return (
    <div>
      <Sidebar handerchange={handerchange}/>
      <Nav1 query={query} handlerInputClick={handlerInputClick}/>
      <Recommended handleClick={handleClick}/>
      <Products result={result}/>
      
    </div>
  )
}

export default App