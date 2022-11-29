import React from "react";
import Image from "next/image";
import { urlFor } from "../sanity";
interface Props {
  product: Product;
}

const Product = ({ product }: Props) => {
  return (
    <div className="flex h-fit w-[320px] select-none flex-col space-y-3 rounded-xl bg-[#35383c] p-8 md:h-[500px] md:w-[400px] md:p-10">
      <div className=" relative h-64 w-full md:h-72">
        <Image src={urlFor(product.image[0]).url()} layout="fill" objectFit="contain" alt="" />
      </div>
    </div>
  );
};

export default Product;
