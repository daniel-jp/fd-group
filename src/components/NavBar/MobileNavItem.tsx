import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const MobileNavItem = ({href, children}:any) => {
  return (
    <Link to={href}>
      <Text>{children}</Text>
    </Link>
  );
};
export default MobileNavItem;