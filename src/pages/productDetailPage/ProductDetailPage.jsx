import React from "react";
import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
import { selectProductDetail, selectProductRelated } from "../../redux/shop/ShopSelector";
import { addItem } from "../../redux/cart/CartActions";
import "./../../components/shopComponents/ProductContainer.scss";


const ProductDetailPage = ({ products, match, history, addItem, productRelated }) => {
  console.log(match)
  console.log(history)

  return(
    <div>
      <div className="productDetail-container">
        <div className="row">
          <div className="product-tab detail">

            <div className="productDetail">
              <div className="product-tab_image">
                <h2>{products.name}</h2>
                <span>$ {products.price}</span>
                <h2> </h2>
                <img src={`../${products.imageUrl}`} alt="" />
              
              </div>

              <div className="product-tab-nav">
                <div className="product-tab-nav-content">
                  <span onClick={() => addItem(products)}>
                    <i className="fas fa-shopping-bag"></i>
                  </span>
                  <span>
                    <i className="far fa-eye"></i>
                  </span>
                  <span>
                    <i className="fas fa-heart"></i>
                  </span>
                </div>
              </div>

              <div className="productDetail-image">
                {/* <img src={`../${item.imageUrl}`} alt=""  /> */}
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="row medium-4">
        {/* <!-- khối sản phẩm-- > */}
        <h2 style={{textAlign:"center"}}>Related Products</h2>

        <div id="photos">

          {productRelated.map((item, id) => (
            <div key={id} className="product-tab ">
              <div className="product-tab_image">
                
                  <img src={`../${item.imageUrl}`} alt=""
                   onClick={() => {
                    history.push("/shop/" + item.id );
                  }}
                  />
              </div>

              <div className="product-tab-nav">
                <div className="product-tab-nav-content">
                  <span onClick={() => addItem(item)}>
                    <i className="fas fa-shopping-bag"></i>
                  </span>
                  <span>
                    <i className="far fa-eye"></i>
                  </span>
                  <span>
                    <i className="fas fa-heart"></i>
                  </span>
                </div>
              </div>
              <div className="product-tab_content-title-price">
                <h3>{item.name}</h3>
                <span>$ {item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) 
};

const mapStateToProps = (state, ownProps) => ({
  products: selectProductDetail(ownProps.match.params.id)(state),
  productRelated: selectProductRelated(ownProps.match.params.id)(state),
  // productAll: selectShopMenu(state),
});

const mapDispatchToProps = (dispatch) => ({
  //* passing item vào addItem
  addItem: (item) => dispatch(addItem(item)),

});


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailPage);
