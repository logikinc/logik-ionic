angular.module('logik.factories', [])

.factory('settings', function() {

    var defaultSettings = {
        title: 'Logik'
    };
    var settings = {};
    var settingsService = {};

    settingsService.init = function() {
        settings = defaultSettings;
        return settings;
    };
    settingsService.set = function(settings) {
        settings = settings;
    };
    settingsService.get = function() {
        return settings;
    };
    return settingsService;
})
