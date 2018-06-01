define('simple-map-openlayers-ember/routes/map-openlayers', ['exports', 'ember', 'npm:openlayers', 'npm:geoportal-extensions-openlayers'], function (exports, _ember, _npmOpenlayers, _npmGeoportalExtensionsOpenlayers) {
    exports['default'] = _ember['default'].Route.extend({
        model: function model() {
            var createMap = function createMap() {
                var map = new _npmOpenlayers['default'].Map({
                    target: "map",
                    layers: [new _npmOpenlayers['default'].layer.GeoportalWMTS({
                        layer: "GEOGRAPHICALGRIDSYSTEMS.MAPS"
                    })],
                    view: new _npmOpenlayers['default'].View({
                        center: [288074.8449901076, 6247982.515792289],
                        zoom: 8
                    })
                });
                var mouse = new _npmOpenlayers['default'].control.GeoportalMousePosition();
                map.addControl(mouse);
            };

            _npmGeoportalExtensionsOpenlayers['default'].Services.getConfig({
                apiKey: "jhyvi0fgmnuxvfv0zjzorvdn",
                timeOut: 20000,
                onSuccess: createMap
            });
        }
    });
});