/**
 * Created by Peter Mai on 2/2/2017.
 */
// var Aqua;
// (function ($) {
//     Aqua = {
//         init: function () {
//             Aqua.gallery();
//         },
//         logger: function (message) {
//             console.log(message);
//         },
//         // gallery: function (target) {//cach 1 truyen ten class
//         //     if (target) {
//         //         var $target = $(target);
//         //     } else {
//         //         var $target = $(".regular");
//         //     }
//         //     $target.each(function () {
//         //         var $this = $(this);
//         //         if (!$this.hasClass('slick-ready')) {
//         //             $this.slick({
//         //                 variableWidth: false,
//         //                 dots: false,
//         //                 infinite: true,
//         //                 slidesToShow: 7,
//         //                 slidesToScroll: 1,
//         //                 infinite: true,
//         //                 focusOnSelect: false,
//         //                 responsive: [
//         //                     {
//         //                         breakpoint: 1024,
//         //                         settings: {
//         //                             slidesToShow: 4,
//         //                             slidesToScroll: 1,
//         //                             infinite: true,
//         //                             dots: false,
//         //                             centerMode: true
//         //                         }
//         //                     },
//         //                     {
//         //                         breakpoint: 760,
//         //                         settings: {
//         //                             slidesToShow: 3,
//         //                             slidesToScroll: 1,
//         //                             infinite: true,
//         //                             dots: false,
//         //                             centerMode: false
//         //                         }
//         //                     },
//         //                     {
//         //                         breakpoint: 480,
//         //                         settings: {
//         //                             slidesToShow: 2,
//         //                             slidesToScroll: 1,
//         //                             infinite: true,
//         //                             dots: false,
//         //                             centerMode: false
//         //                         }
//         //                     }
//         //                 ]
//         //             });
//         //             $this.addClass('slick-ready');
//         //         }
//         //     });
//         // }
//
//         gallery: function () {//cach 2
//             $(".regular").each(function() {
//
//                var $this = $(this);
//
//                if(!$this.hasClass('slick-ready')) {
//                    $this.slick({
//                        variableWidth: false,
//                        dots: false,
//                        infinite: true,
//                        slidesToShow: 7,
//                        slidesToScroll: 1,
//                        infinite: true,
//                        focusOnSelect: false,
//                        responsive: [
//                            {
//                                breakpoint: 1024,
//                                settings: {
//                                    slidesToShow: 4,
//                                    slidesToScroll: 1,
//                                    infinite: true,
//                                    dots: false,
//                                    centerMode: true
//                                }
//                            },
//                            {
//                                breakpoint: 760,
//                                settings: {
//                                    slidesToShow: 3,
//                                    slidesToScroll: 1,
//                                    infinite: true,
//                                    dots: false,
//                                    centerMode: false
//                                }
//                            },
//                            {
//                                breakpoint: 480,
//                                settings: {
//                                    slidesToShow: 2,
//                                    slidesToScroll: 1,
//                                    infinite: true,
//                                    dots: false,
//                                    centerMode: false
//                                }
//                            }
//                        ]
//                    });
//                    $this.addClass('slick-ready');
//                }
//             });
//         }
//     }
//
//     $(document).ready(function() {
//         Aqua.init();
//     });
// })(jQuery)

var app=angular.module('angularAqua',[]);
 app=angular.module('angularAqua',['ngRoute','ngSanitize']);
app.config(function($routeProvider){
    $routeProvider.when('/about_us',{
        templateUrl:"templates/about_us.html"
    }).when('/basic',{
            templateUrl:"templates/basic.html"
        }).when('/onepage',{
        templateUrl:"templates/one_page.html"
    }).when('/shop_homepage',{
        templateUrl:"templates/shop_homepage.html"
    }).when('/full_height',{
        templateUrl:"templates/fullheight.html"
    }).when('/update-01',{
        templateUrl:"templates/update-01.html"
    }).when('/update_2',{
        templateUrl:"templates/update-2.html"
    }).when('/fullwidth',{
        templateUrl:"templates/fullwidth.html"
    }).when('/blog-homepage',{
        templateUrl:"templates/blog-homepage.html"
    }).when('/blog-article1',{
        templateUrl:"templates/blog-article1.html"
    }).when('/blog-article2',{
        templateUrl:"templates/blog-article2.html"
    }).when('/shop',{
        templateUrl:"templates/shop.html"
    }).when('/contact',{
        templateUrl:"templates/contact.html"
    }).when('/reservation',{
        templateUrl:"templates/reservation.html"
    }).when('/404',{
        templateUrl:"templates/404.html"
    }).when('/demo-select',{
        templateUrl:"templates/demo-select.html"
    }).when('/cart',{
        templateUrl:"templates/cart.html"
    }).when('/checkout-1',{
        templateUrl:"templates/checkout-1.html"
    }).when('/checkout-2',{
        templateUrl:"templates/checkout-2.html"
    }).when('/service',{
        templateUrl:"templates/service.html"
    }).when('/product',{
        templateUrl:"templates/product.html"
    }).when('/underconstruction',{
        templateUrl:"templates/underconstruction.html"
    }).when('/',{
        templateUrl:"templates/demo-select.html"
    }).otherwise({templateUrl:"templates/shop.html"});
});
app.controller('appController',function($scope)
{


});

