import Banner from 'components/Home/Banner/Banner';
import Products from 'components/Home/Products/Products';
import ProductService from 'services/ProductService';
import useAsync from 'hooks/useAsync';

export default function Home() {
  // const [products, setProducts] = useState<IProduct[]>([] as IProduct[]);

  // useEffect(() => {
  //   ProductService.getProducts().then((res) => setProducts(res));
  // }, []);

  const { data, isLoading, isSuccess } = useAsync(ProductService.getProducts);

  return (
    <div>
      <Banner />
      <Products isLoading={isLoading} isSuccess={isSuccess} products={data} />
    </div>
  );
}
