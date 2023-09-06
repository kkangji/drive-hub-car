import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import ProductCard from "../components/UI/product-card/ProductCard";
import Helmet from "../components/Helmet/Helmet";

const CarPage = () => {
  const [data, setData] = useState(null);
  // const [pageNumber, setPageNumber] = useState(0);

  // const searchedProduct = products;

  // const productPerPage = 4;
  // const visitedPage = pageNumber * productPerPage;
  // const displayPage = searchedProduct.slice(
  //   visitedPage,
  //   visitedPage + productPerPage
  // );

  // const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  // const changePage = ({ selected }) => {
  //   setPageNumber(selected);
  // };

  const fetchData = () => {
    const access_token = "VPmo2U661gTnhMVx0pc0-CtahNg_aqS5DuneLtYfO1o";
    const URL = `https://cdn.contentful.com/spaces/vveq832fsd73/entries?access_token=${access_token}&content_type=car`;

    try {
      fetch(URL)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setData(data?.items);
        });
    } catch (error) {
      console.log("There was an error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Helmet title="Car">
      <Container>
        <Row>
          {data?.map((item, index) => (
            <Col
              lg="3"
              md="4"
              sm="12"
              xs="12"
              key={index}
              className="mb-4 mt-4"
            >
              <ProductCard item={item} id={index} />
            </Col>
          ))}
        </Row>
      </Container>
    </Helmet>
  );
};

export default CarPage;
