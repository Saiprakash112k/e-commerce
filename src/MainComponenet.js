import React from "react";
import { Data } from "./Data";
import { Popup } from "./Popup"
import "./Card.css"
class MainComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Data: Data
        }
    }

    ClicKHere = (a,b,c)=>{
this.props.cartValue(a,b,c)
}

    ReciveData = (a, b) => {
        if (b === "add") { 
            let newData = this.state.Data.filter((item) => {
                if (a === item.id) {
                    return { ...item, [item.order]: item.order += 1 }
                }
                else { return (item) }
            })
            this.setState(newData)
        }
        else {
            let newData = this.state.Data.filter((item) => {
                if(item.order>0){
                if (a === item.id) {
                    return { ...item, [item.order]: item.order -= 1 }
                }
                else { return (item) }
            }
            })
            this.setState(newData)
        }
    
    }
    callFanc = (a) => {
        let newStatus = this.state.Data.filter((item) => {
            if (item.id === a) {
                item.status = item.status?false:true;
                return { ...item}
            }
            else {return (item)}
        })
        this.setState(newStatus)
    }
    render() {
        let Datas = this.state.Data.map((items) => {
            return (
                <div key={items.id} className="content">
                    <div className="img-card"><img src={items.img} alt="tomato-image" /></div>
                    <div className="hp-content">
                        <div className="heading"><h3>{items.heading}</h3></div>
                        <div className="d-flex js">
                            <input className="input-value" placeholder={`${items.quan}Kg - Rs ${items.price}`} />
                            <Popup IndexValue={items.id} called={this.callFanc} />
                        </div>
                        {(items.status) &&
                            <div className="click-content">
                                <p>1kg - {items.price * 1}</p>
                                <div className="s-line"></div>
                                <p>2kg - {items.price * 2}</p>
                                <div className="s-line"></div>
                                <p>3kg - {items.price * 3}</p>
                                <div className="s-line"></div>

                            </div>
                        }
                        {(!items.status)&&
                         <div className="d-flex js dis-qan">
                            <div className="d-flex order">
                                <button onClick={() => { this.ReciveData(items.id, "minus") }} className="di-Btn">-</button> <p>{items.order}</p><button onClick={() => { this.ReciveData(items.id, "add") }} className="di-Btn">+</button>
                            </div>
                            <div className="dis">Discount{items.discount}%</div>
                        </div>
                        }
                    </div>

                    <div>
        <button onClick={()=>{this.ClicKHere(items.order,items.heading,items.price)}} className="order-now">ADD CART</button>
                    </div>
                </div>
            )
        })

        return (
            <>
                <div className="card  d-flex js">{Datas}</div>
            </>
        )
    }
}
export default MainComponent;