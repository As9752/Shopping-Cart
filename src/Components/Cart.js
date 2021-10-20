// .checkout{
//     display: flex;
//     padding: 20px;
// }
// .checkout_ad{
//     width:100%;
//     margin-bottom: 20px;
// }
// .checkout_title{
//     padding: 20px;
//     border-bottom: 1px solid lightgrey;
// }
// .checkoutProduct{
//     display:flex;
//     margin-top: 10px;
//     margin-bottom: 10px;
//     border-radius: 1px solid white;
//     padding-bottom: 20px;
//     align-items: center;
// }
// .checkoutProduct img{
//     width:180px;
//     height:180px;
//     object-fit: contain;
// }
// .checkoutProduct_info{
//     padding:10px;
// }
// .title{
//     font-weight: bold;
//     font-size: 17px;
// }
// .Price{
//     font-weight: bold;
//     font-size: 20px;
// }
// .checkoutProduct_info button{
//     background-color: sandybrown;
//     border-radius: 15px;
//     cursor: pointer;
// }
// .checkout_right{
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     height: 100px;
//     width: 300px;
//     padding: 20px;
//     border:1px solid black;
//     border-radius: 20px;
//     position: sticky;
//     background-color: whitesmoke;
// }
// .checkout_right button{
//     background-color: sandybrown;
//     border-radius: 15px;
//     cursor: pointer;
// }
import { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../Context/Context";
import { Link } from "react-router-dom";
// import Rating from "./Rating";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((prod) => (
            <ListGroup.Item key={prod.id}>
              <Row>
                <Col md={2}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{prod.name}</span>
                </Col>
                <Col md={2}>₹ {prod.price}</Col>
                <Col md={2}>
                  {/* <Rating rating={prod.ratings} /> */}
                </Col>
                <Col md={2}>
                  <Form.Control
                    as="select"
                    value={prod.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: prod.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(prod.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>
       <Button type="button" disabled={cart.length === 0}>
         <Link to ="/cart/ProceedtoPayment">Proceed</Link>
        </Button>
      </div>
    </div>
  );
};

export default Cart;