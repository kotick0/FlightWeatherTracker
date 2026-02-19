package com.application.flightweathertracker.model.metar;

import tools.jackson.core.JsonParser;
import tools.jackson.core.type.TypeReference;
import tools.jackson.databind.DeserializationContext;
import tools.jackson.databind.JsonNode;
import tools.jackson.databind.deser.std.StdDeserializer;

import java.io.IOException;
import java.util.List;

public class MetarsDeserializer extends StdDeserializer<List<Metar>> {

    public MetarsDeserializer() {
        super(List.class);
    }

    @Override
    public List<Metar> deserialize(JsonParser p, DeserializationContext ctxt) throws IOException {
        JsonNode root = ctxt.readTree(p); // modern replacement for p.getCodec().readTree(p)
        JsonNode pl = root.path("sa").path("pl");
        return ctxt.readTreeAsValue(pl, new TypeReference<List<Metar>>() {});
    }
}