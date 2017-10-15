/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
    $(".bienv").click(function () {
        $("#content").hide("fast");
        $("#information").hide("fast");
        $("#welcome").show("fast");
    });

    $(".cont").click(function () {
        $("#welcome").hide("fast");
        $("#information").hide("fast");
        $("#content").show("fast");
    });

    $(".info").click(function () {
        $("#welcome").hide("fast");
        $("#content").hide("fast");
        $("#information").show("fast");
    });

    $(".figura").click(function () {
        var id = $(this).attr("id");
        $(this).map(function (i, elem) {
            $(".figura").css("background-image", "url(./imagenes/octo_blanco.png)");
        });
        $("#im_shape_1").css("background-image", "url(./imagenes/Icon11.png)");
        $("#im_shape_2").css("background-image", "url(./imagenes/Icon22.png)");
        $("#im_shape_3").css("background-image", "url(./imagenes/Icon33.png)");
        $("#im_shape_4").css("background-image", "url(./imagenes/Icon44.png)");
        $(".text_shape").css("color", "#284c5a");
        $("#" + id).css("background-image", "url(./imagenes/octo_color.png)");
        $("#im_shape_" + id).css("background-image", "url(./imagenes/Icon" + id + ".png)");
        $("#text_shape" + id).css("color", "#ffffff");
    });
});

