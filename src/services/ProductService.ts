import requests from './httpService';

const { get, post, patch, delete: delProduct } = requests;

class ProductService {
  getProducts(): Promise<any> {
    return get('/api/product');
  }

  getProductById(id: string) {
    return get(`/api/product/${id}`);
  }

  addProduct(body: {}) {
    return post('/api/product', body);
  }

  updateProduct(id: string, body: {}) {
    return patch(`/api/product/${id}`, body);
  }

  deleteProduct(id: string) {
    return delProduct(`/api/product/${id}`);
  }
}

export default new ProductService;
