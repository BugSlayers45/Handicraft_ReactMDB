import React from 'react'
import Navigation from '../../navigation/Navigation'
import "../Cart/cart.css"
import { Link } from 'react-router-dom'

export default function UserCart() {
  return<>
  <Navigation/>
    <div className="container mt-5">
  <div className="row pt-5">
    <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 mt-3">
      <div className="card">
        <div className="card-header">
          <div className="row pt-3 pb-3">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 ">
              <span style={{ fontSize: 20, fontWeight: 700, color: "black" }}>
                My Cart(3)
              </span>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12  text-right">
              <i className="fa fa-map-marker" aria-hidden="true" />
              &nbsp;Deliver to &nbsp;
              <input type="text" placeholder="user name and address" />
            </div>
          </div>
        </div>
        <div>
          <div className="card-body">
            <div className="row pb-3 ">
              <div className="col-xl-4 col-lg-2 col-md-3 col-sm-3 col-12 pt-5 text-center">
                <img src="Images/men.jpg" height="200px" />
                <div className="text-left">
                  <select name="Qunatity" className="custom-select mt-2 first">
                    <option selected="">1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                  </select>
                </div>
              </div>
              <div className="col-xl-8 col-lg-10 col-md-8 col-sm-8 col-12 pt-5">
                <p>Item Name:&nbsp;Pink Saree</p>
                <p>Seller:&nbsp;Laxmipati</p>
                <p>Price:&nbsp;₹390</p>
                <p>
                  <a href="#/" style={{ fontWeight: 700 }}>
                    REMOVE
                  </a>
                </p>
              </div>
            </div>
            <div className="row pb-3">
              <div className="col-xl-4  col-lg-2 col-md-3 col-sm-4 col-12 pt-5 text-center">
                <img src="Images/girl.jpg" height="200px" />
                <div className="text-left">
                  <select name="Qunatity" className="custom-select mt-2 second">
                    <option selected="">1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                  </select>
                </div>
              </div>
              <div className="col-xl-8 col-lg-10 col-md-8 col-sm-8 col-12 pt-5 pt-5">
                <p>Item Name:&nbsp;Tradesional Dress</p>
                <p>Size:&nbsp;XXL</p>
                <p>Seller:&nbsp;Fabindia</p>
                <p>Price:&nbsp;₹490</p>
                <p>
                  <a href="#/" style={{ fontWeight: 700 }}>
                    REMOVE
                  </a>
                </p>
              </div>
            </div>
            <div className="row pb-3">
              <div className="col-xl-4 col-lg-2 col-md-3 col-sm-3 col-12 pt-5 pl-5 text-center">
                <img src="Images/background-image-1.jpg" height="200px" />
                <select
                  name="Qunatity"
                  className="custom-select mt-2 third text-center"
                >
                  <option selected="">1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                </select>
              </div>
              <div className="col-xl-8  col-lg-9 col-md-8 col-sm-8 col-8 pt-5 pt-5 pt-5">
                <p>Item Name:&nbsp;Black Design Saree</p>
                <p>Seller:&nbsp;Fabindia</p>
                <p>Price:&nbsp;₹580</p>
                <p>
                  <a href="#/" style={{ fontWeight: 700 }}>
                    REMOVE
                  </a>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col pr-5 text-right">
                <p>
                <Link to="/orderplace" style={{ color: "white" }}>       <button
                    style={{
                      textTransform: "uppercase",
                      padding: "2% 5%",
                      backgroundColor: "tomato",
                      color: "white",
                      borderColor: "transparent"
                    }}
                    data-toggle="collapse"
                    data-target="#collapseTwo,#payment-option"
                  >
                   
                      Place Order
                    
                  </button></Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 mt-3 pt-4">
      <div className="container">
        <div className="card">
          <div className="card-header">PRICE DETAILS</div>
          <div className="card-body">
            <div className="row">
              <div className="col text-left">Price(3) :</div>
              <div className="col text-right">₹1,460</div>
            </div>
            <div className="row pt-3">
              <div className="col-7 text-left ">Delivery Charges :</div>
              <div className="col text-right">Free</div>
            </div>
            <hr />
            <div className="row">
              <div className="col text-left">Total Amount :</div>
              <div className="col text-right">₹1,460</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


</>

}
