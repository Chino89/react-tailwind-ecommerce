// export const totalPrice = (products) => {
//   let sum = 0;
//   products.forEach((product) => sum + product.price);
//   return sum;
// };

export const totalPrice = (products) => {
    return products.reduce((sum, product) => sum + product.price, 0)
} 

export const getDate = () => {
    const date = new Date();
    const [day, month, year] = [
      date.getDate(),
      date.getMonth() + 1,
      date.getFullYear(),
    ];

    return `${day.toString().padStart(2, "0")}/${month
      .toString()
      .padStart(2, "0")}/${year}`;
}