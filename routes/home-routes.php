<?php
require "libs/php/routing.php";

add_route("/", HttpMethods::GET, function() {
    $css_version = "1.0.2";
    $js_version = "1.0.2";
    include "webpages/home/home.php";
});