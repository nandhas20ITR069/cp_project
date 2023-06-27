import { useNavigate } from "react-router-dom";


export const getProductList = (setAllProduct) => {
    fetch('http://localhost:8082/listproducts')
        .then((response) => response.json())
        .then((expense_data) => setAllProduct(expense_data.data));
}

// export const getErodeProductList =(setAllProduct) => {
//     fetch('http://localhost:8082/listErodeproducts')
//         .then((response) => response.json())
//         .then((expense_data) => setAllProduct(expense_data.data));
// }

export const getTirupurProductList = (setAllProduct) => {
    fetch('http://localhost:8082/listTirupurproducts')
        .then((response) => response.json())
        .then((expense_data) => setAllProduct(expense_data.data));
}

export const getTrichyProductList = (setAllProduct) => {
    fetch('http://localhost:8082/listTrichyproducts')
        .then((response) => response.json())
        .then((expense_data) => setAllProduct(expense_data.data));
}

export const getCoimbatoreProductList = (setAllProduct) => {
    fetch('http://localhost:8082/listCoimbatoreproducts')
        .then((response) => response.json())
        .then((expense_data) => setAllProduct(expense_data.data));
}

export const getNamakalProductList = (setAllProduct) => {
    fetch('http://localhost:8082/listNamakalproducts')
        .then((response) => response.json())
        .then((expense_data) => setAllProduct(expense_data.data));
}

export const getPollachiProductList = (setAllProduct) => {
    fetch('http://localhost:8082/listPollachiproducts')
        .then((response) => response.json())
        .then((expense_data) => setAllProduct(expense_data.data));
}

export const deleteProduct = async (body) => {
    console.log(body);
    const res = await fetch("http://localhost:8082/product/deleteone", {
        method: "DELETE",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    // const jsonData = await res.json();
    return res;  
}

export const updateProduct = async (body = {}) => {
    console.log(body);
    const res = await fetch("http://localhost:8082/product/updateone", {
        method: "PUT",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return jsonData;
}
export const updatestock = async (body = {}) => {
    console.log(body);
    const res = await fetch("http://localhost:8082/product/updatestock", {
        method: "PUT",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return jsonData;
}


export const deleteerodeProduct = async (body) => {
    console.log(body);
    const res = await fetch("http://localhost:8082/product/deleteone", {
        method: "DELETE",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    // const jsonData = await res.json();
    return res;
}

export const updateerodeProduct = async (body = {}) => {
    console.log(body);
    const res = await fetch("http://localhost:8082/product/updateone", {
        method: "PUT",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return jsonData;
}
export const updateerodestock = async (body = {}) => {
    console.log(body);
    const res = await fetch("http://localhost:8082/product/updatestock", {
        method: "PUT",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return jsonData;
}

export const getcoimbatoreProductList = (setAllProduct) => {
    fetch('http://localhost:8082/listproducts')
        .then((response) => response.json())
        .then((expense_data) => setAllProduct(expense_data.data));
}
export const deletecoimbatoreProduct = async (body) => {
    console.log(body);
    const res = await fetch("http://localhost:8082/product/deleteone", {
        method: "DELETE",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    // const jsonData = await res.json();
    return res;
}

export const updatecoimbatoreProduct = async (body = {}) => {
    console.log(body);
    const res = await fetch("http://localhost:8082/product/updateone", {
        method: "PUT",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return jsonData;
}
export const updatecoimbatorestock = async (body = {}) => {
    console.log(body);
    const res = await fetch("http://localhost:8082/product/updatestock", {
        method: "PUT",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return jsonData;
}

export const gettirupurProductList = (setAllProduct) => {
    fetch('http://localhost:8082/listproducts')
        .then((response) => response.json())
        .then((expense_data) => setAllProduct(expense_data.data));
}
export const deletetirupurProduct = async (body) => {
    console.log(body);
    const res = await fetch("http://localhost:8082/product/deleteone", {
        method: "DELETE",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    // const jsonData = await res.json();
    return res;
}

export const updatetirupurProduct = async (body = {}) => {
    console.log(body);
    const res = await fetch("http://localhost:8082/product/updateone", {
        method: "PUT",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return jsonData;
}
export const updatetirupurstock = async (body = {}) => {
    console.log(body);
    const res = await fetch("http://localhost:8082/product/updatestock", {
        method: "PUT",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return jsonData;
}

export const gettrichyProductList = (setAllProduct) => {
    fetch('http://localhost:8082/listproducts')
        .then((response) => response.json())
        .then((expense_data) => setAllProduct(expense_data.data));
}
export const deletetrichyProduct = async (body) => {
    console.log(body);
    const res = await fetch("http://localhost:8082/product/deleteone", {
        method: "DELETE",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    // const jsonData = await res.json();
    return res;
}

export const updatetrichyProduct = async (body = {}) => {
    console.log(body);
    const res = await fetch("http://localhost:8082/product/updateone", {
        method: "PUT",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return jsonData;
}
export const updatetrichystock = async (body = {}) => {
    console.log(body);
    const res = await fetch("http://localhost:8082/product/updatestock", {
        method: "PUT",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return jsonData;
}

export const getnamakalProductList = (setAllProduct) => {
    fetch('http://localhost:8082/listproducts')
        .then((response) => response.json())
        .then((expense_data) => setAllProduct(expense_data.data));
}
export const deletenamakalProduct = async (body) => {
    console.log(body);
    const res = await fetch("http://localhost:8082/product/deleteone", {
        method: "DELETE",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    // const jsonData = await res.json();
    return res;
}

export const updatenamakalProduct = async (body = {}) => {
    console.log(body);
    const res = await fetch("http://localhost:8082/product/updateone", {
        method: "PUT",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return jsonData;
}
export const updatenamakalstock = async (body = {}) => {
    console.log(body);
    const res = await fetch("http://localhost:8082/product/updatestock", {
        method: "PUT",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return jsonData;
}


export const getpollachiProductList = (setAllProduct) => {
    fetch('http://localhost:8082/listproducts')
        .then((response) => response.json())
        .then((expense_data) => setAllProduct(expense_data.data));
}
export const deletepollachiProduct = async (body) => {
    console.log(body);
    const res = await fetch("http://localhost:8082/product/deleteone", {
        method: "DELETE",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    // const jsonData = await res.json();
    return res;
}

export const updatepollachiProduct = async (body = {}) => {
    console.log(body);
    const res = await fetch("http://localhost:8082/product/updateone", {
        method: "PUT",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return jsonData;
}
export const updatepollachistock = async (body = {}) => {
    console.log(body);
    const res = await fetch("http://localhost:8082/product/updatestock", {
        method: "PUT",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return jsonData;
}
















































