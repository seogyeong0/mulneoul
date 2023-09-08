/* 메뉴버튼 클릭 */
$(document).ready(function () {
    $('.hd_btn').click(function () {
        $('.hd_btn').toggleClass('active')
        $('.menu_wrap').toggleClass('active')
    })
})

/* 메뉴 이미지 사진 호버 */
$(function () {
    $(".menu_btn1").mouseenter(function () {
        $(".menu_img_list li:first-child").addClass("on").siblings().removeClass("on");
    }
    );
    $(".menu_btn2").mouseenter(function () {
        $(".menu_img_list li:nth-child(2)").addClass("on").siblings().removeClass("on");
    }
    );
    $(".menu_btn3").mouseenter(function () {
        $(".menu_img_list li:nth-child(3)").addClass("on").siblings().removeClass("on");
    }
    );
    $(".menu_btn4").mouseenter(function () {
        $(".menu_img_list li:last-child").addClass("on").siblings().removeClass("on");
    }
    );
});

/* room page - notice 부분 */
$(function () {
    $("#room_notice> ul> li").click(function () {
        $(this).children(".text_info").slideToggle();
    });
    $("#room_notice> ul> li").click(function () {
        $(this).toggleClass("turn");

        if ($(this).hasClass("turn") === true) {
            $(this).siblings().removeClass("turn");
        }
    });
});

// 팝업창 닫기
var toggleMainPopup = function () {

    /* 스토리지 제어 함수 정의 */
    var handleStorage = {
        // 스토리지에 데이터 쓰기(이름, 만료일)
        setStorage: function (name, exp) {
            // 만료 시간 구하기(exp를 ms단위로 변경)
            var date = new Date();
            date = date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);

            // 로컬 스토리지에 저장하기
            // (값을 따로 저장하지 않고 만료 시간을 저장)
            localStorage.setItem(name, date)
        },
        // 스토리지 읽어오기
        getStorage: function (name) {
            var now = new Date();
            now = now.setTime(now.getTime());
            // 현재 시각과 스토리지에 저장된 시각을 각각 비교하여
            // 시간이 남아 있으면 true, 아니면 false 리턴
            return parseInt(localStorage.getItem(name)) > now
        }
    };


    // 쿠키 읽고 화면 보이게
    if (handleStorage.getStorage("today")) {
        $(".main_popup").removeClass("on");
    } else {
        $(".main_popup").addClass("on");
    }

    // 오늘하루 보지 않기 버튼
    $(".main_popup.pop_left").on("click", ".btn_today_close", function () {
        // 로컬 스토리지에 today라는 이름으로 1일(24시간 뒤) 동안 보이지 않게
        handleStorage.setStorage("today", 1);
        $(this).parents(".main_popup.on").removeClass("on");
    });
    $(".main_popup.pop_right").on("click", ".btn_today_close", function () {
        // 로컬 스토리지에 today라는 이름으로 1일(24시간 뒤) 동안 보이지 않게
        handleStorage.setStorage("today", 1);
        $(this).parents(".main_popup.on").removeClass("on");
    });

    // 일반 닫기 버튼
    $(".main_popup").on("click", ".btn_close", function () {
        $(this).parents(".main_popup.on").removeClass("on");
    });
}

$(function () {
    toggleMainPopup();
});

$(function () {
    var t_now = new Date();
    var t_tomorrow = new Date();
    t_tomorrow.setDate(t_tomorrow.getDate() + 1);
    var n_date = t_now.toLocaleDateString();
    var t_date = t_tomorrow.toLocaleDateString();
    $("#datepicker1").attr("value", n_date);
    $("#datepicker2").attr("value", t_date);
});

$(function () {
    $(".resv_btn1").click(function () {
        $(this).addClass("change");
        $(".resv_btn2").removeClass("change");
        $("#total_cash").attr("value", "599,000");
    });
    $(".resv_btn2").click(function () {
        $(this).addClass("change");
        $(".resv_btn1").removeClass("change");
        $("#total_cash").attr("value", "499,000");
    });
});