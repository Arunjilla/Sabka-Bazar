import { useContext } from 'react';

import banners from '../../server/banners/index.get.json';
import Banners from '../../components/banners/banner';
import { CategoriesContext } from '../../contexts/categories.context';
import Directory from '../../components/directory/directory.component';

const Home = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <div>
      <Banners banners={banners} />
      <Directory categories={categories} />
      <>j</>
      
    </div>
  );
};

export default Home;
