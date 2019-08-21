<?php
require "libs/php/routing.php";

add_route("/", HttpMethods::GET, function() {
    $css_version = "1.0.2";
    $js_version = "1.0.2";
    include "webpages/home/home.php";
});

add_route("/projects/python", HttpMethods::GET, function() {
    $css_version = "1.0.2";
    $js_version = "1.0.2";
    $project_subject = "python";
    include "webpages/home/projects.php";
});

add_route("/projects/python/", HttpMethods::GET, function() {
    $css_version = "1.0.2";
    $js_version = "1.0.2";
    $project_subject = "python";
    include "webpages/home/projects.php";
});

add_route("/projects/javascript", HttpMethods::GET, function() {
    $css_version = "1.0.2";
    $js_version = "1.0.2";
    $project_subject = "javascript";
    include "webpages/home/projects.php";
});

add_route("/projects/javascript/", HttpMethods::GET, function() {
    $css_version = "1.0.2";
    $js_version = "1.0.2";
    $project_subject = "javascript";
    include "webpages/home/projects.php";
});

add_route("/projects/java", HttpMethods::GET, function() {
    $css_version = "1.0.2";
    $js_version = "1.0.2";
    $project_subject = "java";
    include "webpages/home/projects.php";
});

add_route("/projects/java/", HttpMethods::GET, function() {
    $css_version = "1.0.2";
    $js_version = "1.0.2";
    $project_subject = "java";
    include "webpages/home/projects.php";
});