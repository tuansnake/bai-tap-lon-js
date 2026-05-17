// =========================== XỬ LÝ SỰ KIỆN TRANG PROFILE ===========================

document.addEventListener('DOMContentLoaded', () => {
    const changeAvatarBtn = document.getElementById('changeAvatarBtn');
    const editProfileBtn = document.getElementById('editProfileBtn');
    const profileAvatar = document.getElementById('profileAvatar');

    // KIỂM TRA: Bảo mật cơ bản, nếu chưa đăng nhập mà cố tình vào trang profile thì đá về trang chủ
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
        alert('Bạn cần đăng nhập để xem hồ sơ!');
        window.location.href = 'trangchu.html';
        return;
    }

    // Tính năng đổi avatar giả lập
    if (changeAvatarBtn) {
        changeAvatarBtn.addEventListener('click', () => {
            const randomId = Math.floor(Math.random() * 70) + 1;
            profileAvatar.src = `https://i.pravatar.cc/150?img=${randomId}`;
            alert('Đã cập nhật ảnh đại diện mới thử nghiệm!');
        });
    }

    // Sự kiện khi bấm nút Chỉnh sửa thông tin
    if (editProfileBtn) {
        editProfileBtn.addEventListener('click', () => {
            alert('Tính năng chỉnh sửa hồ sơ đang được phát triển cho phiên bản tiếp theo!');
        });
    }
});