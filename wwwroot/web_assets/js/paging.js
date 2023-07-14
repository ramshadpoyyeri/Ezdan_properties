//JQuery Paging Plugin v1.4
//Written By Adnan ŞAHİN

(function ($) {
    "use strict";

    $.fn.JPaging = function (param) {


        var params = $.extend({ pageSize: 10, visiblePageSize: 5 }, param);

        var $pageSize = params.pageSize;

        var $visiblePageSize = params.visiblePageSize;

        var $thisId = $(this).attr("id");
        var $thiscount = parseInt($(this).attr("data-count")) + 1;
        var $thiscounts = parseInt($(this).attr("data-count")) ;
        var $thispmcount = $(this).attr("data-pmcount");

        $("<div id='paging'></div>").insertAfter(this);


        var $countLi = parseInt($(this).attr("data-pmcount"));


        var $currentIndex = parseInt($(this).attr("data-count"));
        var $pageCount = Math.round($countLi / $pageSize);
        if ($countLi > 0) {
            if ($pageSize * $pageCount < $countLi) {
                $pageCount++;
            }
        }
        if ($visiblePageSize == 0) {
            $visiblePageSize = 1;
        }


        //sayfa linkleri
        if ($pageCount >= 1 && $visiblePageSize >= 1) {
            $("#paging").append(
                "<a href='javascript:void(0)' style='font-weight:700;'>" + "<"
            );
            if ($pageCount > $visiblePageSize) {
                $("#paging").append(
                    "<a href='javascript:void(0)' id='pre_point' class=''>" /*+ "..."*/
                );
            }
            debugger
   
            var $curindex = 1;
            var $pagelength = 0;

            if ($pageCount > 9) {
                $pagelength = 10;
            }
            else {
                $pagelength = $pageCount;
            }
          

            if ($currentIndex > 10) {                   
                var $curind = $currentIndex - 9;
                var $curlen = $curind + 9;     
                var $curindex = $curind;
                var $pagelength = $curlen;  
                var $countclass = 11;
            }
            

            for (var i = $curindex; i <= $pagelength; i++) {
                if (i <= $visiblePageSize) {

                    $("#paging").append("<a href='javascript:void(0)' class=' btnclick' id=" + i + ">" + i + "</a>");
                } else if (i > $visiblePageSize) {
                    $("#paging").append(
                        "<a href='javascript:void(0)' class=' btnclick' id=" + i + ">" + i + "</a>"
                    );
                }
            }
            debugger
            //$("ul#" + $thisId + " li:gt(" + ($pageSize - 1) + ")").hide();
          
            //if ($currentIndex > 10) {
            //    $("#paging a:eq(" + $countclass + ")").addClass("aktif");
            //}
            //if ($pagelength < 9) {
            //    $("#paging a:eq(" + $thiscounts + ")").addClass("aktif");
            //}
            //else {
            //    $("#paging a:eq(" + $thiscount + ")").addClass("aktif");
            //}
           
            $('.btnclick').on("click", function () {
                var nextrow = $(this).attr("id");
                getpropertydetailsnextrow(nextrow);
            })


            if ($pageCount > $visiblePageSize) {
                $("#paging").append(
                    "<a href='javascript:void(0)' id='next_point'>" /*+ "..."*/
                );
            }
            $("#paging").append(
                "<a href='javascript:void(0)' style='font-weight:700;'>" + ">"
            );

            //$("ul#" + $thisId + " li:gt(" + ($pageSize - 1) + ")").hide();
            //$("#paging a:eq(" + $thiscount + ")").addClass("aktif");
            $("ul#" + $thisId + " li:gt(" + ($pageSize - 1) + ")").hide();

            if ($currentIndex > 10) {
                $("#paging a:eq(" + $countclass + ")").addClass("aktif");
            }
            if ($pagelength < 9) {
                $("#paging a:eq(" + $thiscounts + ")").addClass("aktif");
            }
            else {
                $("#paging a:eq(" + $thiscount + ")").addClass("aktif");
            }
        }
        $("#pre_point").on("click", function (event) {
            event.preventDefault();
            var prevIndex = $(this)
                .nextAll("a:not('.hidden,#next_point')")
                .first()
                .index();
            var hideIndex = prevIndex + $visiblePageSize - 1;
            $("#paging a:eq(" + hideIndex + ")").addClass("hidden");
            $("#paging a").removeClass("aktif");
            $("#paging a:eq(" + (prevIndex - 1) + ")")
                .removeClass("hidden")
                .addClass("aktif");
            $currentIndex = prevIndex - 1;
            var gt = $pageSize * ($currentIndex - 1);
            $("ul#" + $thisId + " li").hide();
            for (var i = gt - $pageSize; i < gt; i++) {
                $("ul#" + $thisId + " li:eq(" + i + ")").show();
            }
            if ($currentIndex - 1 == $pageCount && $visiblePageSize < $pageCount) {
                $("#next_point").addClass("hidden");
            } else if (
                $currentIndex < $pageCount + $visiblePageSize &&
                $visiblePageSize < $pageCount
            ) {
                $("#next_point").removeClass("hidden");
            }
            if ($currentIndex > 2 && $visiblePageSize < $pageCount) {
                $("#pre_point").removeClass("hidden");
            } else if ($currentIndex <= 2 && $visiblePageSize < $pageCount) {
                $("#pre_point").addClass("hidden");
            }
        });
        $("#next_point").on("click", function (event) {
            event.preventDefault();
            var prevIndex = $(this)
                .prevAll("a:not('.hidden')")
                .first()
                .index();
            console.log("prevIndex:" + prevIndex);
            var $thisIdpre = parseInt($thisId) + 1;
            var hideIndex = prevIndex - $visiblePageSize + 1;
            $("#paging a:eq(" + hideIndex + ")").addClass("hidden");
            $("#paging a").removeClass("aktif");
            $("#paging a:eq(" + (prevIndex + 1) + ")")
                .removeClass("hidden")
                .addClass("aktif");
            $currentIndex = prevIndex;
            var gt = $pageSize * $currentIndex;
            $("ul#" + $thisId + " li").hide();
            for (var i = gt - $pageSize; i < gt; i++) {
                $("ul#" + $thisId + " li:eq(" + i + ")").show();
            }
            if ($currentIndex == $pageCount && $visiblePageSize < $pageCount) {
                $("#next_point").addClass("hidden");
            } else if ($currentIndex < $pageCount && $visiblePageSize < $pageCount) {
                $("#next_point").removeClass("hidden");
            }
            if ($currentIndex > $visiblePageSize && $visiblePageSize < $pageCount) {
                $("#pre_point").removeClass("hidden");
            } else if (
                $currentIndex < $visiblePageSize &&
                $visiblePageSize < $pageCount
            ) {
                $("#pre_point").addClass("hidden");
            }
        });
        $("#paging").on("click", "a:not('#pre_point,#next_point')", function () {
            debugger
            var $index = $(this).index();
            console.log(
                "curindex:" +
                $currentIndex +
                " visible_page_count:" +
                $visiblePageSize +
                " pageCount:" +
                $pageCount
            );

            if ($(this).is("#paging a:first") === true) {
                if ($currentIndex === 1) {
                    return false;
                }
                if ($currentIndex - 2 == $pageCount && $visiblePageSize < $pageCount) {
                    $("#next_point").addClass("hidden");
                } else if (
                    $currentIndex - 2 <= $pageCount - $visiblePageSize &&
                    $visiblePageSize < $pageCount
                ) {
                    $("#next_point").removeClass("hidden");
                }
                if ($currentIndex - 1 > 2 && $visiblePageSize < $pageCount) {
                    $("#pre_point").removeClass("hidden");
                } else if ($currentIndex - 1 <= 2 && $visiblePageSize < $pageCount) {
                    $("#pre_point").addClass("hidden");
                }
                $currentIndex = $currentIndex - 1;
                var gtFirst = $pageSize * ($currentIndex - 1);
                $("#paging a").removeClass("aktif");
                $("#paging a:not('#next_point'):eq(" + $currentIndex + ")").addClass(
                    "aktif"
                );
                $("#paging a:not('#next_point'):eq(" + $currentIndex + ")").removeClass(
                    "hidden"
                );
                if ($("#paging a.hidden").length >= 1) {
                    $(
                        "#paging a:not('#next_point,#paging a:last'):eq(" +
                        ($currentIndex + $visiblePageSize) +
                        ")"
                    ).addClass("hidden");
                }
                $("ul#" + $thisId + " li").hide();
                for (var f = gtFirst - $pageSize; f < gtFirst; f++) {
                    $("ul#" + $thisId + " li:eq(" + f + ")").show();
                }
                console.log(
                    "end curindex:" +
                    $currentIndex +
                    " visible_page_count:" +
                    $visiblePageSize +
                    " pageCount:" +
                    $pageCount
                );
                getpropertydetailsnextrow($currentIndex);
                return false;
            }
            if ($(this).is("#paging a:last") === true) {
                debugger
                //if ($currentIndex - 1 === $pageCount) {
                //    return false;
                //}
                if ($currentIndex === $pageCount) {
                    return false;
                }
                if ($currentIndex == $pageCount && $visiblePageSize < $pageCount) {
                    $("#next_point").addClass("hidden");
                } else if (
                    $currentIndex < $pageCount &&
                    $visiblePageSize < $pageCount
                ) {
                    $("#next_point").removeClass("hidden");
                }
                if ($currentIndex > $visiblePageSize && $visiblePageSize < $pageCount) {
                    $("#pre_point").removeClass("hidden");
                } else if (
                    $currentIndex < $visiblePageSize &&
                    $visiblePageSize < $pageCount
                ) {
                    $("#pre_point").addClass("hidden");
                }
                $currentIndex = $currentIndex + 1;
                var gtLast = $pageSize * ($currentIndex - 1);
                $("#paging a").removeClass("aktif");
                $("#paging a:eq(" + $currentIndex + ")").addClass("aktif");
                $("#paging a:eq(" + $currentIndex + ")").removeClass("hidden");
                if (
                    $currentIndex - 1 > $visiblePageSize &&
                    $("#paging a.hidden").length >= 1
                ) {
                    console.log("cc" + ($currentIndex - $visiblePageSize));
                    $(
                        "#paging a:not('#next_point,#paging a:last'):eq(" +
                        ($currentIndex - $visiblePageSize) +
                        ")"
                    ).addClass("hidden");
                }
                $("ul#" + $thisId + " li").hide();
                for (var k = gtLast - $pageSize; k < gtLast; k++) {
                    $("ul#" + $thisId + " li:eq(" + k + ")").show();
                }
                getpropertydetailsnextrow($currentIndex);
                return false;
                
            }
            $currentIndex = $index - 1;
            var gt = $pageSize * $currentIndex;
            $("#paging a").removeClass("aktif");
            $(this).addClass("aktif");
            $("ul#" + $thisId + " li").hide();
            for (var i = gt - $pageSize; i < gt; i++) {
                $("ul#" + $thisId + " li:eq(" + i + ")").show();
            }
            
        });

        
    };
})(jQuery);
$(function () {
    $(".pr_list").JPaging({ pageSize: 12, pageNumberSize: 10 });
    $(".map-sc .right-sec .pr_list").JPaging({ pageSize: 6, pageNumberSize: 5 });
});