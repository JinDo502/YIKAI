import productsMap from '@/public/ProductsConstant';

const name = ['KRM201', 'KP1505A', 'C102', 'H-LIFT'];

const allProducts = [
  ...productsMap['Parker Hydraulic Gear Pump']?.map((product) => ({ ...product, type: 'Parker Hydraulic Gear Pump' })),
  ...productsMap['KP Hydraulic Gear Pump']?.map((product) => ({ ...product, type: 'KP Hydraulic Gear Pump' })),
  ...productsMap['Tentsuki Hoist']?.map((product) => ({ ...product, type: 'Tentsuki Hoist' })),
  ...productsMap['Special Hydraulic Products']?.map((product) => ({ ...product, type: 'Special Hydraulic Products' })),
];

const topSellingHydraulicSolutions = allProducts
  .filter((product) => name.includes(product.name))
  .map((product) => ({
    name: product.name,
    model: product.model,
    image: product.images.main[0],
    type: product.type,
  }));

export default topSellingHydraulicSolutions;
