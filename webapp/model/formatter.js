sap.ui.define([], function () {
    "use strict"

    return {
        statusText: function (sStatus) {
            var ressourceBundle = this.getView().getModel("i18n").getResourceBundle();

            switch (sStatus) {
                case "A":
                    return ressourceBundle.getText("invoiceStatusA");
                case "B":
                    return ressourceBundle.getText("invoiceStatusB");
                case "C":
                    return ressourceBundle.getText("invoiceStatusC");
                default:
                    return sStatus;
            }

        }
    }
})