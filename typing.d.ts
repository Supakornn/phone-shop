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
