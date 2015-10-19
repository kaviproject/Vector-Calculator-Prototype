var app = angular.module('myApp', []);
    app.controller('vectorCtrl', function($scope) {
        $scope.result = function() {
            if($scope.min==undefined || $scope.spacing==undefined || $scope.elements===undefined)
            {
                alert("Please enter value in the empty text box");
                $scope.vgnrate='';
            }
            else 
            {
            window.vectorArray = [$scope.min];
            window.vectorResult = $scope.min;
            for (i = 0; i < $scope.elements - 1; i++) {
                window.vectorResult = vectorResult + $scope.spacing;
                vectorArray.push(vectorResult);
            }
            $scope.vgnrate=vectorArray;
            console.log("vector"+$scope.vgnrate);
        }
        }
        $scope.reset = function() {
            $scope.vectordisplay = '';
            $scope.outputData='';
        }
        $scope.resetvector=function()
        {
            $scope.min='';
            $scope.spacing='';
            $scope.elements='';
            $scope.vgnrate='';
        }

        var exprs = $scope.exprs = [];
        $scope.addExp = function(exp) {
         window.inputEquation=exp;
         if(exp===undefined)
         {
            alert("Please enter an equation.")
         }
         else if(window.inputEquation.match("sqrt",exp))
         {
            window.inputEquation = exp.replace("sqrt", "Math.sqrt");
            console.log("Sqrt function"+window.inputEquation)
        }
        else if(window.inputEquation.match("pow",exp))
        {
            window.inputEquation =  exp.replace("pow", "Math.pow");
            console.log("Power function"+window.inputEquation);      
        }

         var newTxt =  window.inputEquation.split("");
            console.log(newTxt);
            var y = window.vectorArray;
            console.log("vector array"+y);
            var array1 = [];
            var array2 = [];
            for (var i = 0; i < newTxt.length; i++) {

                if (newTxt[i] == "(") {

                    array1.push(i);

                } else if (newTxt[i] == ")") {
                    array2.push(i);
                }

            }
            console.log(array1.length+array2.length)
            if(array1.length!=array2.length)
            {
                console.log("missing bracket");
                alert("Braces do not match. Please correct it and try again.");
            }
            array2.reverse();
            console.log(array1);
            console.log(array2);
            var resultArray = [];
            var generatedOut=[];
            console.log("Dgfdg"+window.inputEquation)
            for (i = 0; i < array1.length; i++) {
                var s = window.inputEquation.substring(array1[i] + 1, array2[i]);
                resultArray.push(s);

            }
            for (j = 0; j < y.length; j++) {
                var x = y[j];

                	window.re=eval(resultArray[0]);
                    generatedOut.push(window.re);
                  console.log(eval(resultArray[0]));
            }

          console.log("Hello"+generatedOut);

            $scope.outputData=generatedOut;
        }

    });