var app = angular.module('myApp', []);
//Angular controller creation
app.controller('vectorCtrl', function($scope) {
    //This method is called when submitting the vector generation button
    $scope.result = function() {
            //Validating textboxes
            if ($scope.min == undefined || $scope.spacing == undefined || $scope.elements === undefined) {
                alert("Please enter value in the empty text box");
                $scope.vgnrate = '';
            } else {
                window.vectorArray = [$scope.min];
                window.vectorResult = $scope.min;
                for (i = 0; i < $scope.elements - 1; i++) {
                    window.vectorResult = vectorResult + $scope.spacing;
                    vectorArray.push(vectorResult);
                }
                $scope.vgnrate = vectorArray;
            }
        }
        //It clears out vector generation text box field
    $scope.reset = function() {
        $scope.vectordisplay = '';
        $scope.outputData = '';
    }

    //It clears final output text box field
    $scope.resetvector = function() {
        $scope.min = '';
        $scope.spacing = '';
        $scope.elements = '';
        $scope.vgnrate = '';
    }

    //This method is called whensubmitting equation 
    $scope.addExp = function(exp) {
        window.inputEquation = exp;
        //Checking for expression empty case
        if (exp === undefined) {
            alert("Please enter an equation.")
        } else if (window.inputEquation.match("sqrt", exp)) {
            window.inputEquation = exp.replace("sqrt", "Math.sqrt");
        } else if (window.inputEquation.match("pow", exp)) {
            window.inputEquation = exp.replace("pow", "Math.pow");
        }

        var newTxt = window.inputEquation.split("");
        var y = window.vectorArray;
        var array1 = [];
        var array2 = [];
        for (var i = 0; i < newTxt.length; i++) {

            if (newTxt[i] == "(") {

                array1.push(i);

            } else if (newTxt[i] == ")") {
                array2.push(i);
            }

        }
        //Checking for mismatched braces
        if (array1.length != array2.length) {
            alert("Braces do not match. Please correct it and try again.");
        }
        //Reversing of array
        array2.reverse();
        var resultArray = [];
        var generatedOut = [];
        for (i = 0; i < array1.length; i++) {
            var s = window.inputEquation.substring(array1[i] + 1, array2[i]);
            resultArray.push(s);

        }
        for (j = 0; j < y.length; j++) {
            var x = y[j];
            window.re = eval(resultArray[0]);
            generatedOut.push(window.re);
        }
        $scope.outputData = generatedOut;
    }
})