$(document).ready(function () {
    $(".figura").click(function () {
        var id = $(this).attr("id");
        $(this).map(function (i, elem) {
            $(".figura").css("background-image", "url(./images/octo_blanco.png)");
        });
        $("#im_shape_1").css("background-image", "url(./images/Icon11.png)");
        $("#im_shape_2").css("background-image", "url(./images/Icon22.png)");
        $("#im_shape_3").css("background-image", "url(./images/Icon33.png)");
        $("#im_shape_4").css("background-image", "url(./images/Icon44.png)");
        $(".text_shape").css("color", "#284c5a");
        $("#" + id).css("background-image", "url(./images/octo_color.png)");
        $("#im_shape_" + id).css("background-image", "url(./images/Icon" + id + ".png)");
        $("#text_shape" + id).css("color", "#ffffff");
    });
});