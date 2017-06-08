angular.module('invoice', [])
.controller('InvoiceController',['$scope','Restor', function($scope,Restor) {  

    $scope.tabs = [
        {name: "Технологии"},
        {name: "Контакты"},
        {name: "Примеры работ"},
        {name: "Обо мне"}
    ]
    
    $scope.fot = [
        {name: "Создано при помощи AngularJS и Heroku"},
        {name: "Владимир Лучников 2017"}
    ]
    
    $scope.img = [
        {image: "app/images/angular.png", conte: "asdasdasd" },
        {image: "app/images/css.png", conte: "asdasdasdsad" },
        {image: "app/images/htm.png", conte: "asdasdasdzxc" },
        {image: "app/images/javasc.png", conte: "asdasdasdgfdfg" },
        {image: "app/images/jq.png", conte: "asdasdasdxcvxzxvcb" }
    ]
    
}])
.factory('Restor', function(){
    factory = {}
    
    return factory;
})