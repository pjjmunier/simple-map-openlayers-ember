import Ember from 'ember';

import Ol from 'npm:openlayers';
import Gp from 'npm:geoportal-extensions-openlayers';

export default Ember.Route.extend({
    model() {
        var createMap = function() {
            var map = new Ol.Map({
                target : "map",
                layers : [
                    new Ol.layer.GeoportalWMTS({
                        layer : "GEOGRAPHICALGRIDSYSTEMS.MAPS"
                    })
                ],
                view : new Ol.View({
                    center : [288074.8449901076, 6247982.515792289],
                    zoom : 8
                })
            });
            var mouse = new Ol.control.GeoportalMousePosition();
            map.addControl(mouse);
        };

        Gp.Services.getConfig({
            apiKey : "jhyvi0fgmnuxvfv0zjzorvdn",
            timeOut : 20000,
            onSuccess : createMap
        });
    }
});
