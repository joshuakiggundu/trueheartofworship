document.addEventListener("DOMContentLoaded", function() {
    var navElement = document.getElementById("nav");
    if (navElement) {
        navElement.innerHTML = `
            <header class="top_panel_wrap top_panel_style_3 scheme_original">
                    <div class="top_panel_wrap_inner top_panel_inner_style_3 top_panel_position_above">
                        <!-- Menu area -->
                        <div class="top_panel_middle">
                            <div class="content_wrap">
                                <!-- Contact logo -->
                                <div class="contact_logo">
                                    <div class="logo">
                                        <a href="index.html">
                                            <img src="/images/logo.png" class="logo_main" alt="">
                                            <img src="/images/logo.png" class="logo_fixed" alt="">
                                        </a>
                                    </div>
                                </div>
                                <!-- /Contact logo -->
                                <!-- Main Menu -->
                                <div class="menu_main_wrap">
                                    <nav class="menu_main_nav_area">
                                        <ul id="menu_main" class="menu_main_nav">
                                            <!-- Home -->
                                            <li class="menu-item">
                                                <a href="index.html">Home</a>
                                                
                                            </li>
                                            <!-- /Home -->
                                            <!-- Events -->
                                            <li class="menu-item">
                                                <a href="events.html">Events</a>
                                            </li>
                                            <!-- /Events -->
                                            <!-- About us -->
                                            <li class="menu-item">
                                                <a href="about-us.html"">About us</a>  
                                            </li>
                                            <!-- /About us -->
                                            <!-- Gallery -->
                                            <li class="menu-item menu-item">
                                                <a href="gallery-masonry.html">Gallery</a>
                                            </li>
                                            <!-- /Gallery -->
                                            <!-- contact us -->
                                            <li class="menu-item">
                                                <a href="contacts.html">Contact Us</a>
                                            </li>
                                            <!-- /contact us -->
                                           
                                            <!-- Donate -->
                                            <li class="donate-btn menu-item">
                                                <a href="contacts.html">Donate</a>
                                            </li>
                                            <!-- /Donate -->
                                           
                                        </ul>
                                    </nav>
                                </div>
                                <!-- /Main Menu -->
                            </div>
                        </div>
                        <!-- /Menu area -->
                    </div>
                </header>
                <!-- Header Mobile -->
                <div class="header_mobile">
                    <div class="content_wrap">
                        <div class="menu_button icon-menu"></div>
                        <div class="logo">
                            <a href="index.html">
                                <img src="/images/logo.png" class="logo_main" alt="">
                                
                            </a>
                        </div>
                    </div>
                    <div class="side_wrap">
                        <div class="close">Close</div>
                        <div class="panel_top">
                            <nav class="menu_main_nav_area">
                                <ul id="menu_main_mobile" class="menu_main_nav">
                                    <!-- Home -->
                                    <li class="menu-item">
                                        <a href="index.html">Home</a>
                                    </li>
                                    <!-- /Home -->
                                    <!-- Pages -->
                                    
                                    <!-- /Pages -->
                                    <!-- Events -->
                                    <li class="menu-item">
                                        <a href="events.html">Events</a>
                                    </li>
                                    <!-- /Events -->
                                    <!-- Sermons -->
                                    <li class="menu-item">
                                    <a href="about-us.html">Events</a>
                                </li>
                                    <!-- /Sermons -->
                                    <!-- Gallery -->
                                    <li class="menu-item">
                                        <a href="gallery-masonry.html">Gallery</a>
                                    </li>
                                    <!-- /Gallery -->
                                    <!-- Blog -->
                                    <li class="menu-item">
                                    <a href="contacts.html">Contact us</a>
                                </li>
                                    <!-- /Blog -->
                                    <!-- Donate -->
                                    <li class="donate-btn menu-item">
                                        <a href="contacts.html">Give</a>
                                    </li>
                                    <!-- /Donate -->
                                </ul>
                            </nav>
                            <!-- Search -->
                            
                            <!-- /Search -->
                            <!-- Login -->
                            
                            <!-- /Login -->
                        </div>
                        <!-- Socials panel -->
                       
                        <!-- /Socials panel -->
                    </div>
                    <div class="mask"></div>
                </div>
                <!-- /Header Mobile -->
        `;
    }
});