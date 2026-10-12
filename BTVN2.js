const bookingReservation = {
  bookingId: "BK-2024-8891",
  guestName: "Trần Minh Quang",
  roomType: "Deluxe Ocean View",
  roomPrice: 1500000,
  checkInHour: 9,
  discountCode: "SUMMER10"
};

const isVoucherValid = false;
const priceKey = "roomPrice";

// SỬA LỖI 1: Dùng Bracket Notation [priceKey] thay vì Dot Notation .priceKey để lấy giá trị từ biến động
const basePrice = bookingReservation[priceKey];

let earlySurcharge = 0;
if (bookingReservation.checkInHour < 12) {
  earlySurcharge = basePrice * 0.3;
  bookingReservation.earlySurcharge = earlySurcharge;
}

const totalAmount = basePrice + earlySurcharge;
bookingReservation.totalAmount = totalAmount;

// SỬA LỖI 2: Dùng toán tử delete để xóa hoàn toàn thuộc tính khỏi đối tượng khi voucher không hợp lệ
if (!isVoucherValid) {
  delete bookingReservation.discountCode;
}

// SỬA LỖI 3: Dùng Bracket Notation bookingReservation[key] trong vòng lặp for...in để lấy giá trị động
console.log("--- CHI TIẾT PHIẾU ĐẶT PHÒNG ---");
for (const key in bookingReservation) {
  console.log(key + ": " + bookingReservation[key]);
}