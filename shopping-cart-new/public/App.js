import "./App.css";

function App() {
  return (
    <div className="container">
      {/* TITLE : START */}
      <div className="page-header">
        <h1>
          Project 04 - Shopping Cart <small>ReactJS</small>
        </h1>
      </div>
      {/* TITLE : END */}
      <div className="row">
        {/* LIST PRODUCT : START */}
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h1 className="panel-title">List Products</h1>
            </div>
            <div className="panel-body" id="list-product">
              {/* PRODUCT : START */}
              <div className="media product">
                <div className="media-left">
                  <a href="#">
                    <img
                      className="media-object"
                      src="images/pizza.jpg"
                      alt="pizza"
                    />
                  </a>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Pizza</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                    dicta asperiores veniam repellat unde debitis quisquam
                    magnam magni ut deleniti!
                  </p>
                  <input
                    name="quantity-product-1"
                    type="number"
                    defaultValue={1}
                    min={1}
                  />
                  <a data-product={1} href="#" className="price">
                    {" "}
                    12 USD{" "}
                  </a>
                </div>
              </div>
              {/* PRODUCT : END */}
              {/* PRODUCT : START */}
              <div className="media product">
                <div className="media-left">
                  <a href="#">
                    <img
                      className="media-object"
                      src="images/Hamburger.jpg"
                      alt="hamburger"
                    />
                  </a>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Hamburger</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                    dicta asperiores veniam repellat unde debitis quisquam
                    magnam magni ut deleniti!
                  </p>
                  <span className="price"> 12 USD</span>
                </div>
              </div>
              {/* PRODUCT : END */}
              {/* PRODUCT : START */}
              <div className="media product">
                <div className="media-left">
                  <a href="#">
                    <img
                      className="media-object"
                      src="images/bread.jpg"
                      alt="bread"
                    />
                  </a>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Bread</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                    dicta asperiores veniam repellat unde debitis quisquam
                    magnam magni ut deleniti!
                  </p>
                  <input
                    name="quantity-product-1"
                    type="number"
                    defaultValue={1}
                    min={1}
                  />
                  <a data-product={1} href="#" className="price">
                    {" "}
                    12 USD{" "}
                  </a>
                </div>
              </div>
              {/* PRODUCT : END */}
              {/* PRODUCT : START */}
              <div className="media product">
                <div className="media-left">
                  <a href="#">
                    <img
                      className="media-object"
                      src="images/Cake.jpg"
                      alt="cake"
                    />
                  </a>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Cake</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                    dicta asperiores veniam repellat unde debitis quisquam
                    magnam magni ut deleniti!
                  </p>
                  <input
                    name="quantity-product-1"
                    type="number"
                    defaultValue={1}
                    min={1}
                  />
                  <a data-product={1} href="#" className="price">
                    {" "}
                    12 USD{" "}
                  </a>
                </div>
              </div>
              {/* PRODUCT : END */}
            </div>
          </div>
        </div>
        {/* LIST PRODUCT : END */}
        {/* CART : START */}
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <div className="panel panel-danger">
            <div className="panel-heading">
              <h1 className="panel-title">Your Cart</h1>
            </div>
            <div className="panel-body">
              <table className="table">
                <thead>
                  <tr>
                    <th width="4%">#</th>
                    <th>Pokemon</th>
                    <th width="15%">Price</th>
                    <th width="4%">Quantity</th>
                    <th width="20%">Subtotal</th>
                    <th width="25%">Action</th>
                  </tr>
                </thead>
                <tbody id="my-cart-body">
                  {/* CART BODY */}
                  <tr>
                    <th scope="row">1</th>
                    <td>Pizza</td>
                    <td>12 USD</td>
                    <td>
                      <input
                        name="cart-item-quantity-1"
                        type="number"
                        defaultValue={1}
                        min={1}
                      />
                    </td>
                    <td>
                      <strong>12 USD</strong>
                    </td>
                    <td>
                      <a
                        className="label label-info update-cart-item"
                        href="#"
                        data-product=""
                      >
                        Update
                      </a>
                      <a
                        className="label label-danger delete-cart-item"
                        href="#"
                        data-product=""
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                </tbody>
                <tfoot id="my-cart-footer">
                  {/* CART FOOTER */}
                  <tr>
                    <th colSpan={6}>Empty product in your cart</th>
                  </tr>
                  <tr>
                    <td colSpan={4}>
                      There are <b>1</b> items in your shopping cart.
                    </td>
                    <td colSpan={2} className="total-price text-left">
                      12 USD
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <div className="alert alert-success" role="alert" id="mnotification">
            Updated <b>successfull</b>
          </div>
        </div>
        {/* CART : END */}
      </div>
    </div>
  );
}

export default App;
