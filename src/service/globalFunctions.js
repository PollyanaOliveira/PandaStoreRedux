// ---------------------------------------------------------------------------------------------
// Funções para Adicionar produtos ao carrinho de compras, existe duas versões:
// 1 - Versão addCartFull : maior e mais didática
// 2 - Versão addCartRefact : mais enxuta e organizada

export function addCartFull(product, cart) {
  const {
    id, title, thumbnail, price,
  } = product;
  if (!cart.length) {
    const availableQuantity = product.available_quantity;
    const productCart = [{
      id, title, thumbnail, price, count: 1, totalValue: price, availableQuantity,
    }];
    localStorage.setItem('LScart', JSON.stringify(productCart));
    return productCart;
  }
  let productCart = [...cart];
  const findProduct = productCart.find((item) => item.id === product.id);
  if (findProduct) {
    const key = productCart.indexOf(findProduct);
    productCart[key].count += 1;
    productCart[key].totalValue = Math.round((productCart[key].count
      * productCart[key].price) * 100) / 100;
    localStorage.setItem('LScart', JSON.stringify(productCart));
    return productCart;
  }
  const availableQuantity = product.available_quantity;
  productCart = [...productCart, {
    id, title, thumbnail, price, count: 1, totalValue: price, availableQuantity,
  }];
  localStorage.setItem('LScart', JSON.stringify(productCart));
  return productCart;
}

export function addCartRefact(product, cart) {
  const {
    id, title, thumbnail, price,
  } = product;
  const findProduct = cart.find((item) => item.id === product.id);
  if (!cart.length || !findProduct) {
    const availableQuantity = product.available_quantity;
    const productCart = [...cart, {
      id, title, thumbnail, price, availableQuantity, count: 1, totalValue: price,
    }];
    localStorage.setItem('LScart', JSON.stringify(productCart));
    return productCart;
  }
  const productCart = [...cart];
  const key = productCart.indexOf(findProduct);
  productCart[key].count += 1;
  productCart[key].totalValue = Math.round((productCart[key].count
    * productCart[key].price) * 100) / 100;
  localStorage.setItem('LScart', JSON.stringify(productCart));
  return productCart;
}
// ---------------------------------------------------------------------------------------------

export const restoreFromLocalStorage = () => {
  const localStorageCart = localStorage.getItem('LScart');
  if (localStorageCart) {
    const LScart = JSON.parse(localStorageCart);
    return {
      LScart,
    };
  }
  return {
    LScart: [],
  };
};

// ---------------------------------------------------------------------------------------------
// Checkout Page

export const completedBuy = (cart, countScreen) => {
  localStorage.setItem('LScart', JSON.stringify(cart));
  localStorage.setItem('LScount', JSON.stringify(countScreen));
  return {
    updatedCart: cart,
    updatedCount: countScreen,
  };
};

// ---------------------------------------------------------------------------------------------
// Cart Page

export const increaseQuantity = (id, cart) => {
  const productCart = [...cart];
  const findProduct = productCart.find((item) => item.id === id);
  const key = productCart.indexOf(findProduct);
  productCart[key].count += 1;
  productCart[key].totalValue = Math.round((productCart[key].count
    * productCart[key].price) * 100) / 100;
  localStorage.setItem('LScart', JSON.stringify(productCart));
  return {
    updatedCart: productCart,
    updateSum: true,
  };
};

export const decreaseQuantity = (id, cart) => {
  const productCart = [...cart];
  const findProduct = productCart.find((item) => item.id === id);
  const key = productCart.indexOf(findProduct);
  if (productCart[key].count > 1) {
    productCart[key].count -= 1;
    productCart[key].totalValue = Math.round((productCart[key].count
      * productCart[key].price) * 100) / 100;
    localStorage.setItem('LScart', JSON.stringify(productCart));
    return {
      updatedCart: productCart,
      updateSum: true,
    };
  }
  return '';
};

export const removeItem = (id, cart) => {
  const productCart = [...cart];
  const updatedCart = productCart.filter((item) => item.id !== id);
  localStorage.setItem('LScart', JSON.stringify(updatedCart));
  return {
    updatedCart,
    updateSum: true,
  };
};

export const clearProducts = () => {
  const updatedCart = [];
  const updatedCount = [];
  localStorage.setItem('LScart', JSON.stringify(updatedCart));
  localStorage.setItem('LScount', JSON.stringify(updatedCount));
  return {
    updatedCart,
    updatedCount,
    updateSum: true,
  };
};

export const totalSumProducts = (cart) => {
  const valueSum = cart.reduce((acc, value) => acc + value.totalValue, 0);
  return {
    totalSum: valueSum,
    updateSuM: false,
  };
};

// Lógica abaixo não está sendo usada, foi usada anteriormente para solucionar
// um bug. -> Nesse momento ela é uma lembrança de uma batalha vencida ;)
export const countProduct = (id, productCart, countScreeN) => {
  const minValueCount = 1;
  if (productCart) {
    const valueCount = productCart.find((item) => item.id === id).count;
    const countScreen = [{ id, count: valueCount }, ...countScreeN];
    localStorage.setItem('LScount', JSON.stringify(countScreen));
    return countScreen;
  }
  const countScreen = [{ id, count: minValueCount }, ...countScreeN];
  localStorage.setItem('LScount', JSON.stringify(countScreen));
  return countScreen;
};
// ---------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------
