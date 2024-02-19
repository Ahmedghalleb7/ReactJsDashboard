import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import { getProduct } from "../../../store/product";



function OrderDetails() {
 const product = useSelector((state) =>state.product.product)
 console.log(product);
 const dispatch=useDispatch()
  const { orderId } = useParams();
  useEffect(() => {
    dispatch(getProduct(orderId)) // converting the orderId to number
  }, []);

  return <div>
    {product.productName}
  </div>;
}

export default OrderDetails;
