export const fetchCategories = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/categories`);
  const data = await res.json();
  console.log(data);
};
