import productsMap from '@/public/ProductsConstant';

const name = ['KRM201', 'KP1505A', 'C102', 'H-LIFT'];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const allProducts: any[] = [];

productsMap.forEach((item) => {
  allProducts.push(...item.products);
});

const topSellingHydraulicSolutions = allProducts
  .filter((product) => name.includes(product.name))
  .map((product) => ({
    name: product.name,
    model: product.model,
    image: product.images.main[0],
  }));

export default topSellingHydraulicSolutions;
