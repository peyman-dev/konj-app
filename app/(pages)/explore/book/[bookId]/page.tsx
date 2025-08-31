import BookPageTemplate from "@/app/components/templates/explore/pages/book/page-template";
import { books } from "@/app/core/lib/constants";
import React, { Suspense } from "react";

const Page = async ({
  params,
}: {
  params: {
    bookId: string;
  };
}) => {
  const { bookId } = await params;
  return <Suspense>
    <BookPageTemplate book={books[0]} />
  </Suspense>;
};

export default Page;
