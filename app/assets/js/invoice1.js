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
        {image: "images/angular.png", conte: "asdasdasd" },
        {image: "images/css.png", conte: "asdasdasdsad" },
        {image: "images/htm.png", conte: "asdasdasdzxc" },
        {image: "images/javasc.png", conte: "asdasdasdgfdfg" },
        {image: "images/jq.png", conte: "asdasdasdxcvxzxvcb" }
    ]
    
}])
.factory('Restor', function(){
    factory = {}
    
    return factory;
})