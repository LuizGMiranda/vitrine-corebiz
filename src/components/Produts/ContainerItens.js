import InfiniteCarousel from "react-leaf-carousel";
import Item from "./Item";

function ContainerItens({ items }) {
  if (items.length < 1) {
    return null;
  }

  const itemsRender = items.map((item) => (
    <Item
      key={item.productId}
      name={item.productName}
      imageUrl={item.imageUrl}
      listPrice={item.listPrice}
      price={item.price}
      installments={item.installments}
      stars={item.stars}
    />
  ));

  return (
    <InfiniteCarousel
      breakpoints={[
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        }
      ]}
      dots={true}
      arrows={true}
      showSides={false}
      sidesOpacity={0.5}
      scrollOnDevice={true}
      slidesToScroll={4}
      slidesToShow={4}
    >
      {itemsRender}
    </InfiniteCarousel>
  );
}

export default ContainerItens;
