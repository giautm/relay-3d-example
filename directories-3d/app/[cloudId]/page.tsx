import Nav from '../../components/common/Nav';
import {Content} from '../../components/common/LayoutComponents';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Unused',
};

export default function CloudId() {
  return (
    <>
      <Nav />
      <Content>
        <p>Unused page</p>
      </Content>
    </>
  );
}
