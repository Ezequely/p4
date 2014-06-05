var todoList = angular.module('todoList', []);

todoList.controller('todoListCtrl', function ($scope, $http) {
            $scope.todos = [ ];

            $http.get('/todo').success(function(data) {
                        $scope.todos = data;
            });

            $scope.deleteTodo = function(id) {
                $http.delete('/todo/destroy/' + id).success(function(data) {

                });
            };


            $scope.move = function(index, direction){
                    while(index >= 1){
                        if (direction === 'vip') {
                                if (index === 0) {
                                      return;
                                }
                                index = index - 1;
                        }

                        var todo = $scope.todos[index];
                        $scope.todos.splice(index + 2, 0, todo);
                        $scope.todos.splice(index, 1);
                    }
            }

});
