import productsMap from '@/public/ProductsConstant';

type ProductType = keyof typeof productsMap;

const topCategories = Object.keys(productsMap).map((type) => ({
  name: type,
  image: productsMap[type as ProductType][0].images.main[0],
  url: `/products/${type}`,
}));

export default topCategories;
