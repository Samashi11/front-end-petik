import React from "react";

const DetailProduct = () => {
  return (
    <section className="section mt-5">
      <div class="container">
        <div class="columns">
          <div class="column is-half">
            <figure className="image is4by3">
              <img src="https://picsum.photos/800/600" alt="" />
            </figure>
          </div>
          <div class="column">
            <div class="content">
              <div class="is-title is-4">Product Name</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
                incidunt? Veritatis quas ad dolorem, nihil animi aliquam libero!
                Ducimus sit numquam nulla animi tempora cumque quod debitis
                libero temporibus obcaecati.
              </p>
              <p>
                <strong className="text-dark">Price :</strong> Rp. 1.000.000,-
              </p>
              <p>Stock</p>
              <div class="field p-5">
                <button className="button is-primary is-fullwidth has-text-white mb-3">Add to Cart</button>
                <button className="button is-primary is-outlined is-fullwidth">Buy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailProduct;
