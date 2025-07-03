import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import RouterConfig from './config/RouterConfig'
import Loading from './components/Loading'
import Drawer from '@mui/material/Drawer';
import '../src/app.css'
import { useSelector, useDispatch } from 'react-redux';
import { setDrawer } from './redux/sileces/basketSlice'

function App() {
  const { products, drawer } = useSelector((store) => store.basket);
  const dispatch = useDispatch();
  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
        <Drawer anchor="right" onClose={() => dispatch(setDrawer())} open={drawer}>
          {products && products.length > 0 ? (
            <>
              {products.map((product) => (
                <div key={product.id} className="drawer-product">
                  <img src={product.image} alt={product.title} />
                  <div className="drawer-product-info">
                    <h4>{product.title}</h4>
                    <p>Fiyat: {product.price} TL</p>
                    <p>Adet: {product.count}</p>
                  </div>
                  <button
                    className="drawer-delete-btn"
                    aria-label={`Ürünü sil: ${product.title}`}
                  >
                    &times;
                  </button>
                </div>
              ))}

              <div className="drawer-total">
                <span>Toplam:</span>
                <span>
                  {products
                    .reduce((sum, item) => sum + item.price * item.count, 0)
                    .toFixed(2)}{' '}
                  TL
                </span>
              </div>
            </>
          ) : (
            <p className="drawer-empty">Sepetiniz şu an boş</p>
          )}
        </Drawer>
      </PageContainer>
    </div>
  )
}

export default App
