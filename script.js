var app = angular.module("myList", []);
app.controller('myCtrl', function ($scope, $document) {
	$scope.items = ["Apple", "Banana", "Grapes", "Pineapple", "Mango", "Orange"];
	$scope.prices = [50, 30, 40, 20, 70, 60];
	$scope.listitem = [];
	$scope.classstore = [];
	$scope.priceitem = [];
	$scope.totallength = [];
	$scope.totalsum = [];
	$scope.addItem = function(x){
		var m = 0;
		if(jQuery.inArray($scope.items[x], $scope.listitem) == -1){
			$scope.listitem.push($scope.items[x]);
			$scope.classstore.push($scope.items[x]);
			$scope.priceitem.push($scope.prices[x]);
			if($scope.items[x] == $scope.classstore[$scope.classstore.length-1]){
				m = 1;
			}
		}
		$scope.totallength.push(x);
		if($scope.totallength.length > 1 && m==0){
				var y;
		   		var n = 0;
			    for(var i=0; i<$scope.totallength.length; i++){
			   		if(x == $scope.totallength[i]){
			   			n = n + 1;
			   		}
			    }
			    for(var t=0; t<$scope.priceitem.length; t++){
			    	if($scope.prices[x] == $scope.priceitem[t]){
			    		y = t;
			    		break;
			    	}
			    }
			var multiples = angular.element($document[0].querySelector('#product'+ y));
		    multiples.html(n + "x");
		}
		$scope.totalsum.push($scope.prices[x]);
		$scope.total = $scope.totalsum.reduce(mySum);
	}
	$scope.removeItem = function(j) {
		for(var r=0; r<$scope.prices.length; r++){
	    	if($scope.priceitem[j] == $scope.prices[r]){
				var index = $scope.prices.indexOf($scope.priceitem[j]);
	    		break;
	    	}
	    }
		$scope.n = 0;
	    for(var i=0; i<$scope.totallength.length; i++){
	   		if(index == $scope.totallength[i]){
	   			$scope.n = $scope.n + 1;
	   		}
	    }
	    var multiples = angular.element($document[0].querySelector('#product'+j));
		if($scope.n > 2){
			multiples.html($scope.n-1 + "x");
		    for(var k=0; k<$scope.totallength.length; k++){
		   		if(index == $scope.totallength[k]){
		   			$scope.totallength.splice($scope.totallength.indexOf(index), 1);
		   			break;
		   		}
		    }
		}else if($scope.n == 2){
			multiples.html(" ");
		    for(var u=0; u<$scope.totallength.length; u++){
		   		if(index == $scope.totallength[u]){
		   			$scope.totallength.splice($scope.totallength.indexOf(index), 1);
		   			break;
		   		}
		    }
		}else{
			for(var u=0; u<$scope.totallength.length; u++){
		   		if(index == $scope.totallength[u]){
		   			$scope.totallength.splice($scope.totallength.indexOf(index), 1);
		   			break;
		   		}
		    }
			$scope.listitem.splice(j, 1);
		    $scope.priceitem.splice(j, 1);
			$scope.classstore.splice(j, 1);		    			
		}
		if($scope.totalsum.length == 1){
			$scope.totalsum = [];
			$scope.total = 0;	
		}else{
			for(var y=0; y<$scope.totalsum.length; y++){
		 		if($scope.totalsum[y]==$scope.prices[index]){
		 			$scope.totalsum.splice(y,1);
		 			break;
		 		}
		 	}
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