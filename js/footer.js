document.addEventListener("DOMContentLoaded", function() {
    var navElement = document.getElementById("footer");
    if (navElement) {
        navElement.innerHTML = `
            <footer class="footer_wrap widget_area scheme_original">
                    <div class="footer_wrap_inner widget_area_inner">
                        <div class="content_wrap">
                            <div class="columns_wrap">
                                <!-- Widget: Text -->
                                <aside class="column-1_4 widget widget_text">
                                    <h5 class="widget_title">About Our Church</h5>
                                    <div class="textwidget">
                                        <p>We welcome visitors at NewLife Church and would love to have you join us in church this weekend.</p>
                                        <p class="textwidget_info">
                                            <strong>E: <a href="mailto:info@yoursite.com">info@yoursite.com</a></strong>
                                        </p>
                                        <p class="textwidget_info">
                                            <strong>L: <a href="#">Google Map</a></strong>
                                        </p>
                                    </div>
                                </aside><!-- /Widget: Text --><!-- Widget: Recent Posts --><aside class="column-1_4 widget widget_recent_posts">
                                <h5 class="widget_title">Latest Sermons</h5>
                                <article class="post_item with_thumb first">
                                    <div class="post_thumb">
                                        <img alt="" src="http://placehold.it/75x75">
                                    </div>
                                    <div class="post_content">
                                        <h6 class="post_title">
                                            <a href="post-single.html">5 Reasons to Love Churches in 2016</a>
                                        </h6>
                                        <div class="post_info">
                                                <span class="post_info_item">
                                                    <a href="#" class="post_info_date">Tuesday, April 26, 2016</a>
                                                </span>
                                        </div>
                                    </div>
                                </article>
                                <article class="post_item with_thumb">
                                    <div class="post_thumb">
                                        <img alt="" src="http://placehold.it/75x75">
                                    </div>
                                    <div class="post_content">
                                        <h6 class="post_title">
                                            <a href="post-single.html">5 Questions for Decision Makers</a>
                                        </h6>
                                        <div class="post_info">
                                                <span class="post_info_item">
                                                    <a href="#" class="post_info_date">Monday, April 25, 2016</a>
                                                </span>
                                        </div>
                                    </div>
                                </article>
                            </aside><!-- /Widget: Recent Posts --><!-- Widget: Instagram --><aside class="column-1_4 widget null-instagram-feed">
                                <h5 class="widget_title">Instagram</h5>
                                <ul class="instagram-pics instagram-size-large">
                                    <li>
                                        <a href="#" target="_blank">
                                            <img src="/images/grid/WhatsApp Image 2025-02-15 at 13.30.37(4).jpeg" alt="" title="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <img src="/images/blogs/WhatsApp Image 2025-02-15 at 14.26.58(1).jpeg" alt="" title="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <img src="/images/blogs/WhatsApp Image 2025-02-15 at 14.26.58(4).jpeg" alt="" title="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <img src="/images/blogs/WhatsApp Image 2025-02-15 at 14.26.58.jpeg" alt="" title="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <img src="/images/blogs/WhatsApp Image 2025-02-15 at 14.26.58(2).jpeg" alt="" title="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <img src="/images/grid/WhatsApp Image 2025-02-15 at 13.30.37.jpeg" alt="" title="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <img src="/images/grid/WhatsApp Image 2025-02-15 at 13.30.37(5).jpeg" alt="" title="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <img src="/images/grid/WhatsApp Image 2025-02-15 at 13.30.37(6).jpeg" alt="" title="" />
                                        </a>
                                    </li>
                                </ul>
                            </aside><!-- /Widget: Instagram --><!-- Widget: Recent Comments --><aside class="column-1_4 widget widget_recent_comments">
                                <h5 class="widget_title">Recent Comments</h5>
                                <ul id="recentcomments">
                                    <li class="recentcomments">
                                        <span class="comment-author-link">John Dilan</span> on
                                        <a href="post-single.html">Persevere: The Book of James</a>
                                    </li>
                                    <li class="recentcomments">
                                        <span class="comment-author-link">John Doe</span> on
                                        <a href="post-single.html">The Meanings of Love in the Bible</a>
                                    </li>
                                    <li class="recentcomments">
                                        <span class="comment-author-link">John Doe</span> on
                                        <a href="#">The Meanings of Love in the Bible</a>
                                    </li>
                                </ul>
                            </aside>
                            </div>
                        </div>
                    </div>
                </footer>
        `;
    }
});