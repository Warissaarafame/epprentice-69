const STORAGE_KEY = "lunchOrders";
const factorySupport = 10; // ✅ คนละ 10 บาท (ต่อออเดอร์)

function getOrders() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveOrders(orders) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
}

function addOrder(order) {
  const orders = getOrders();
  orders.push(order);
  saveOrders(orders);
}

function clearOrders() {
  localStorage.removeItem(STORAGE_KEY);
}