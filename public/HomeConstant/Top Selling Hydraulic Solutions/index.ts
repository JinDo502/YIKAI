import productsMap from '@/public/ProductsConstant';

const name = ['KRM201', 'KP1505A', 'C102', 'H-LIFT'];

type ProductType = keyof typeof productsMap;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const allProducts: any[] = [];

Object.keys(productsMap)?.forEach((type) => {
  const productMapItem = productsMap[type as ProductType];
  if (productMapItem.children.length > 0) {
    productMapItem.children.forEach((child) => {
      allProducts.push(...child.products);
    });
  } else {
    allProducts.push(...productMapItem.products);
  }
});

const topSellingHydraulicSolutions = allProducts
  .filter((product) => name.includes(product.name))
  .map((product) => ({
    name: product.name,
    model: product.model,
    image: product.images.main[0],
    type: product.type,
  }));

export default topSellingHydraulicSolutions;
