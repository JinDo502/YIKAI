import productsMap from '@/public/ProductsConstant';

type TopCategories = { name: string; image: string; url: string; type: string[] };

const topCategories: TopCategories[] = [];

productsMap.forEach((item) => {
  const product = item.products[0];
  topCategories.push({
    name: product.name,
    image: product.images.main[0],
    url: `/categories/${item.name.join('/')}`,
    type: item.name,
  });
});

export default topCategories;
