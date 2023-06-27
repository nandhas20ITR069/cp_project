// import { Button } from "flowbite-react";
import React, { useState } from "react";
// import { storage } from "../../firebase";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const AddProduct = () => {
  const [image, setImage] = useState(null);

  const [location, setLocation] = useState("");

  const [pid, setPid] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stocks, setStocks] = useState(0);
  // const [url, setUrl] = useState(null);

  const onAddProducts = async (e) => {
    e.preventDefault();
    try {
      const body = { image, pid, name,location, description, price,stocks};
      console.log(body);
      const res = await fetch("http://localhost:8082/addproducts", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const jsonData = await res.json();
      console.log(jsonData);
      alert(jsonData);
    } catch (err) {
      console.error(err.message);
    }
    window.location.reload();
  };

  // const handleImgChange = (e) => {
  //   if (e.target.files[0]) {
  //     setImage(e.target.files[0]);
  //   }
  // };
  // console.log(image);

  // const uploadImg = () => {
  //   if (image === null) {
  //     alert("NO IMG SELECTED");
  //     return;
  //   } else {
  //     console.log(image.name);

  //     const imgRef = ref(storage, `/productimgs/${image.name}`);

  //     uploadBytes(imgRef, image)
  //       .then(() => {
  //         getDownloadURL(imgRef)
  //           .then((url) => {
  //             setUrl(url);
  //           })
  //           .catch((error) => {
  //             console.log(error.message, "error getting url");
  //           });
  //           setImage(null);
  //       })
  //       .catch((error) => {
  //         console.log(error.message);
  //       });
  //   }
  //   // console.log(url);
  // };

  return (
    <>
    <center>
      <div className="flex justify-center mt-7">
        <div className="w-full max-w-xl">
          <form className=" shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Image
              </label>
              <div className="flex justify-between items-center">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="image"
                type="text"
                placeholder="image"
                onChange={(e) => setImage(e.target.value)}
                value={image}
              />
                {/* <input
                  className=" w-3/5 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="file"
                  placeholder="Image"
                  onChange={handleImgChange}
                /> */}
                {/* <Button onClick={uploadImg}> Upload </Button> */}
              </div>
             
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="text"
              >
                Pid
              </label><br/>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="text"
                placeholder="pid"
                onChange={(e) => setPid(e.target.value)}
                value={pid}
              />
              {/* <p className="text-red-500 text-xs italic">Please enter a password.</p> */}
            </div>
            <br />
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="text"
              >
                {/* pid */}Location
              </label><br/>
              <select className="shadow appearance-none border rounded w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="text" 
                value={location}
                placeholder="select city"
                onChange={(e) => setLocation(e.target.value)}>
              <option value="select a city" disabled selected hidden>select a city</option>
              <option value="" disabled></option>
              <option value="Tirupur">Tirupur</option>
              <option value="Erode">Erode</option>
              <option value="Coimbatore">Coimbatore</option>
              <option value="Pollachi">Pollachi</option>
              <option value="Namakal">Namakal</option>
              <option value="Tirchy">Tirchy</option>
              </select>
            </div>
            <br />
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="text"
              >
               Product Name
              </label><br/>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              {/* <p className="text-red-500 text-xs italic">Please enter a password.</p> */}
            </div>
            <br />
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="text"
              >
                Description
              </label><br/>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="text"
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
              {/* <p className="text-red-500 text-xs italic">Please enter a password.</p> */}
            </div>
            <br />
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Total stocks
              </label><br/>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="number"
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
              
              {/* <p className="text-red-500 text-xs italic">Please enter a password.</p> */}
            </div>
            <br />
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Total Sales
              </label><br/>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="number"
                placeholder="Price"
                onChange={(e) => setStocks(e.target.value)}
                value={stocks}
              />
               <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="text"
                placeholder="Price"
                onChange={(e) => setStocks(e.target.value)}
                value={stocks}
              />
              
              {/* <p className="text-red-500 text-xs italic">Please enter a password.</p> */}
            </div>
            <br/>
            <div className="w-full justify-center px-3 mb-6 md:mb-0 ">
              <button
                className="bg-green hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
                type="button"
                onClick={onAddProducts}
              >
                Add
              </button><br/>
            </div>
          </form>
        </div>
      </div>
      </center>
    </>
  );
};

export default AddProduct;
