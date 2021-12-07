import AppRouter from './AppRouter';
import Header from './components/common/Header/Header';

export default function App() {
  return (
    <div>
      <AppRouter>
        <Header />
      </AppRouter>
    </div>
  );
}
