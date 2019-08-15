var app = angular.module("myList", []);
app.controller('myCtrl', function ($scope) {
	$scope.items = ["Apple", "Banana", "Grapes", "Pineapple", "Mango", "Orange"];
	$scope.prices = [50, 30, 40, 20, 70, 60];
	$scope.listitem = [];
	$scope.addItem = function(x){
		console.log($scope.items[x]);
		$scope.listitem.push($scope.items[x]);
		console.log($scope.listitem);
	}
	$scope.removeItem = function (x) {
		$scope.listitem.splice(x, 1);
	}
});
