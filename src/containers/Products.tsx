import { ProductList } from '@/components/organisms/ProductList';

export function Products(): JSX.Element {
  // Pretend this is a data fetch
  const products = [{
    id: 1,
    name: 'Item 1',
    author: 'John Doe',
    price: '1.00',
    link: '/product/1',
  },
  {
    id: 2,
    name: 'Item 2',
    author: 'John Doe',
    price: '1.00',
    link: '/product/2',
  },
  {
    id: 3,
    name: 'Item 3',
    author: 'John Doe',
    price: '1.00',
    link: '/product/3',
  },
  ];

  return (
    <>
      <ProductList items={products} />
    </>
  );
}
