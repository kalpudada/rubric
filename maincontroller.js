var myapp = angular.module('mainApp', []);
myapp.controller('mainController',function($scope,$http){

    $scope.contents = null;
    $scope.twubricData=[];
    $http.get('rubric.json')
        .success(function(data) {
            debugger
            $scope.contents=data;
            // $scope.twubricData=[];
            angular.forEach($scope.contents, function(item){
                // $scope.twubricData = item.twubric;
                $scope.twubricData.push(item.twubric);
                // var uniqueTech = [];
                // for (var i = 0; i < $scope.techStack.length; i++)
                // {
                //     if (uniqueTech.indexOf($scope.techStack[i]) == -1)
                //         uniqueTech.push($scope.techStack[i]);
                // }   
                // console.log("Unique Technologies : " + uniqueTech);
            })
            // $scope.twubric=Object.keys($scope.contents[0]["twubric"]);
            // var newTwubric = [];
            // data.forEach
            $scope.orderByMe = function(x) {
                $scope.myOrderBy = x;
            }
            // console.log("Data" + $scope.twubricData);
        })
        .error(function(data,status,error,config){
            $scope.contents = [{uid:"Error",username:"Could not load json   data"}];
        });

    //$scope.contents = [{heading:"Content heading", description:"The actual content"}];
    //Just a placeholder. All web content will be in this format
});