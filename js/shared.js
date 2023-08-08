function addHeaderTop() {
    document.write(`
        <header class="header position-relative">
            <div class="container-fluid d-none d-md-block">
                <div class="header-contact row">
                    <div class="col-lg-8 d-flex">
                        <p class="d-flex me-4 text-white p-2">
                            <svg class="header-icon me-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>                      
                            Th2 - CN 9:00 AM - 21:00 PM
                        </p>
                        <p class="d-flex me-4 text-white p-2">
                            <svg class="header-icon me-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            <a class="text-decoration-none text-white" href="">1900 6750</a>                     
                        </p>
                        <p class="d-flex me-4 text-white p-2">
                            <svg class="header-icon me-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg> 
                            <a class="text-decoration-none text-white" href="">hospital@gmail.com</a>                     
                        </p>
                    </div>
                    <div class="col-lg-4 d-none d-lg-block">
                        <div class="d-flex justify-content-end">
                            <a class="text-white text-decoration-none p-1 pe-0" href="">Đăng nhập</a> 
                            <span class="text-white d-flex d-flex justify-content-end p-1">/</span> 
                            <a class="text-white text-decoration-none p-1 ps-0" href="">Đăng ký</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid position-relative d-flex justify-content-between align-items-center py-3 bg-success ">
                <!-- icon bars mobile -->
                <div id="nav-bars-icon"  class="d-none tab-bars">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>    
                </div>     
                <a href="index.html" class="logo-box">
                        <img src="./images/logo-link.webp" href="index.html" alt="logo" class="w-100 d-block logo">
                </a> 
                <nav class="nav-bars-menu">
                    <ul class="nav-list d-flex justify-content-start list-unstyled">
                        <li class="nav-item px-2 px-4 fw-bolder">
                            <a href="" class="nav-link">Trang chủ</a>
                        </li>
                        <li class="nav-item px-2 px-4 fw-bolder">
                            <a href="" class="nav-link">Giới thiệu</a>
                        </li>
                        <li class="nav-item hover-dropdown px-2 px-4 fw-bolder position-relative">
                            <a href="" class="nav-link">Đặt lịch hẹn</a>
                            <div class="drop-icon">
                                <svg class="drop-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                            <ul class="drop-wrapp position-absolute py-2 px-4">
                                <li class="drop-small list-unstyled py-1"><a class="text-decoration-none text-black fw-lighter" href="">Tầm soát ung thư</a></li>
                                <li class="drop-small list-unstyled py-1"><a class="text-decoration-none text-black fw-lighter" href="">Mô học</a></li>
                                <li class="drop-small list-unstyled py-1"><a class="text-decoration-none text-black fw-lighter" href="">Khám tổng quát</a></li>
                                <li class="drop-small list-unstyled py-1"><a class="text-decoration-none text-black fw-lighter" href="">Xét nghiệm máu</a></li>
                                <li class="drop-small list-unstyled py-1"><a class="text-decoration-none text-black fw-lighter" href="">Xét nghiệm di truyền</a></li>
                                <li class="drop-small list-unstyled py-1"><a class="text-decoration-none text-black fw-lighter" href="">Tế bào học</a></li>
                            </ul>
                        </li>
                        <li class="nav-item hover-dropdown px-2 px-4 fw-bolder position-relative">
                            <a href="" class="nav-link">Sản phẩm</a>
                            <div class="drop-icon">
                                <svg class="drop-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                            <ul class="drop-wrapp position-absolute py-2 px-4">
                                <li class="drop-small list-unstyled py-1"><a class="text-decoration-none text-black fw-lighter" href="">Sản phẩm nổi bật</a></li>
                                <li class="drop-small list-unstyled py-1"><a class="text-decoration-none text-black fw-lighter" href="">Sản phẩm y tế</a></li>
                                <li class="drop-small list-unstyled py-1"><a class="text-decoration-none text-black fw-lighter" href="">Phụ kiện y tế</a></li>
                                <li class="drop-small list-unstyled py-1"><a class="text-decoration-none text-black fw-lighter" href="">Máy chụp xquang</a></li>
                            </ul>
                        </li>
                        <li class="nav-item px-2 px-4 fw-bolder">
                            <a href="" class="nav-link">Tin tức</a>
                        </li>
                        <li class="nav-item px-2 px-4 fw-bolder">
                            <a href="" class="nav-link">Liên hệ</a>
                        </li>
                    </ul>
                </nav> 
                <div class="cart-box ms-5 d-flex justify-content-center align-items-center fw-bolder">
                    <svg width="25px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    <span class="cart-text">Giỏ hàng <span class="count_item">(5)</span> </span>
                </div>
            </div>
        </header>
    `)
}

