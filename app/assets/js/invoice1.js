angular.module('invoice', [])
.controller('InvoiceController',['$scope','Restor', function($scope,Restor) {  

    $scope.tabs = [
        {name: "Контакты"},
        {name: "Технологии"},     
        {name: "Примеры работ"},
        {name: "Обо мне"}
    ]
    
    $scope.fot = [
        {name: "Создано при помощи AngularJS и Heroku"},
        {name: "Владимир Лучников 2017"}
    ]
    
    $scope.img = [
        {image: "images/angular.png", name:"AngularJS", conte: "asdasdasd" },
        {image: "images/css.png", name:"CSS3", conte: "asdasdasdsad" },
        {image: "images/htm.png", name:"HTML5", conte: "asdasdasdzxc" },
        {image: "images/javasc.png", name:"JavaScript", conte: "asdasdasdgfdfg" },
        {image: "images/jq.png", name:"JQuery", conte: "asdasdasdxcvxzxvcb" }
    ]
    
}])
.factory('Restor', function(){
    factory = {}
    
    return factory;
})