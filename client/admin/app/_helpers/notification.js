angular.module('helpers')
  .service('Notification', function () {
    var _Notification = this;

    function success (title, content) {
      $.smallBox({
        title: title,
        content: '<i class="fa fa-clock-o"></i><i>'+ (content || 'Успешно!') +'</i>',
        color: '#1d9d74,',
        iconSmall: 'fa fa-check bounce animated',
        timeout: 4000
      })
    }

    function error (title, content) {
      $.smallBox({
        title: title,
        content: '<i class="fa fa-clock-o"></i><i>'+ (content || 'Ошибка!') +'</i>',
        color: "#a90329",
        iconSmall: "fa fa-exclamation-circle bounce animated",
        timeout: 4000
      })
    }

    function info (title, content) {
      $.smallBox({
        title: title,
        content: '<i class="fa fa-clock-o"></i><i>'+ (content || 'Инфо') +'</i>',
        color: "#57889c",
        iconSmall: "fa fa-info-circle bounce animated",
        timeout: 4000
      })
    }

    function custom (title, content, settings) {
      $.smallBox({
        title: title,
        content: '<i class="fa fa-clock-o"></i><i>'+ content +'</i>',
        color: settings.color || "#57889c",
        iconSmall: settings.iconSmall + "fa bounce animated",
        timeout: 4000
      })
    }

    _Notification.success = success;
    _Notification.error = error;
    _Notification.info = info;
    _Notification.custom = custom;


  });