function addOverlayAndNavBar() {
    document.write(`
        <div id="overlay" class="d-none position-fixed top-0 start-0 end-0 bottom-0 w-100 h-100 z-3 bg-secondary z-2"></div>
        <div id="nav-bar-main" class="bg-white d-lg-none"> 
            <div class="nav-bar-box d-flex justify-content-end">
                <a class="text-black text-decoration-none p-1 pe-0 fw-bold" href="">Đăng nhập</a> 
                <span class="text-black d-flex d-flex justify-content-end p-1">/</span> 
                <a class="text-black text-decoration-none p-1 ps-0 fw-bold" href="">Đăng ký</a>
            </div> 
            <!-- nav-bars-->
            <nav id="nav-bars-box">
                <ul class="nav-list justify-content-start list-unstyled">
                    <li class="nav-item px-2 px-4 ">
                        <a href="" class="nav-link">Trang chủ</a>
                    </li>
                    <li class="nav-item px-2 px-4 ">
                        <a href="" class="nav-link">Giới thiệu</a>
                    </li>
                    <li id="" class="nav-item px-2 px-4  position-relative hover-dropdown">
                        <a href="" class="nav-link">Đặt lịch hẹn</a>
                        <div class="drop-icon-responsive ">
                            <!-- <svg class="drop-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg> -->
                            <svg class="drop-icon-press" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                        <ul class="d-none nav-item-drop drop-wrapp position-absolute py-2 px-4">
                            <li class="drop-small list-unstyled py-1"><a class="text-decoration-none text-black fw-lighter" href="">Tầm soát ung thư</a></li>
                            <li class="drop-small list-unstyled py-1"><a class="text-decoration-none text-black fw-lighter" href="">Mô học</a></li>
                            <li class="drop-small list-unstyled py-1"><a class="text-decoration-none text-black fw-lighter" href="">Khám tổng quát</a></li>
                            <li class="drop-small list-unstyled py-1"><a class="text-decoration-none text-black fw-lighter" href="">Xét nghiệm máu</a></li>
                            <li class="drop-small list-unstyled py-1"><a class="text-decoration-none text-black fw-lighter" href="">Xét nghiệm di truyền</a></li>
                            <li class="drop-small list-unstyled py-1"><a class="text-decoration-none text-black fw-lighter" href="">Tế bào học</a></li>
                        </ul>
                    </li>
                    <li id="" class="nav-item px-2 px-4 position-relative hover-dropdown">
                        <a href="" class="nav-link">Sản phẩm</a>
                        <div class="drop-icon-responsive">
                            <!-- <svg class="drop-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg> -->
                            <svg class="drop-icon-press" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                        <ul class="d-none nav-item-drop drop-wrapp position-absolute py-2 px-4 z-1">
                            <li class="drop-small list-unstyled py-1"><a class="text-decoration-none text-black fw-lighter" href="">Sản phẩm nổi bật</a></li>
                            <li class="drop-small list-unstyled py-1"><a class="text-decoration-none text-black fw-lighter" href="">Sản phẩm y tế</a></li>
                            <li class="drop-small list-unstyled py-1"><a class="text-decoration-none text-black fw-lighter" href="">Phụ kiện y tế</a></li>
                            <li class="drop-small list-unstyled py-1"><a class="text-decoration-none text-black fw-lighter" href="">Máy chụp xquang</a></li>
                        </ul>
                    </li>
                    <li class="nav-item px-2 px-4 ">
                        <a href="" class="nav-link">Tin tức</a>
                    </li>
                    <li class="nav-item px-2 px-4 ">
                        <a href="" class="nav-link">Liên hệ</a>
                    </li>
                </ul>
            </nav> 
        </div>
    `)
}

