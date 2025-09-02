import React from "react";
import { DownloadApplication, QuickAccess, SuggestionBooks, SuggestionCategories } from "./elements";

export const Content = () => {
  return (
    <section className="size-full flex-between">
      <div>
        <QuickAccess />
        <SuggestionCategories />
        <SuggestionBooks />
      </div>

    <div>
        <DownloadApplication />
    </div>
    </section>
  );
};
