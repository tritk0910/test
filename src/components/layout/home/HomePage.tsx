import BestProduct from "./BestProduct";
import BrandStory from "./BrandStory";
import HappenedIssue from "./HappenedIssue";
import Introduction from "./Introduction";
import MainBanner from "./MainBanner";
import ProductList from "./ProductList";
import WhatHappened from "./WhatHappened";

export default function HomePage() {
  return (
    <>
      <MainBanner />
      <Introduction />
      <BestProduct />
      <ProductList />
      <BrandStory />
      <HappenedIssue />
      <WhatHappened />
    </>
  );
}