function addFooter() {
    document.write(`
        <footer class="footer border-top mt-2">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center text-sm-start col-sm-6 col-lg-4 col-xl-3">
                        <h3 class="title pt-4">Liên hệ</h3>
                        <ul class="contact-box p-0">
                            <li class="list-unstyled d-flex py-1 justify-content-center justify-content-sm-start">
                                <div class="contact-item">
                                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                </div>
                                <span class="phone-number">1900565656</span>
                            </li>
                            <li class="list-unstyled d-flex py-1 justify-content-center justify-content-sm-start">
                                <div class="contact-item">
                                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg> 
                                </div>
                                <span class="contact-address-content">Địa điểm</span>

                            </li>
                            <div class="list-unstyled py-1"> 
                                <ul>
                                    <li class=""><a class="hover-text text-decoration-none text-black fs-6" href="">Hệ thống bệnh viện và phòng khám</a></li>
                                    <li class=""><a class="hover-text text-decoration-none text-black fs-6" href="">Hệ thống chi nhánh các tỉnh</a></li>
                                    <li class=""><a class="hover-text text-decoration-none text-black fs-6" href="">Hệ thống văn phòng</a></li>
                                </ul> 
                            </div>
                        </ul>  
                    </div>
                    <div class="col-12 text-center text-sm-start col-sm-6 col-lg-4 col-xl-3">
                        <h3 class="title pt-4">Về chúng tôi</h3>
                        <ul class="list-unstyled aboutus">
                            <li class="list-unstyled py-2"><a class="hover-text text-decoration-none text-black fs-6" href="">Hệ thống Vinmec</a></li>
                            <li class="list-unstyled py-2"><a class="hover-text text-decoration-none text-black fs-6" href="">Đội ngũ bác sĩ</a></li>
                            <li class="list-unstyled py-2"><a class="hover-text text-decoration-none text-black fs-6" href="">Tin tức</a></li>
                            <li class="list-unstyled py-2"><a class="hover-text text-decoration-none text-black fs-6" href="">Tuyển dụng</a></li>
                            <li class="list-unstyled py-2"><a class="hover-text text-decoration-none text-black fs-6" href="">Sitemap</a></li>
                            <li class="list-unstyled py-2"><a class="hover-text text-decoration-none text-black fs-6" href="">Chính sách quyền riêng tư</a></li>
                        </ul>
                    </div>
                    <div class="col-12 text-center text-sm-start col-sm-6 col-lg-4 col-xl-3">
                        <h3 class="title pt-4">Dịch vụ</h3>
                        <ul class="list-unstyled aboutus">
                            <li class="list-unstyled py-2"><a class="hover-text text-decoration-none text-black fs-6" href="">Giới thiệu</a></li>
                            <li class="list-unstyled py-2"><a class="hover-text text-decoration-none text-black fs-6" href="">Đăng ký khám và tư vấn</a></li>
                            <li class="list-unstyled py-2"><a class="hover-text text-decoration-none text-black fs-6" href="">Hướng dẫn khách hàng</a></li>
                            <li class="list-unstyled py-2"><a class="hover-text text-decoration-none text-black fs-6" href="">Viện nghiên cứu Tế bào gốc và Công nghệ Gen Vinmec</a></li>
                        </ul>
                    </div>
                    <div class="col-12 text-center text-sm-start col-sm-6 col-lg-4 col-xl-3">
                        <h3 class="title pt-4">Quy chế hoạt động</h3>
                        <ul class="list-unstyled aboutus">
                            <li class="list-unstyled py-2"><a class="hover-text text-decoration-none text-black fs-6" href="">Quy chế hoạt động</a></li>
                            <li class="list-unstyled py-2"><a class="hover-text text-decoration-none text-black fs-6" href="">Chính sách bảo mật & Điều khoản sử dụng</a></li>
                            <li class="list-unstyled py-2"><a class="hover-text text-decoration-none text-black fs-6" href="">Trách nhiệm và cam kết</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="copyright text-center py-3">Copyright © 2023 Sapo.vn by NguyenThanhPhat</div>
        </footer> 
    `)
}

function breadCrumb() {
    document.write(`
        <section class="bread-crumb mb-5">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2 class="title-name text-white fw-bold">Máy xông mũi họng</h2>
                        <ul class="breadcrumb list-unstyled ">
                            <li class="breadcrumb-li-item d-flex me-2">
                                <a href="#" class="breadcrumb-item__link me-2 fs-6 text-decoration-none">Trang chủ</a>
                                <span class="icon-row-right d-flex justify-content-center align-items-center">
                                    <svg class="text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </span>
                            </li>
                            <li class="breadcrumb-li-item d-flex me-2">
                                <a href="#" class="breadcrumb-item__link me-2 fs-6 text-decoration-none">Phụ kiện y tế</a>
                                <span class="icon-row-right d-flex justify-content-center align-items-center">
                                    <svg class="text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </span>
                            </li>
                            <li class="breadcrumb-li-item d-flex me-2">
                                <a href="#" class="breadcrumb-item__link me-2 fs-6 text-decoration-none"><span>Máy xông mũi họng</span></a>
                                <span class="icon-row-right d-flex justify-content-center align-items-center">
                                    <svg class="text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    `)
}