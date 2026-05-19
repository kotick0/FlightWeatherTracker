package com.application.flightweathertracker.imgw.sigmet;

import com.application.flightweathertracker.imgw.sigmet.model.FeatureCollection;
import tools.jackson.core.JsonParser;
import tools.jackson.core.JsonToken;
import tools.jackson.databind.DeserializationContext;
import tools.jackson.databind.deser.std.StdDeserializer;

public class FeatureCollectionDeserializer extends StdDeserializer<FeatureCollection> {

    public FeatureCollectionDeserializer() {
        super(FeatureCollection.class);
    }

    @Override
    public FeatureCollection deserialize(JsonParser p, DeserializationContext ctx) {
        if (p.currentToken() == JsonToken.START_ARRAY) {
            p.skipChildren();
            return null;
        }
        return ctx.readValue(p, FeatureCollection.class);
    }
}