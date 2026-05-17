// =======================================================================================
// TỰ ĐỘNG NHÚNG NAVBAR / FOOTER

document.addEventListener("DOMContentLoaded", () => {
    
    // MẸO BẤT TỬ: Lấy chính xác đường dẫn của file default.js đang chạy
    // Nó sẽ trả về dạng: http://127.0.0.1:5500/.../js/default.js
    const jsFileUrl = import.meta.url;

    // Từ file js/, ta đi lùi ra ngoài 1 cấp (bỏ chữ js/) rồi đi vào components/
    const navbarUrl = new URL('../components/navbar.html', jsFileUrl).href;
    const footerUrl = new URL('../components/footer.html', jsFileUrl).href;

    // 1. NHÚNG NAVBAR
    fetch(navbarUrl)
        .then(response => response.text())
        .then(data => {
            const navbarBox = document.getElementById("global-navbar");
            if (navbarBox) {
                navbarBox.innerHTML = data;
                initLoginLogic(); 
            }
        })
        .catch(err => console.error("Lỗi tải Navbar:", err));

    // 2. NHÚNG FOOTER
    fetch(footerUrl)
        .then(response => response.text())
        .then(data => {
            const footerBox = document.getElementById("global-footer");
            if (footerBox) {
                footerBox.innerHTML = data;
            }
        })
        .catch(err => console.error("Lỗi tải Footer:", err));
});


// =======================================================================================
// HÀM XỬ LÝ LOGIC ĐĂNG NHẬP TOÀN TRANG (GIỮ NGUYÊN TÍNH NĂNG CŨ CỦA CẬU)
// =======================================================================================
function initLoginLogic() {
    const loginBtn = document.getElementById('loginBtn');
    const loginSidebar = document.getElementById('loginSidebar');
    const closeSidebar = document.getElementById('closeSidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const loginForm = document.getElementById('loginForm');
    const userProfile = document.getElementById('userProfile');
    const logoutBtn = document.getElementById('logoutBtn');
    let menuTimeout; 

    // Kiểm tra trạng thái lưu trong máy xem đã đăng nhập chưa
    function checkLoginStatus() {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn === 'true') {
            if (loginBtn) loginBtn.classList.add('hidden');
            if (userProfile) userProfile.classList.remove('hidden');
        } else {
            if (loginBtn) loginBtn.classList.remove('hidden');
            if (userProfile) userProfile.classList.add('hidden');
        }
    }
    checkLoginStatus(); // Chạy ngay khi nạp giao diện xong

    // Đóng mở Sidebar lề phải
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            loginSidebar.classList.add('active');
            sidebarOverlay.classList.add('active');
        });
    }

    if (closeSidebar) closeSidebar.addEventListener('click', closeSidebarFunc);
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebarFunc);

    function closeSidebarFunc() {
        loginSidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
    }

    // Xử lý nút Đăng nhập trong Form
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            closeSidebarFunc(); 
            localStorage.setItem('isLoggedIn', 'true'); // Lưu trạng thái đăng nhập
            checkLoginStatus();
            loginForm.reset(); 
        });
    }

    // Xử lý nút Đăng xuất
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.setItem('isLoggedIn', 'false'); // Xóa trạng thái đăng nhập
            checkLoginStatus();
            const dropdown = userProfile.querySelector('.dropdown-menu');
            if (dropdown) dropdown.classList.remove('show');
        });
    }

    // Hiệu ứng di chuột vào Avatar giữ menu hiện thêm 1 giây
    if (userProfile) {
        userProfile.addEventListener('mouseenter', () => {
            clearTimeout(menuTimeout); 
            const dropdown = userProfile.querySelector('.dropdown-menu');
            if (dropdown) dropdown.classList.add('show'); 
        });

        userProfile.addEventListener('mouseleave', () => {
            const dropdown = userProfile.querySelector('.dropdown-menu');
            if (dropdown) {
                menuTimeout = setTimeout(() => {
                    dropdown.classList.remove('show');
                }, 1000); 
            }
        });
    }
}