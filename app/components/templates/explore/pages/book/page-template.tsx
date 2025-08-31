import Container from "@/app/components/ui/container";
import { Book } from "@/app/core/lib/types";
import React from "react";
import Sidebar from "./modules/sidebar";
import MainContent from "./modules/content";

const BookPageTemplate = ({ book }: { book: Book }) => {
  return <Container className="flex gap-5">
    <MainContent />
    <Sidebar />
  </Container>;
};

export default BookPageTemplate;