app.controller('navbarController',function($scope)
{
    $scope.isShowMobileMenu = true;
    $scope.fade="fade-right";
    $scope.toogle="";
    $scope.tabclose="";
    $scope.toggleMobileMenu=function()
    {
        console.log('ookkmen');
      if($scope.isShowMobileMenu==true)
      {
          $scope.isShowMobileMenu=false;
          $scope.fade="fade-left ";
          $scope.toogle="tab-toggle";
          $scope.tabclose="tab-toggle1";
      }else
      {
          $scope.isShowMobileMenu=true;
          $scope.fade="fade-right";
          $scope.toogle="";
          $scope.tabclose="";
      }
    };

});

app.controller('templateController',function($scope,$http)
{
    var jsonUrl=$scope.json;
    $scope.hiddenclick=true;
    if($scope.callback)
    {
        eval($scope.callback);
    }
    if(jsonUrl){
        $http({
            method:"GET",
            url: "data/"+$scope.json+".json"
        }).then(function mySuccess(response){
            $scope.listData=response.data;
        },function myError(response){
            console.log("Load page wrog");
        });
    }
});
app.directive('aquaTemplate', function () {
    return {
        templateUrl: function(elem, attr) {
            return  "templates/components/" + attr.template + ".html";
        },
        restrict: 'EA',
        scope: {
            json: '@',
            callback : '@',
            template : '@',
        },
        controller: "templateController"
    }
});

app.directive('aquaHeading', function () {
    return {
        template: "<h3 class=\"{{class}}\">{{title}}</h3>",
        restrict: 'EA',
        scope: {
            title: '@',
            class: '@'
        },
        controller: "templateController",
        replace:true
    }
});
app.directive('aquaQuote', function () {
    return {
        template: "<p>hhhh<p/>",
        restrict: 'EA',
        scope: {
            title: '@',
            class: '@',
            author:'@',
            content:'@'
        },
        replace:true,
        controller: "templateController"
    }
});

//service----------------------------------
app.directive('aquaService',function(){

    return {
        templateUrl: function(elem,attr)
        {
            "templates/components/" + attr.template + ".html";
        },
        restrict:'EA',
        scope:
            {
                class:'@'
            },
        replace:true
    }
});

app.directive('aquaAccordion',function()
{
    return function(scope,ele)
    {
        console.log(ele);
        Aqua.acc(ele);
    }
});

app.directive("aquaTab",['$timeout',function($timeout) {
    return function (scope, element, attr) {
        $timeout(function()
        {
            Aqua.tabshop();
        },300);
    }
}]);
app.directive("aquaCountdown",['$timeout',function($timeout) {
    return function (scope, element, attr) {
        $timeout(function()
        {
            Aqua.countdown(element);
        },300);
    }
}]);

app.directive("aquaSlider",['$timeout',function($timeout) {
    return function (scope, element, attr) {
        // if (scope.$last) {
        //     Aqua.gallery();
        // }
        $timeout(function()
        {
            if (scope.$last) {
                Aqua.slider(element, attr.aquaSlider);
            }
        },300);
    }
}]);

app.directive("aquaGallery",['$timeout',function($timeout) {
    return function (scope, element, attr) {
        $timeout(function()
        {
            if (scope.$last) {
                Aqua.gallery();
            }
        },300);
    }
}]);

app.directive('aquaScroll',function()
{
   return function(scope,element,attr)
   {
       Aqua.aquaScroll(element,attr.href);
   }
});
//--------------------------
app.directive("aquaPretty",function () {
   return function(scope,element)
   {
       Aqua.prettyAqua(element);
   }
});



//-------------------------
    app.directive('aquaFix',function () {
       return function (scope ,ele) {
           Aqua.aquaFixTop(ele);
       }
    });




///----------------
$(document).ready(function(){
    var $_top=$(".row-top");
    if($_top.length>0){
        $(window).scroll(function(){
            var e =$(window).scrollTop();
            if(e>300){
                $_top.show();
            }else{
                $_top.hide();
            }
        });
    }
    $_top.on('click',function()
    {
        $('body,html').animate(
            {
                scrollTop:0
            }
        );
    });
});

//hide--show-blog-----
