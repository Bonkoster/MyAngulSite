var app = angular.module('invoice', []);

app.controller('InvoiceController',['$scope','$location','$anchorScroll',function($scope,$location,$anchorScroll,Rector) {  
    
    $scope.tabs = [
        {name: "Контакты", id: "contact"},
        {name: "Технологии", id: "tech"},     
        {name: "Примеры работ", id: "works"},
        {name: "Обо мне", id: "about"}
    ];
    
    $scope.fot = [
        {name: "Создано при помощи AngularJS и Heroku"},
        {name: "Владимир Лучников 2017"}
    ];
    
    $scope.about = "Обо мне";
    $scope.tech = "Технологии использованные при разработке данного сайта";
    $scope.cont = "Контакты";
    $scope.work = "Работы";
    
    $scope.aboutstr = [
      {textmy: "С 2013 по 2016 учился в Санкт-Петербургском техническом колледже управления и коммерции(ТКУиК) по специальности Информационная безопасность автоматизированных систем.Защитил красный диплом. Тема дипломного проекта - Программные уязвимости и просчеты серверной части WEB приложений. В дальнейшем планирую поступить в высшее учебное заведение(ГУАП или ПолиТех)."  },
        {textmy: "Личные качества: спокойствие, умеренность, настойчивость."},
        {textmy: "В свободное время читаю компьютерную литературу, любимые авторы - Герберт Шилдт и дуэт Хорстманна-Корнелла. На данный момент читаю Стива Макконела - совершенный код. "},
        {textmy: "Более года работаю с Java,пользовался такими WEB-технологиями как JSF,GWT,Tapestry. Для работы с базами данных в моих проектах используются MySQL, JDBCtemplate при подключении обычного SQL, или Hibernate при работе с ORM. В качестве дополнительного языка в WEB приложениях я использую JavaScript и библиотеку jQuery."}
    ];  
    
    $scope.myLiks = [
        {ico: "fa fa-google-plus", val: "shram3214@gmail.com", hre: "mailto:email-to@gmail.com"  },
        {ico: "fa fa-vk", val: "vk.com/lukashman", hre: "https://vk.com/lukashman" },
        {ico: "fa fa-github", val: "github.com/Lukashman" , hre: "https://github.com/Lukashman" },
        {ico: "fa fa-user", val: "HeadHunter" , hre: "https://spb.hh.ru/resume/3a058bd8ff0378053d0039ed1f6970346f6e4c" }
    ];
    
    $scope.worksed = [
        {myList: "Маленький чатик", lik: "https://chatrails.herokuapp.com", img: "images/test.png"},
        {myList: "Крестики нолики", lik: "https://github.com/Lukashman/TicTacToe", img: "images/ttt.png"},
        {myList: "Программа для записок", lik: "https://github.com/Lukashman/To-do-list", img: "https://spb.hh.ru/photo/488863068.png?t=1497631539&h=YBxsYfC1lpnJpQVmpfar3g"}
    ];
    
    
    this.a = "AngularJS — JavaScript-фреймворк с открытым исходным кодом. Предназначен для разработки одностраничных приложений. Его цель — расширение браузерных приложений на основе MVC-шаблона, а также упрощение тестирования и разработки.";
    
    this.b = "HTML  — стандартизированный язык разметки документов во Всемирной паутине. Большинство веб-страниц содержат описание разметки на языке HTML (или XHTML). Язык HTML интерпретируется браузерами; полученный в результате интерпретации форматированный текст отображается на экране монитора компьютера или мобильного устройства.";
    
    this.c = "CSS  — формальный язык описания внешнего вида документа, написанного с использованием языка разметки. Преимущественно используется как средство описания, оформления внешнего вида веб-страниц, написанных с помощью языков разметки HTML и XHTML, но может также применяться к любым XML-документам, например, к SVG или XUL.";
    
    this.j = "JavaScript - мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией языка ECMAScript .JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений. Наиболее широкое применение находит в браузерах как язык сценариев для придания интерактивности веб-страницам.";
    
    this.q = "jQuery — библиотека JavaScript, фокусирующаяся на взаимодействии JavaScript и HTML. Библиотека jQuery помогает легко получать доступ к любому элементу DOM, обращаться к атрибутам и содержимому элементов DOM, манипулировать ими. Также библиотека jQuery предоставляет удобный API для работы с AJAX. Сейчас разработка jQuery ведётся командой jQuery во главе с Джоном Резигом.";
    
    $scope.img = [
        {image: "images/angular.png", name:"AngularJS", conte: this.a },
        {image: "images/css.png", name:"CSS3", conte: this.c },
        {image: "images/htm.png", name:"HTML5", conte: this.b },
        {image: "images/javasc.png", name:"JavaScript", conte: this.j },
        {image: "images/jq.png", name:"JQuery", conte: this.q }
    ];
}]);