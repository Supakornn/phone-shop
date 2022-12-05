import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectCartItems } from "../redux/cartSlice";
import Button from "../components/Button";
import { useRouter } from "next/router";
import CheckoutProduct from "../components/CheckoutProduct";

const checkout = () => {
   const items = useSelector(selectCartItems);
   const router = useRouter();
   const [groupedItems, setGroupedItems] = useState({} as { [key: string]: Product[] });

   useEffect(() => {
      const groupedItems = items.reduce((results, item) => {
         (results[item._id] = results[item._id] || []).push(item);
         return results;
      }, {} as { [key: string]: Product[] });
      setGroupedItems(groupedItems);
   }, [items]);

   return (
      <div>
         <Head>
            <title>Checkout</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Header />
         <main>
            <div>
               <h1 className="my-4 text-3xl font-semibold lg:text-4xl">
                  {items.length > 0 ? "Review your bag" : "Your bag is empty."}
               </h1>
               <p className="my-4">free delivery and free returns.</p>
               {items.length === 0 && (
                  <Button title="Continue Shopping" onClick={() => router.push("/")} />
               )}
            </div>

            {items.length > 0 && (
               <div>
                  {Object.entries(groupedItems).map(([key, items]) => (
                     <CheckoutProduct key={key} items={items} id={key} />
                  ))}
               </div>
            )}
         </main>
      </div>
   );
};

export default checkout;
