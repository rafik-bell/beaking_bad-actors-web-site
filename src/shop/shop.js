import React, { Component,setState } from 'react';
import Img1 from '../img/eye.png'

import shops from '../shop/shop.module.css';

class shop extends Component {
    state1={
         url :"https://www.breakingbadapi.com/api/characters"
         

    }
    state={
        alt :'image1',
        birthday: "09-07-1958",
        category: "Breaking Bad",
        src: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg"
        ,name: "Walter White",
        nickname: "Heisenberg"
    }
     
    change1 =()=>{this.setState({src :Img1,alt :'image1'})}
     
    myFunction=async()=>{
        
        var x = document.getElementById("actor").value;
        
        
        const params = await fetch(this.state1.url+"?name="+x)
        const data = await params.json()
        this.setState({src : data[0].img,
            alt :'image3',
            birthday:  data[0].birthday ,
            category:data[0].category ,
            name:data[0].name ,
            nickname:data[0].nickname
        })
    
    
        console.log(this.state.src)   
            
    }
    get=async()=> {
        
            this.setState({url:"https://www.breakingbadapi.com/api/characters"})
       
        const params = await fetch(this.state1.url)
        const data = await params.json()
        console.log(data)
        
        
        document.querySelector("#actor").innerHTML="<option>select actor</option>"+data.map(actor => `
        <option>${actor.name}</option>`)  
    }
    
    
    
    render(){ 
      
        
        
    return (
        
    <div className={shops.globale_contuner}>
        <div className={shops.divt}><h1 className={shops.title}>Breaking Bad</h1></div>
      <div className={shops.contuner} >
          
          <div className={shops.image_section}>
              <div className={shops.image_bar} >
              <input id='film'></input>
              <h1>select actor</h1>
              <select id='actor' onChange={this.myFunction}><option>select actor</option></select>

              <div id='demo'></div>


              </div>
              <div className={shops.image_b}>
              <img className={shops.big_image} src={this.state.src} alt={this.state.alt}></img>
              </div>


          </div>
          <div className={shops.text_section}>
              <h1 className={shops.titel}>NAME :{this.state.name}</h1>
              <p className={shops.prix}>Birthday :<span>{this.state.birthday} </span></p>
              
              <p className={shops.discription}>
                  <p className={shops.prix}>Category :  {this.state.category}
           
            </p>
                  <p className={shops.prix}>Nickname :  {this.state.nickname}</p>
                  

                  
                   </p>
          </div>
         
      </div>
      </div>
    );
  }}
  
  export default shop;