interface Category {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: string;
  slug: {
    _type: "slug";
    current: string;
  };
  title: string;
}

interface Image {
  _key: string;
  _type: "image";
  asset: {
    url: string;
  };
}

interface Product {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: string;
  slug: {
    _type: "slug";
    current: string;
  };
  title: string;
  description: string;
  price: number;
  image: Image[];
  category: {
    _ref: string;
    _type: "reference";
  };
}

interface StripeProduct {
  id: string;
  amount_discount: number;
  amount_subtotal: number;
  amount_tax: number;
  amount_total: number;
  currency: string;
  description: string;
  object: string;
  quantity: number;
  price: {
    unit_amount: number;
  };
}
