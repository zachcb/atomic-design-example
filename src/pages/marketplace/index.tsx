import Head from 'next/head';
import { Toggle } from '@/components/molecules/Toggle';
import { Products } from '@/containers/Products';
import { MarketplaceIntro } from './components/sections/intro';
import { MarketplaceDetails } from './components/sections/details';

export default function MarketplacePage(): JSX.Element {
  return (
    <>
      <Head>
        <title>Marketplace</title>
      </Head>
      <Toggle />
      <Toggle />
      <MarketplaceIntro />
      <MarketplaceDetails />
      <Products />
    </>
  );
}
