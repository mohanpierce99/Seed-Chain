import React, { Component } from 'react';
import web3init from './../web3init';
// import fillingTheInputElements from './js/socketinput';

class Transact extends Component {
  
    constructor(props){
        super(props);

        this.state={
            sender:"",
            receiver:"",
            productid:""
        }
    }


    handleSenderOnChange = (event)=>{
        this.setState({sender:event.target.value})
    }

    handleReceiverOnChange = (event)=>{
        this.setState({receiver:event.target.value})
    }

    handleProductidOnChange = (event)=>{
        this.setState({productid:event.target.value})
    }

    // fillingTheInputElements = (str) => {
    //     // let ele = document.querySelector(`.${element}`);
    //     // ele.textContent = str;
    //     this.setState({textcontent:"nitin"});
    // }

    handleClick = ()=>{
        // this.fillingTheInputElements("nitin");
        // this.setState({textcontent:"nitin"});
        web3init.transact().then((data)=>{
            console.log(data);
        })

        

    }

    

    handleGetInput = () =>{
        web3init().then((api)=>{
            var httppostacc=(otp)=>{
                const invocation = new XMLHttpRequest();
                const url = 'http://192.168.13.74:3450/socket';
                if(invocation)
                
                    {
                        // console.log("Hello");
        
                    invocation.open('POST', url, true);
        
                    invocation.setRequestHeader('X-PINGOTHER', 'pingpong');
                    invocation.setRequestHeader('Access-Control-Allow-Origin', 'http://192.168.13.74:3450/');
                    invocation.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
                    invocation.onreadystatechange = function() {
                              if (this.readyState === 4 && this.status === 200) {
                                  console.log("stage4")
                                // document.getElementById("demo").innerHTML = this.responseText;
                                console.log(this.responseText);
                              };
                    }
                    invocation.send(otp);
                }
                else{console.log("hmmmmmmmm")}
            }
            httppostacc(JSON.stringify({address:api.account}));

        })
    }

    // componentDidMount = ()=>{
    //     setInterval(function(){
    //         web3init().then((api)=>{
    //             this.httppostacc(api.account).then((d)=>{
    //                 console.log(d)
    //                 // document.querySelector(".senderid").textContent=api.account;

    //             })
    //         })
            
    //     },1500)
    // }


  render() {
      return(
          <div className="container">
              <h1>Transact</h1>
              <ul className="noBullet">
                  <li>
                        <label htmlFor="sender"></label>
                        <input id="senderid" type="text" className="form-control" id="sender" name="" placeholder="sender" onChange={this.handleSenderOnChange} required/>
                        <button onClick={this.handleGetInput}>GetInput</button>      
                  </li>
                  <li>
                            <label htmlFor="receiver"></label>
                            <input type="text" className="form-control" id="receiver" name="receiver" placeholder="receiver" onChange={this.handleReceiverOnChange} required/>
                  </li>
                  <li>
                            <label htmlFor="productid"></label>
                            <input type="text" className="form-control" id="productid" name="productid" placeholder="productid" onChange={this.handleProductidOnChange} required/>
                 </li>
                 <br/>
              {/* <button onClick={this.handleClick}>yoyo</button> */}
                 <li id="center-btn" align="center">
                         <input  className="btn wrap primaryfont extend white" value="Submit" onClick={this.handleJoinClick} />
                 </li>
            </ul>
            <br/>
            <div className="card container shadow-sm bold medfont">
                enter content here
            </div>
          </div>
         
      );
  }
}

export default Transact;

