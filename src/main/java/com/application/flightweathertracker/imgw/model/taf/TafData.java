package com.application.flightweathertracker.imgw.model.taf;

import lombok.Getter;
import lombok.Setter;

public class TafData {
    @Getter
    @Setter
    private ImgwTaf fc;
    @Getter
    @Setter
    private ImgwTaf ft;

    public TafData() {
    }

    public String toString() {
        return "\nfc: " + getFc() + "\n" + "ft: " + getFt() + "\n";
    }
}
