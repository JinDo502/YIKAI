import parkerHydraulicGearPump from './Hydraulic Gear Pump/Parker';
import kpHydraulicGearPump from './Hydraulic Gear Pump/KP';
import pto from './PTO';
import tentsukiHoist from './Tentsuki Hoist';
import SpecialHydraulicProducts from './Accessory Part';
import CustomMade from './Custom-made';

interface ProductMap {
  name: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  products: any[];
}

const productsMap: ProductMap[] = [
  { name: ['Hydraulic Gear Pump', 'Parker'], products: parkerHydraulicGearPump },
  { name: ['Hydraulic Gear Pump', 'KP'], products: kpHydraulicGearPump },
  { name: ['PTO'], products: pto },
  { name: ['Tentsuki Hoist'], products: tentsukiHoist },
  { name: ['Accessory Part'], products: SpecialHydraulicProducts },
  { name: ['Custom-made'], products: CustomMade },
];

export default productsMap;
