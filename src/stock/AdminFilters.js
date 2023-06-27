import React, { useEffect, useState } from 'react';
import AdminProductCard from './AdminProductCard';
import './AdminFilters.css';
import axios from 'axios';
// import { useParams } from 'react-router-dom';
import { getCoimbatoreProductList, getErodeProductList, getNamakalProductList, getPollachiProductList, getTirupurProductList, getTrichyProductList } from './api';

const AdminFilters = () => {
  // const [pid, setPid] = useState(1);
  const [products, setProducts] = useState([]);
let product=[];

  useEffect(() => {
    // const onListProducts = async () => {
    //   try {
    //     const response = await fetch("http://localhost:8082/listproducts");
    //     if (response.ok) {
    //       const res = await response.json();
    //       setProducts(res);
    //     } else {
    //       console.error("Failed to fetch products");
    //     }
    //   } catch (err) {
    //     console.error(err.message);
    //   }
    // }

    const list=async()=>{
        try{
      // await fetch("http://localhost:8082/listErodeproducts").then(
      //       res=>{
      //         product = res.data
      //         setProducts(product)
      //       }
      //     )
      axios.get("http://localhost:8082/listErodeproducts").then(res=>{
        product=res.data;
        setProducts(product)
      })
        }catch(err){
          alert(err)
        }
    }
 list()
    // onListProducts();
    // console.log("Success");
    // alert("hii")
    // getErodeProductList(setProducts);
    
  }, []);

  const onListErodeProduct = ()=>{
    // getErodeProductList(setProducts);
  }

  const onListCoimbatoreProduct = () =>{
    getCoimbatoreProductList(setProducts);
  }
  const onListTirupurProduct = () =>{
    getTirupurProductList(setProducts);
  }
  const onListTrichyProduct = () =>{
    getTrichyProductList(setProducts);
  }
  const onListNamakalProduct = () =>{
    getNamakalProductList(setProducts);
  }
  const onListPollachiProduct = () =>{
    getPollachiProductList(setProducts);
  }


  // const { id } = useParams();

  // useEffect(() => {
  //   setPid(id);
  // }, [id]);

  return (
    <>
      <div className='overflow-x-scroll container mx-auto px-4'>
        <section className="gaping">
          <button className="btn btn-success" onClick={() => onListErodeProduct()}>Erode</button>
          <button className="btn btn-success" onClick={() => onListCoimbatoreProduct()}>Coimbatore</button>
          <button className="btn btn-success" onClick={() => onListTirupurProduct()}>Tirupur</button>
          <button className="btn btn-success" onClick={() => onListTrichyProduct()}>Tirchy</button>
          <button className="btn btn-success" onClick={() => onListNamakalProduct()}>Namakal</button>
          <button className="btn btn-success" onClick={() => onListPollachiProduct()}>Pollachi</button>
        </section>
      </div>

      <section className='w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 my-10 py-10'>
        { 
        products.map(filterproduct => (
            <AdminProductCard key={filterproduct.pid} product={filterproduct} />
          ))
        }
      </section>

      <br />
      <br />
    </>
  );
}

export default AdminFilters;
