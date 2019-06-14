<template>
    <div>
        <div class="wrapper">
            <div class="header">
                <div class="logo">
                    <img src="https://stoutstreetcapital.com/wp-content/uploads/2017/06/Stoutstreet-horizontal-1-e1498766762991.jpg" alt="logo">
                </div>
                <div class="nav">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Methodology</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Resources</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>

            <div class="content">
                <MultiPage />
            </div>

            <div class="footer">
                <div class="section1">
                    <span class="footer-title">STOUT STREET CAPITAL</span>
                    <p>288 Clayton Street, Suite 206</p>
                    <p>Denver, CO, 80206</p>
                    <div class="map">
                        <iframe src="https://www.google.com/maps?q=288%20Clayton%20Street%2C%20Suite%20206%0D%0ADenver%2C%20CO%2C%2080206&output=embed&hl=en&z=14" frameborder="0"></iframe>
                    </div>
                </div>
                <div class="section2">
                    <p>© Copyright 2019   |   Stout Street Capital   |   All Rights Reserved | Site Optimized by Singletrack SEO</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MultiPage from './demo/multipage/MultiPage';

export default {
    name: 'Stout',
    components: {
        MultiPage
    }
}
</script>

<style scoped>
body {
    height: auto;
    background-color: #f5f5f5;
    font-family: open sans,Arial,Helvetica,sans-serif;
    font-weight: 400;
    letter-spacing: 0;
    font-style: normal;
}
.wrapper {
    height: auto;
    margin: 0 auto;
    max-width: 1300px;
    top: 1px;
    background-color: #fff;
    margin-top: 1px;
}
.header {
    height: 85px;
    overflow: visible;
    max-width: 1300px;
    z-index: 5;
    padding: 0 30px;
    background-color: #fff;
}
.logo {
    max-width: 100%;
    float: left;
}
.nav {
    float: right;
}
.nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
}
.nav ul li {
    float: left;
    margin-right: 45px;
    border-top: 2px solid #fff;
}
.nav ul li:last-child {
    margin-right: 0;
}
.nav ul li a {
    text-decoration: none;
    color: #848b8e;
    line-height: 82px;
    font-family: open sans,Arial,Helvetica,sans-serif;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0;
    font-style: normal;
}
.nav ul li:hover {
    border-top: 2px solid #55a098;
}
.nav ul li a:hover {
    color: #55a098;
}
.content {
    background-color: #f5f5f5;
    padding: 120px 30px 50px;
    height: auto;
}
.footer {
    height: auto;
    font-family: open sans,Arial,Helvetica,sans-serif;
    border-top: 12px solid #fff;padding: 0 30px;
}
.section1 {
    text-align: center;
    padding: 35px;
}
.section1 p {
    color: #999;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
}
.footer-title {
    font-size: 18px;
    color: #666;
}
.section2 {
    padding: 18px 30px 25px;
    text-align: left;
    color: #999;
    font-size: 12px;
    font-weight: 400;
}
</style>
