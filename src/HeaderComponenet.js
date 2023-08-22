import React from "react";
import "./Card.css"
class HeaderComponenet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            status:false
        }
    }
    ClickHere = () => {
        if(!this.state.status){
            this.setState({status:true})
        }
        else{
            this.setState({status:false})
        }
    }

    render() {
        let ValueOrder = this.props.OrderSend.map((item, index) => {
            return (
                <>
                <div className="d-flex js arrow">
                    <p className="white">{item.name}</p>
                    <p className="white">kg-{item.order}</p>
                    <p className="white">Rs-{item.rate}</p>
                    <i class="fa fa-trash" aria-hidden="true" onClick={()=>{this.props.removeElement(index)
}}></i>
                </div>
                </>
            )
        })
        return (

            <div>
                <div className="header" >
                    <div className="d-flex ac-jc">
                        <h2>Online Sandha</h2><i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        <div className="d-flex three-lines">
                            <div ></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="add-Cart d-flex acjc">
                        <i class="fa fa-caret-down" aria-hidden="true" onClick={() => { this.ClickHere() }}></i> <h3>({this.props.valueCart})AddCart</h3>
                    </div>
                    {(this.state.status)&&(this.props.OrderSend.length>0)&&
                        <div  className="add-arrow">
                        {ValueOrder}
                    </div>
                    }
                    
                </div>
            </div>
        )
    }
}
export default HeaderComponenet;