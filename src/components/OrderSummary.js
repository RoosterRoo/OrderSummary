import React from 'react'

import illustration from '../illustration-hero.svg'
import icon from '../icon-music.svg'

const OrderSummary = () => {
    return (
        <div className="container">
            <div className="ui centered raised card" 
                style={{position: "absolute",
                        top: "20%", 
                        left: "37.5%",
                        width: "25vw"
                        }}>
                <div className="image">
                    <img src={illustration} alt="Illustration"/>
                </div>
                <div className="content">
                    <div className="center aligned header" 
                        style={{padding: "20px"}}>
                        <span style={{fontWeight: "900"}}>Order Summary</span>
                    </div>
                    <div className="center aligned meta"
                        style={{paddingBottom: "20px"}}>
                    <span style={{color: "hsl(216, 2%, 63%)", fontWeight: "500"}}>You can now listen to millions of songs, audiobooks, and podcasts on any 
    device anywhere you like!</span>
                    </div>
                    <div className="description" >
                        <div className="ui large message" style={{padding: "5px 15px"}}>
                            <div className="ui middle aligned grid">
                                <div className="four wide column">
                                    <img src={icon} alt="Music"/>
                                </div>
                                <div className="eight wide column">
                                <p style={{fontWeight: "900"}}>Annual Plan</p>
                                <p style={{fontWeight: "500", 
                                        color: "hsl(216, 2%, 63%)"}}>
                                    $59.99/year
                                </p>
                                </div>
                                <div className="right floated four wide column"
                                    style={{padding: "1px"}}>
                                    <a href="#">Change</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{paddingTop: "20px"}}>
                            <button className='fluid ui button'
                                style={{backgroundColor: "hsl(245, 75%, 52%)",
                                    color: "white",
                                    boxShadow: "0 5px 15px -5px hsl(245, 75%, 52%)",
                                    }}>
                                    <p style={{fontWeight: "900"}}>Proceed to Payment</p>
                            </button>
                        </div>
                        <div style={{
                            paddingTop: "15px",
                            display: "flex",
                            justifyContent: "center", 
                            alignItems: "center"
                            }}>
                            <a href="#" 
                                style={{color: "hsl(216, 2%, 63%)", fontWeight: "900"}}>
                                Cancel Order
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default OrderSummary