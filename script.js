//defining module
var myapp = angular.module('myapp', []);
 


//creating custom directive
myapp.directive('ngCompare', function () {
	 return {
		 require: 'ngModel',
		 link: function (scope, currentEl, attrs, ctrl) {
			 var comparefield = document.getElementsByName(attrs.ngCompare)[0]; //getting first element
			 compareEl = angular.element(comparefield);
			 
			 //current field key up
			 currentEl.on('keyup', function () {
				 if (compareEl.val() != "") {
					 var isMatch = currentEl.val() === compareEl.val();
					 ctrl.$setValidity('compare', isMatch);
					 scope.$digest();
				 }
			 });
			 
			 //Element to compare field key up
			 compareEl.on('keyup', function () {
				 if (currentEl.val() != "") {
					 var isMatch = currentEl.val() === compareEl.val();
					 ctrl.$setValidity('compare', isMatch);
					 scope.$digest();
					 }
			 });
		 }
	 }
});
 
// create angular controller
myapp.controller('mainController', function ($scope, $window, $element, $compile) {
	 $scope.myboxelements=[];
	 // function to submit the form after all validation has occurred 
	 $scope.editbutton = function(id, myboxelements){
		 	console.log(id);
	}

	$scope.deleteobj = function(id, myboxelements){
		//console.log(id);
		 myboxelements.splice(id, 1);
	}
		 	

	 $scope.datasubmitted = function (details,id, myboxelements) {
	 	
	 
	 	// Set the 'submitted' flag to true
	 	$scope.submitted = true;
	 
		 if ($scope.userForm.$valid) {
		 	/*angular.element(document.getElementById('mybox')).append(
		 		$compile("<div><button class='btn btn-default' data-alert="+$scope.generateid+">Show alert #"+$scope.generateid+"</button>
		 			</div>")($scope));*/

		 	/*var divElement = angular.element(document.getElementById('mybox'));
			var htmlElement = angular.element('<div style="background-color: red; border:1px solid blue; margin-top: 10px" id="'+id+'">Hello: '+details.name+' <button ng-click="editbutton('+id+')"> Edit</button> <br/> Email: '+details.email+' <br/> address : '+details.address1+' '+details.address2+' '+details.city+' '+details.state+' '+details.country+' '+details.zipcode+' </div>');
			divElement.append(htmlElement);
			$compile(divElement)($scope);*/

		

			var obj = {name: details.name, email: details.email, address1: details.address1, address2: details.address2, city: details.city, state: details.state, country: details.country, zip: details.zipcode };
			myboxelements.push(obj);

	        // var div = document.createElement("div");
	        // div.className = "jumbotron jumbotron-fluid";
	        // div.id = $scope.generateid;
	        // $scope.generateid = $scope.generateid +1;
	        // div.style.width = "100%";
	        // div.style.height = "100%";
	        // div.style.background =  "red";
	        // div.style.color = "white";
	        // div.style.border = "1px solid blue";
	        // $scope.mynewangulabox = {
	        //     "name": details.name,
	        //     "email": details.email
	        // };
	        // $window.myboxelements.push($scope.mynewangulabox);
	        // //console.log($scope.mynewangulabox);
	        // //console.log($window.myboxelements);
	        // div.innerHTML = "Hello:  "+details.name+" "+
	        // "<button id="+$scope.generateid+" "+"class='editdetails' ng-click='editbutton(this.id)'>Edit</button>" +
	        // "<button id="+$scope.generateid+" "+"class='editdetails' ng-click='deletebutton(this.id)'>Delete</button>"+"<br>"+"Your email: "+details.email
	        // +"<br/>"+"address:"+details.address1+" "+details.address2+" "+details.zipcode+" "+details.city+" "+details.state+" "+details.country;
	        // document.getElementById("mybox").appendChild(div);
		 }else {
		 
		 }

		 
	 };
});