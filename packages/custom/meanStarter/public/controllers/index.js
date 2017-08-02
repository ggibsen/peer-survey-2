'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global',
  function ($scope, Global) {
    $scope.global = Global;
    $scope.sites = [{
    }];
    $scope.packages = {
    };

    $scope.docs = [{
    }];

    $scope.communities = [{
    }];

    var psController = this;

    psController.evalList = ['test1', 'test2'];

    // psController.evaluation = '';

    psController.addEval = function () {
      psController.evalList.push(psController.evaluation);
      psController.evaluation = '';
    };

    $scope.$watch(function () {
      for (var i = 0; i < $scope.sites.length; i += 1) {
        if ($scope.sites[i].active) {
          return $scope.sites[i];
        }
      }
    }, function (currentSlide, previousSlide) {
      if (currentSlide !== previousSlide) {
        console.log('currentSlide:', currentSlide);
      }
    });
  }
]);
