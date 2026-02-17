import React, { useState } from "react"
import axios from "axios"

export const ApiDemo4 = () => {

  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const res = await axios.get("https://dummyjson.com/products")
    setProducts(res.data.products)
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Products (All JSON Fields)</h2>

      <button onClick={getProducts}>Load Products</button>

      <table border="1" style={{ margin: "auto", marginTop: "10px", fontSize: "13px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Discount %</th>
            <th>Rating</th>
            <th>Stock</th>
            <th>Brand</th>
            <th>SKU</th>
            <th>Weight</th>
            <th>Dimensions</th>
            <th>Warranty</th>
            <th>Shipping</th>
            <th>Availability</th>
            <th>Return Policy</th>
            <th>Min Order</th>
            <th>Tags</th>
            <th>Images</th>
            <th>Thumbnail</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p, index) => (
            <tr key={index}>
              <td>{p?.id}</td>
              <td>{p?.title}</td>
              <td>{p?.description}</td>
              <td>{p?.category}</td>
              <td>{p?.price}</td>
              <td>{p?.discountPercentage}</td>
              <td>{p?.rating}</td>
              <td>{p?.stock}</td>
              <td>{p?.brand}</td>
              <td>{p?.sku}</td>
              <td>{p?.weight}</td>

              <td>
                W:{p?.dimensions?.width}<br />
                H:{p?.dimensions?.height}<br />
                D:{p?.dimensions?.depth}
              </td>

              <td>{p?.warrantyInformation}</td>
              <td>{p?.shippingInformation}</td>
              <td>{p?.availabilityStatus}</td>
              <td>{p?.returnPolicy}</td>
              <td>{p?.minimumOrderQuantity}</td>

              <td>
                {p?.tags?.map((t, i) => (
                  <span key={i}>{t}, </span>
                ))}
              </td>

              <td>
                {p?.images?.map((img, i) => (
                  <img key={i} src={img} width="30" alt="" />
                ))}
              </td>

              <td>
                <img src={p?.thumbnail} width="50" alt="" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
