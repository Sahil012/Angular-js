var app = angular.module("myList", []);
app.controller('myCtrl', function ($scope,$document) {
	$scope.items = ["Apple", "Banana", "Grapes", "Pineapple", "Mango", "Orange"];
	$scope.prices = [50, 30, 40, 20, 70, 60];
	$scope.listitem = [];
	$scope.totallength = [];
	$scope.totalsum = [];
	$scope.addItem = function(x){
		if(jQuery.inArray($scope.items[x], $scope.listitem) == -1){
			$scope.listitem.push($scope.items[x]);
			$scope.totallength = [];
		    var text_element = angular.element($document[0].querySelector('#product'+x));
		    text_element.html(" ");
		}
		$scope.totallength.push(x);
		console.log($scope.totallength);
		if($scope.totallength.length > 1){
			var text_element = angular.element($document[0].querySelector('#product'+x));
		    text_element.html($scope.totallength.length + "x");
		}
		$scope.totalsum.push($scope.prices[x]);
		$scope.total = $scope.totalsum.reduce(mySum);
	}
	$scope.removeItem = function(x) {
		if($scope.totallength.length > 2){
			var text_element = angular.element($document[0].querySelector('#product'+x));
			text_element.html($scope.totallength.length-1 + "x");
			$scope.totallength.length = $scope.totallength.length - 1;
		}else if($scope.totallength.length == 2){
			var text_element = angular.element($document[0].querySelector('#product'+x));
			text_element.html(" ");
			$scope.totallength.length = $scope.totallength.length - 1;
		}else{
			$scope.listitem.splice(x, 1);
		}
		if($scope.totalsum.length == 1){
			$scope.totalsum = [];
			$scope.total = 0;	
		}else{
			$scope.totalsum.splice(x, 1);
			$scope.total = $scope.totalsum.reduce(mySum);
		}	
	}
	if($scope.listitem.length == 0){
		$scope.total = 0;
	}

	function mySum(total, num) {
		return total + num;
	}
});
