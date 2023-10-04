sap.ui.define([
    'tcs/sap/ui/hm/controller/BaseController',
    'sap/m/MessageBox',
    'sap/m/MessageToast'
], function(BaseController,MessageBox,MessageToast) {
    'use strict';
    return BaseController.extend("tcs.sap.ui.hm.controller.View2",{
        onBack: function(){
            //Step 1: get the App Container class object where we embedded our views
            var oAppCon = this.getView().getParent();
            //step 2: container has API to navigate
            oAppCon.to("idView1")
            //alert("Function under construction");
        },
        onSave:function(){
            MessageBox.confirm("Would you like to order fruits??",{
                title: "Confirm your order?",
                onClose: function(choice){
                    if(choice === "OK"){
                    MessageToast.show("Your order has been placed successfully");
                    }else{
                        MessageToast.show("Oops! your order was cancelled");
                    }
                }
            });
        }
    });
    
});