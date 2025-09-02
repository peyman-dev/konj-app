import Container from "@/app/components/ui/container";
import { Book } from "@/app/core/lib/types";
import React from "react";
import Sidebar from "./modules/sidebar";
import MainContent from "./modules/content";
import Collection from "@/app/components/common/collection";

const BookPageTemplate = ({ book }: { book: Book }) => {
  return (
    <Container>
      <Container className="flex gap-5">
        <MainContent />
        <Sidebar />
      </Container>
      <Container className="my-[60px] space-y-[60px]">
        <Collection title="از همین گوینده بشنوید " />
        <Collection title="از همین انتشارات بخوانید " />
      </Container>
    </Container>
  );
};

export default BookPageTemplate;
