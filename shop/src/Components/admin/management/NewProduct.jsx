import React from "react";

export default function NewProduct() {
  return (
    <div className="newproduct mt-5">
      <div className="container">
        <div className="formbdr border border-primary p-5 m-2 rounded">
            <h2 className="display-5 mb-5">Add New Product</h2>
        <form action="">
          <div className="row">
            <div className="col-md-6">
              <input
                type="text"
                className="form-group w-100 rounded mt-4 form-control"
                placeholder="ProductName"
              />
               <input
                type="text"
                className="form-group w-100 rounded mt-4 form-control"
                placeholder="ProductName"
              />
             
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-group w-100 rounded mt-4 form-control"
                placeholder="ProductName"
              />
               <input
                type="file"
                className="form-group rounded mt-4 ml-5 form-control"
                
              />
              
            </div>
            <div className="col-md-12">
                <textarea name="" id="" cols="30" rows="5" placeholder="Description" className="mt-4 w-100 rounded"></textarea>
                <div className="btn btn-outline-success w-100 mt-4 form-control"><b>Add Product</b></div>
            </div>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}
