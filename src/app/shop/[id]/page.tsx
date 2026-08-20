import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ProductDetailClient from "./product-detail-client";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((item) => item.id === Number(id));

  if (!product || product.id !== 2) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
