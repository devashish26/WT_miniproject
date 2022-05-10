import React, { useState } from "react";
import fmain from './../img/fmain.jpg';
import gmain from './../img/gmain.jpg';
import pmain from './../img/pmain.jpg';
import samain from './../img/samain.jpg';
import scmain from './../img/scmain.png';
import upmain from './../img/upmain.jpg';
import rmain from './../img/rmain.jpg';
import girl from './../img/girl.jpg';
import './../styles/style1.css';


export default function Sidebar({ aesc, desc, onFilter }) {

    const [filter, setFilter] = useState(["", ""]);

    const [display, setDisplay] = useState(false);  // for filter tab

    let [show, setShow] = useState(false);   // for custom button


    function displayShow(){
            setShow(false) ;
    }

    function submit( ){
            console.log('hdadad');
        }
    

    const onTypeFilter = (type) => () => {
        let tempFilter = [...filter];
        tempFilter[0] = type;
        setFilter(tempFilter);
        onFilter(tempFilter);
    };

    const onSizeFilter = (size) => () => {
        let tempFilter = [...filter];
        tempFilter[1] = size;
        console.log(tempFilter);
        setFilter(tempFilter);
        onFilter(tempFilter);
    };

    


    return (
        <div className="container"> 
            <div className = "product-wrapper sidebar" >
                <div className = "row" >
                    <div className = "col" >
        
                    <h4 > Shop By Order </h4> <br/>

                    <div className="shopBy">
                        <div className='shopByAtt'>
                            <img src={rmain}/>
                            <center>Raisin Art</center>
                        </div>

                        <div className='shopByAtt'>
                            <img src={upmain}/>
                            <center>Utensils</center>
                        </div>

                        <div className='shopByAtt'>
                            <img src={scmain}/>
                            <center>Sculptures</center>
                        </div>

                        <div className='shopByAtt'>
                            <img src={gmain}/>
                            <center>Glass Art</center>
                        </div>

                        <div className='shopByAtt'>
                            <img src={samain}/>
                            <center>Stone Art</center>
                        </div>

                        <div className='shopByAtt'>
                            <img src={pmain}/>
                            <center>Portraits</center>
                        </div>

                        <div className='shopByAtt'>
                            <img src={fmain}/>
                            <center>Fabric Art</center>
                        </div>

                        <div className='shopByAtt'>
                            <img src={girl}/>
                            <center onClick={()=>setShow(true) } htmlFor = "Custom" > Custom </center>
                        </div>
                    </div>

        {/* <label onClick = { onTypeFilter("") } htmlFor = "Allt" >
        <input type = "radio" id = "Allt" name = "type" defaultChecked = "true" />
         All </label> <br/>
            
        <label onClick = { onSizeFilter("bamboo") } htmlFor = "bamboo" >
        <input type = "radio" id = "bamboo" name = "size" />Bamboo Art </label> <br/>

        <label onClick = { onSizeFilter("japanese") } htmlFor = "japanese" >
        <input type = "radio" id = "japanese" name = "size" />Pottery / eartthern </label> <br/> */}

        

        {
        show?<div><br/><br/>
            <label> Custom Image:         </label>
            <input type='file' accept='image/*' id='CustomImg' name='image'/> 

            <label>Text:</label>
            <input type='text' id='CustomTxt' name='text'/> 

            <button onClick = {()=>{
                displayShow();
                submit();
            }} >Submit</button>
            
        </div>:null
        }

        <br/>

        <center><button className="small-button" onClick={()=>setDisplay(true)}>  all filters  </button></center><br/>
         

        </div> </div> </div>
        </div>
    );
}