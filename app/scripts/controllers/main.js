'use strict';

/**
 * @ngdoc function
 * @name hoqiiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hoqiiApp
 */
angular.module('hoqiiApp')
  .controller('MainCtrl', function ($scope, $animate, $window) {
    $animate.enabled(false);
    $scope.slide = {
    	'interval': 5000,
    	'slides': [
    		{
    			'image': 'images/bg1.jpg',
    			'text': 'title',
    			'title': 'JENI (Java Education Network Indonesia)',
    			'description': 'Layanan integratif bagi mahasiswa di Indonesia, untuk mempelajari, berbagi dan mengembangkan solusi berbasis Java.',
    			'faClass': 'icon-blog',
                'link': '#historyjeni'
    		},
    		{
    			'image': 'images/bg2.jpg',
    			'text': 'title',
    			'title': 'Kurikulum JENI',
    			'description': 'Merupakan kumpulan pembelajaran Java secara terpadu dan terintegrasi.',
    			'faClass': 'icon-cogs',
                'link': '#curriculum'
    		},
    		{
    			'image': 'images/bg3.jpg',
    			'text': 'title',
    			'title': 'Komunitas JENI',
    			'description': 'Silahkan bergabung dengan kami untuk berdiskusi mengenai teknologi Java terbaru dan permasalah anda mengenai Java.',
    			'faClass': 'icon-users2',
                'link': '#communityjeni'
    		},
            {
                'image': 'images/bg4.jpg',
                'text': 'title',
                'title': 'Sertifikasi',
                'description': 'Layanan yang kami berikan untuk membantu mengembangkan kualitas para developer Java.',
                'faClass': 'icon-copy2',
                'link': '#certifications'
            }
    	]
    };

    $scope.slides = $scope.slide.slides;

    $scope.slide.labelStyle = {
    	'padding-top': $window.innerHeight/3
    };

    $scope.slide.getStyle = function(index) {
    	return {
    		'height': $window.innerHeight,
    		'background-image': 'url(' + $scope.slide.slides[index].image + ')',
    		'background-position': '50%',
            'background-size': 'cover'
    	};
    };
  });
