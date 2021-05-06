import { ProductListItem } from '@/components/molecules/ProductListItem';
import { List } from './styles/Styled';

type ProductListProps = {
  items: any[];
}

export function ProductList(props: ProductListProps): JSX.Element {
  const { items } = props;

  return (
    <List>
      {items.map((item) => (
        <ProductListItem
          key={item.id}
          name={item.name}
          author={item.author}
          price={item.price}
          link={item.link}
        />
      ))}
    </List>
  );
}
