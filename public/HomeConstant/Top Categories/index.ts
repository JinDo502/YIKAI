import productsMap from '@/public/ProductsConstant';

type ProductType = keyof typeof productsMap;

type TopCategories = { name: string; image: string; url: string };

const topCategories: TopCategories[] = [];

Object.keys(productsMap)?.forEach((type) => {
  const productMapItem = productsMap[type as ProductType];
  if (productMapItem.children.length > 0) {
    productMapItem.children.forEach((child) => {
      topCategories.push({
        name: child.name,
        image: child.products[0].images.main[0],
        url: `/products/${type} ${child.name}`,
      });
    });
  } else {
    topCategories.push({
      name: productMapItem.products[0].name,
      image: productMapItem.products[0].images.main[0],
      url: `/products/${type}`,
    });
  }
});

export default topCategories;
