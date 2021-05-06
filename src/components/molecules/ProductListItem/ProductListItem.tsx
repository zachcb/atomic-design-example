import { Button } from '@/components/atoms/Button';
import { ListItem } from './styles/Styled';

export type ProductListItemTypes = {
  name: string;
  author: string;
  price: string;
  link: string;
}

export function ProductListItem(props: ProductListItemTypes): JSX.Element {
  const { name, link } = props;

  return (
    <ListItem>
      <div className="row">
        <div className="col-xs-6">
          {name}
        </div>
        <div className="col-xs-6">
          <Button href={link}>Buy</Button>
        </div>
      </div>
    </ListItem>
  );
}
