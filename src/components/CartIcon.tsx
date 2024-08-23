"use client";
import { useCartStore } from "@/utils/store";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const CartIcon = () => {
  const { data: session, status } = useSession();

  const { totalItems } = useCartStore();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  return (
    <Link href={session?.user ? "/cart" : "/"}>
      <div className="flex items-center gap-4">
        <div className="relative w-8 h-8 md:w-5 md:h-5">
          <Image
            src="/cart.png"
            alt=""
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
        <span>Cart ({session?.user ? totalItems : 0})</span>
      </div>
    </Link>
  );
};

export default CartIcon;
