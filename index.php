<?php
require "libs/php/routing.php";

add_route("/pages/home", HttpMethods::GET, function () {
    include "sites/home/home.php";
});

process_request();