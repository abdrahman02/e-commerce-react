import { Card } from "antd";
const { Meta } = Card;
import Product1 from "../assets/images/product1.png";
import Product2 from "../assets/images/product2.png";
import Product3 from "../assets/images/product3.jpg";
import { ShoppingCart } from "lucide-react";

const images = [
  Product1,
  Product2,
  Product3,
  Product1,
  Product2,
  Product3,
  Product1,
  Product2,
  Product3,
];
const Home = () => {
  return (
    <main className="px-20 py-8 h-[5000px]">
      <section className="flex flex-wrap justify-start items-center gap-x-4 gap-y-8">
        {images.map((image, index) => (
          <Card
            key={index}
            hoverable
            style={{
              width: 180,
            }}
            className="shadow"
            cover={
              <img
                alt={image + index++}
                src={image}
                className="object-cover h-180"
              />
            }
            actions={[
              <button
                className="btn btn-circle text-primary shadow-md hover:bg-primary hover:text-primary-content"
                key={`addToCart${index}`}
              >
                <ShoppingCart size={20} />
              </button>,
            ]}
          >
            <Meta
              title={`Product ${index++}`}
              description={`Jumlah terjual: ${index}`}
            />
          </Card>
        ))}
      </section>
    </main>
  );
};

export default Home;
