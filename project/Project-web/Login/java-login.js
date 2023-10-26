function isValidPhoneNumber(phone) {
    const phoneReguler = /^[0-9]{10}$/;
    return phoneReguler.test(phone);
}
function login() {
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    if (phone.trim() === "" || password.trim() === "") {
        alert('Vui Lòng Nhập Đầy Đủ Số Điện Thoại && Mật Khẩu');
        return;
    }
    if (!isValidPhoneNumber(phone)) {
        alert("Vui Lòng Nhập Số Điện Thoại Đúng Định Dạng!");
        return;
    }
    if (phone === '0123456789' && password === 'winmart') {
        alert("Đăng Nhập Thành Công!");
    } else {
        alert("Đăng Nhập Không Thành Công! Vui Lòng Kiểm Tra Lại Thông Tin");
    }
}
