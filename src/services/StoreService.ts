import requests from './httpService';

const { get, post, patch, delete: delStore } = requests;

class StoreService {
  getStore(): Promise<any> {
    return get('/api/product');
  }

  getStoreById(id: string) {
    return get(`/api/product/${id}`);
  }

  addStore(body: {}) {
    return post('/api/product', body);
  }

  updateStore(id: string, body: {}) {
    return patch(`/api/product/${id}`, body);
  }

  deleteStore(id: string) {
    return delStore(`/api/product/${id}`);
  }
}

export default new StoreService;
