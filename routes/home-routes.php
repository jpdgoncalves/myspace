<?php
require "libs/php/routing.php";

add_route("/", HttpMethods::GET, function() {
    $css_version = "1.0.7";
    $js_version = "1.0.3";
    include "webpages/home/home.php";
});

add_route("/projects/python", HttpMethods::GET, function() {
    $css_version = "1.0.7";
    $js_version = "1.0.3";
    $project_subject = "python";
    include "webpages/home/projects.php";
});

add_route("/projects/python/", HttpMethods::GET, function() {
    $css_version = "1.0.7";
    $js_version = "1.0.3";
    $project_subject = "python";
    include "webpages/home/projects.php";
});

add_route("/projects/javascript", HttpMethods::GET, function() {
    $css_version = "1.0.7";
    $js_version = "1.0.3";
    $project_subject = "javascript";
    include "webpages/home/projects.php";
});

add_route("/projects/javascript/", HttpMethods::GET, function() {
    $css_version = "1.0.7";
    $js_version = "1.0.3";
    $project_subject = "javascript";
    include "webpages/home/projects.php";
});

add_route("/projects/java", HttpMethods::GET, function() {
    $css_version = "1.0.7";
    $js_version = "1.0.3";
    $project_subject = "java";
    include "webpages/home/projects.php";
});

add_route("/projects/java/", HttpMethods::GET, function() {
    $css_version = "1.0.7";
    $js_version = "1.0.3";
    $project_subject = "java";
    include "webpages/home/projects.php";
});