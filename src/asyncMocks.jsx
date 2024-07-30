const items = [
    { id: '1', name: 'Item 1', description: 'Description 1', price: 100, category: 'electronics' },
    { id: '2', name: 'Item 2', description: 'Description 2', price: 200, category: 'home' },
    { id: '3', name: 'Item 3', description: 'Description 3', price: 300, category: 'clothing' },
    // Agrega más ítems según sea necesario
  ];
  
  export const getItems = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (categoryId) {
          resolve(items.filter(item => item.category === categoryId));
        } else {
          resolve(items);
        }
      }, 1000);
    });
  };
  
  export const getItem = (itemId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(items.find(item => item.id === itemId));
      }, 1000);
    });
  };
  