import Link from "next/link";
import React from "react";
import UserRatingStar from "../../product-reviews/rating-star";

const Details = () => {
  return (
    <main className="p-3" data-description="Product Details ">
      <h3 className="font-Farhang-Medium text-base">ملت عشق</h3>
      <div>
        <Link
          className="text-xs text-gray-200"
          href={`/explore/authors/${"author-name"}`}
        >
          پیمان احمدی
        </Link>
      </div>
      {/* Rating */}
      <div>
        <UserRatingStar />
      </div>
    </main>
  );
};

export default Details;
