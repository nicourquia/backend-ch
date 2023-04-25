class ProductManager {
    constructor() {
      this.products = [];
      this.nextId = 1;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.error("Todos los campos son obligatorios");
        return;
      }
  
      const existingProduct = this.products.find((product) => product.code === code);
      if (existingProduct) {
        console.error("El código del producto ya existe");
        return;
      }
  
      const product = {
        id: this.nextId,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      };
      this.products.push(product);
      this.nextId++;
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find((product) => product.id === id);
      if (product) {
        return product;
      } else {
        console.error("Not found");
      }
    }
  }

const productManager = new ProductManager();
productManager.addProduct("Juguete de Iron Man", "Juguete de Iron Man Funko Pop Coleccionable", 5000, "/ruta/de/imagen1.jpg", "001", 10);
console.log(productManager.getProductById(1))
console.log(productManager.getProducts())