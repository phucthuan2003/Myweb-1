function isValidEmail(email) {
    const emailReguler = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailReguler.test(email);
}
function isValidPhoneNumber(phone) {
    const phoneReguler = /^[0-9]{10}$/;
    return phoneReguler.test(phone);
}
function signup() {
    const fullName = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;

    if (fullName.trim() === "") {
        alert("Vui Lòng Nhập Họ và Tên!");
        return;
    }
    if (email.trim() === "") {
        alert("Vui Lòng Nhập Email!");
        return;
    }
    if (!isValidEmail(email)) {
        alert("Hãy Nhập Đúng Định Dạng.\nExample@gmail.com");
        return;
    }
    if (phone.trim() === "") {
        alert("Vui Lòng Nhập SĐT:");
        return;
    }
    if (!isValidPhoneNumber(phone)) {
        alert("Vui Lòng Nhập Số Điện Thoại Đúng Định Dạng!");
        return;
    }
    if (password.trim() === "") {
        alert("Vui Lòng Nhập Mật Khẩu");
        return;
    }
    if (phone !== "0123456789") {
        alert("Vui Lòng Nhập Lại SĐT:");
        return;
    }
    if (password !== "winmart") {
        alert("Vui Lòng Nhập Lại Mật Khẩu");
        return;
    }
    alert("Đăng ký thành công!");
}
