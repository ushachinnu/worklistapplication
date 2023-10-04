sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'tcs/sap/ui/hm/util/formatter'
], function(Controller,formatter) {
    'use strict';
    return Controller.extend("tcs.sap.ui.hm.BaseController",{
        formatter:formatter 
    });
});