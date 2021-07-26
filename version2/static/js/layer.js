function dialog() {

    let dialogBox = $('.dialog'),
        dialogTrigger = $('.dialog__trigger'),
        dialogClose = $('.dialog__close'),
        dialogTitle = $('.dialog__title'),
        dialogContent = $('.dialog__content'),
        dialogAction = $('.dialog__action');

    // Open the dialog
    dialogTrigger.on('click', function (e) {
        dialogBox.toggleClass('dialog--active');
        e.stopPropagation()
    });

    // Close the dialog - click close button
    dialogClose.on('click', function () {
        dialogBox.removeClass('dialog--active');
    });

    // Close the dialog - press escape key // key#27
    $(document).keyup(function (e) {
        if (e.keyCode === 27) {
            dialogBox.removeClass('dialog--active');
        }
    });

    // Close dialog - click outside
    $(document).on("click", function (e) {
        if ($(e.target).is(dialogBox) === false &&
            $(e.target).is(dialogTitle) === false &&
            $(e.target).is(dialogContent) === false &&
            $(e.target).is(dialogAction) === false) {
            dialogBox.removeClass("dialog--active");
        }
    });

};

// Run function when the document has loaded
$(function () {
    dialog();
});
//
// function dim() {
//     let $data = $(this).attr('data-num');
//     layer_popup($data);
// }
//
// function layer_popup(el) {
//
//     let $el = $(el);    //레이어의 id를 $el 변수에 저장
//     let isDim = $el.prev().hasClass('dimBg'); //dimmed 레이어를 감지하기 위한 boolean 변수
//
//     isDim ? $('.dim-layer').fadeIn() : $el.fadeIn();
//
//     let $elWidth = ~~($el.outerWidth()),
//         $elHeight = ~~($el.outerHeight()),
//         docWidth = $(document).width(),
//         docHeight = $(document).height();
//
//     // 화면의 중앙에 레이어를 띄운다.
//     if ($elHeight < docHeight || $elWidth < docWidth) {
//         $el.css({
//             marginTop: -$elHeight / 2,
//             marginLeft: -$elWidth / 2
//         })
//     } else {
//         $el.css({top: 0, left: 0});
//     }
//
//     $el.find('a.btn-layerClose').click(function () {
//         isDim ? $('.dim-layer').fadeOut() : $el.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
//         return false;
//     });
//
//     $('.layer .dimBg').click(function () {
//         $('.dim-layer').fadeOut();
//         return false;
//     });
//
// }