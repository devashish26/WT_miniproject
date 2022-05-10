import React, { useEffect, useState } from "react";
import { useData } from "../Utils/DataContext"; 
import { useHistory } from "react-router";
import Sidebar from "./Sidebar";
//import Dropdown from 'react-dropdown';


export default function Products() {
    const { products, setDisplayProducts, displayProducts } = useData();
    const [filter, setFilter] = useState(["", ""]);

    useEffect(() => {
        setDisplayProducts(Object.keys(products));
    }, products);

    const onAscending = () => {
        let tempArr = Object.keys(products).map((key) => ({
            id: key,
            price: products[key].buyPrice,
        }));
        tempArr.sort(function(a, b) {
            return parseFloat(a.price) - parseFloat(b.price);
        });
        setDisplayProducts(tempArr.map((product) => product.id));
    };

    const onDescending = () => {
        let tempArr = Object.keys(products).map((key) => ({
            id: key,
            price: products[key].buyPrice,
        }));
        tempArr.sort(function(a, b) {
            return parseFloat(b.price) - parseFloat(a.price);
        });
        setDisplayProducts(tempArr.map((product) => product.id));
    };

    const onFilter = (filter) => {
        let tempArr = Object.keys(products).map((key) => ({
            id: key,
            type: products[key].type,
            size: products[key].size,
        }));


        if (filter[0] !== "")
            tempArr = tempArr.filter(
                (val) => val.type.toLowerCase() == filter[0].toLowerCase()
            );
        if (filter[1] !== "")
            tempArr = tempArr.filter(
                (val) => val.size.toLowerCase() == filter[1].toLowerCase()
            );
        if (filter[0] !== "" || filter[1] !== "")
            setDisplayProducts(tempArr.map((product) => product.id));
    };

    const history = useHistory();

    return ( <div className = "container">
        <Sidebar aesc = { onAscending }
        desc = { onDescending }
        onFilter = { onFilter }
        />{" "} <div className = "row" > { " " } {
            displayProducts.length > 0 ? ( <>
                {
                    displayProducts.map((key) => ( <
                        div className = "col product"
                        key = { key } >
                        <
                        img src = { products[key].img }
                        alt = "food" />
                        <div className = "row">
                        <h3 className = "col">  ProductX </h3>{" "} <p className = "col text-right" > ₹{ products[key].buyPrice } </p>{" "} </div > { " " } <
                        button onClick = {
                            () => history.push(`/product/${key}`)
                        } >
                        View More { " " } </button>{" "} <small > { " " } { products[key].type } - { products[key].size } { " " } </small>{" "} </div >
                    ))
                } { " " } </>
            ) : ( <h1> Loading { console.log(displayProducts) } </h1>
            )
        } { " " } </div>{" "} </div>
    );
    }
