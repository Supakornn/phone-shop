import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SearchIcon, ShoppingBagIcon, UserIcon } from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import { selectCartItems } from "../redux/cartSlice";

const Header = () => {
  const session = false;
  const items = useSelector(selectCartItems);

  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#e7ecee] p-4">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100">
            <Image src="https://rb.gy/vsvv2o" fill style={{ objectFit: "contain" }} alt="logo" />
          </div>
        </Link>
      </div>
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <a className="headerLink">Product</a>
        <a className="headerLink">Explore</a>
        <a className="headerLink">Support</a>
        <a className="headerLink">Business</a>
      </div>
      <div className="flex items-center justify-center gap-x-4 md:w-1/5">
        <SearchIcon className="headerIcon" />
        <Link href="/checkout">
          <div className="relative cursor-pointer">
            {items.length > 0 && (
              <span className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
                {items.length}
              </span>
            )}
            <ShoppingBagIcon className="headerIcon" />
          </div>
        </Link>
        {session ? (
          <Image
            src={
              // session.user?.image ||
              "https://media.discordapp.net/attachments/1032670881039786045/1034257202137018368/DB03DAE9-C209-4AD1-A517-92B891879F39.jpg?width=507&height=670"
            }
            alt=""
            className="cursor-pointer rounded-full"
            width={34}
            height={34}
            // onClick={() => signOut()}
          />
        ) : (
          <UserIcon
            className="headerIcon"
            // onClick={() => signIn()}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
