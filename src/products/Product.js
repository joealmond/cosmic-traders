import styles from "./Product.module.scss";
import { toCurrencyFormat } from "../utils/format-utils";
import Cart from "../cart/Cart";

function Product({ productData, addToCart }) {
  return (
    <>
      <div className={styles.productImage}>
        <button
          className={`button ${styles.addToCart}`}
          onClick={() => addToCart(productData)}
        >
          Add to cart
        </button>
        <img src={require(`../images/${productData.image}`)} alt="" />
      </div>
      <div className={styles.productDetails}>
        <div className={styles.title}>{productData.name}</div>
        <div className={styles.price}>
          {toCurrencyFormat(productData.price)}
        </div>
      </div>
    </>
  );
}

export default Product;
