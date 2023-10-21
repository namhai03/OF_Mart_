document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.getElementById('cart-items');
    const totalAmount = document.getElementById('total-amount');
    const paymentForm = document.getElementById('payment-form');

    // Mảng chứa các sản phẩm trong giỏ hàng (điền thông tin sản phẩm vào đây)
    const products = [
        { name: 'Dưa hấu', price: 5234 },
        { name: 'Hành tây', price: 5236 },
        { name: 'Gà', price: 8234 },
    ];

    


    // Xử lý sự kiện khi người dùng gửi biểu mẫu thanh toán
    paymentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const card = document.getElementById('card').value;

        // Thực hiện xử lý thanh toán ở đây (ở dạng giả định)
        alert(`Thanh toán thành công!\nHọ tên: ${name}\nEmail: ${email}\nSố thẻ: ${card}`);
    });
});

// Lấy danh sách các phần tử có giá trị từ các thẻ <span> trong giỏ hàng
const cartItems = document.querySelectorAll("#cart-items li .cart-item-info span:nth-child(2)");

// Khởi tạo biến tổng tiền
let totalAmount = 0;

// Duyệt qua danh sách và tính tổng tiền
cartItems.forEach(item => {
  const price = parseInt(item.textContent); // Chuyển đổi giá từ chuỗi sang số
  totalAmount += price;
});

// Cập nhật tổng tiền vào thẻ có id "total-amount"
const totalAmountElement = document.getElementById("total-amount");
totalAmountElement.textContent = totalAmount + " VNĐ";
