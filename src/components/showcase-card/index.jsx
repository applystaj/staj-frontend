import React from 'react';
import './style.css';
import products from '../../dummy-data/products';

function ShowCaseCard() {
  return (
    <div className="row">
      {
        products.map((product) => (
          <div className="col-xl-3 col-md-6 col-sm-12" key={product.id}>
            <div className="card">
              <a href="#">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <div className="font-bold">{product.name}</div>
                  <div>{product.description}</div>
                  <div className='stars'>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span>16</span>
                  </div>
                  <div className="font-bold">{product.price} TL</div>
                </div>
              </a>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default ShowCaseCard;
