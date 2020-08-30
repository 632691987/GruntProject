
module.exports = {
  options: {
    process: true
  },
  mondi: {
    src: [
      // plugins
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/enquire.min.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/Imager.min.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/jquery.blockUI-2.66.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/jquery.colorbox-min.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/jquery.form.min.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/jquery.hoverIntent.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/jquery.pstrength.custom-1.2.0.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/jquery.syncheight.custom.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/jquery.tabs.custom.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/jquery-ui-1.11.2.min.js',
      '<%= paths.source %>' + 'responsive/javascripts/jquery-ui-i18n.min.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/jquery.zoom.custom.js',
      // '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/owl.carousel.custom.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/jquery.tmpl.1.0.0pre.min.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/jquery.currencies.custom.js',
      '<%= paths.source %>' + 'responsive/lib/bootstrap-3.2.0/js/tooltip.js',
      '<%= paths.source %>' + 'responsive/lib/google_charts/loader.js',

      '<%= paths.source %>' + 'responsive/javascripts/modernizr.custom.js',

      // custom acc js files
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/acc.address.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/acc.autocomplete.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/acc.carousel.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/acc.cart.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/acc.cartitem.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/acc.checkout.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/acc.checkoutaddress.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/acc.checkoutsteps.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/acc.cms.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/acc.colorbox.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/acc.common.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/acc.forgottenpassword.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/acc.global.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/acc.hopdebug.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/acc.imagegallery.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/acc.langcurrencyselector.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/acc.minicart.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/acc.navigation.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/acc.order.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/acc.paginationsort.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/acc.payment.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/acc.paymentDetails.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/acc.pickupinstore.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/acc.product.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/acc.productDetail.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/acc.quickview.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/acc.ratingstars.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/acc.refinements.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/acc.silentorderpost.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/acc.tabs.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/acc.termsandconditions.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/acc.storefinder.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/acc.futurelink.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/acc.productorderform.js',
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/acc.multidgrid.js',

      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/_autoload.js',

      // cms action js files
      '<%= paths.source %>' + 'responsive/lib/ybase-0.1.0/js/cms/*.js',

      // clockpicker
      '<%= paths.source %>' + 'responsive/lib/clockpicker-0.2.1/dist/bootstrap-clockpicker.min.js',

      // ecx.io js files
      '<%= paths.source %>' + 'responsive/javascripts/jquery.selectboxit.js',
      '<%= paths.source %>' + 'responsive/javascripts/datatables.min.js',
      '<%= paths.source %>' + 'responsive/javascripts/dataTables.buttons.min.js',
      '<%= paths.source %>' + 'responsive/javascripts/jszip.min.js',
      '<%= paths.source %>' + 'responsive/javascripts/buttons.html5.min.js',
      '<%= paths.source %>' + 'responsive/javascripts/moment.js',
      '<%= paths.source %>' + 'responsive/javascripts/swiper.js',
      '<%= paths.source %>' + 'responsive/javascripts/parsley.min.js',

      '<%= paths.source %>' + 'responsive/javascripts/ecx/Ecx-NumberFormatter.js',
      '<%= paths.source %>' + 'responsive/javascripts/ecx/Header.js',
      '<%= paths.source %>' + 'responsive/javascripts/ecx/Helper.js',
      '<%= paths.source %>' + 'responsive/javascripts/ecx/Utils.js',
      '<%= paths.source %>' + 'responsive/javascripts/ecx/DeviceSelector.js',
      '<%= paths.source %>' + 'responsive/javascripts/ecx/ParsleyHelper.js',
      '<%= paths.source %>' + 'responsive/javascripts/ecx/FormHelper.js',

      '<%= paths.source %>' + 'responsive/javascripts/components-crp/DataTables.js',
      '<%= paths.source %>' + 'responsive/javascripts/netconomy/DatepickerHelper.js',
      '<%= paths.source %>' + 'responsive/javascripts/netconomy/Datepicker.js',
      '<%= paths.source %>' + 'responsive/javascripts/netconomy/DatepickerLeadTimes.js',
      '<%= paths.source %>' + 'responsive/javascripts/components-crp/OrderHistory.js',
      '<%= paths.source %>' + 'responsive/javascripts/components-crp/Pagination.js',
      '<%= paths.source %>' + 'responsive/javascripts/components-crp/DocumentDownload.js',
      '<%= paths.source %>' + 'responsive/javascripts/components-crp/StatementOfAccount.js',
      '<%= paths.source %>' + 'responsive/javascripts/components-crp/StockReport.js',
      '<%= paths.source %>' + 'responsive/javascripts/components-crp/ProductSearch.js',
      '<%= paths.source %>' + 'responsive/javascripts/components-crp/ProductDetail.js',
      '<%= paths.source %>' + 'responsive/javascripts/components-crp/Checkout.js',
      '<%= paths.source %>' + 'responsive/javascripts/components-crp/CheckoutThankYou.js',
      '<%= paths.source %>' + 'responsive/javascripts/components-crp/Cart.js',
      '<%= paths.source %>' + 'responsive/javascripts/components-crp/MiniCart.js',
      '<%= paths.source %>' + 'responsive/javascripts/components-crp/BillingDocument.js',
      '<%= paths.source %>' + 'responsive/javascripts/components-crp/AdditionalInfoToggler.js',
      '<%= paths.source %>' + 'responsive/javascripts/components-crp/PageSize.js',

      '<%= paths.source %>' + 'responsive/javascripts/ecx/components/CookiesOverlay.js',

      '<%= paths.source %>' + 'responsive/javascripts/custom.js',

        //CRP
      '<%= paths.source %>' + 'responsive/javascripts/netconomy/AddressBook.js',
      '<%= paths.source %>' + 'responsive/javascripts/netconomy/ClaimHistory.js',
      '<%= paths.source %>' + 'responsive/javascripts/netconomy/MondiCRPSlider.js',
      '<%= paths.source %>' + 'responsive/javascripts/netconomy/GoogleAnalyst.js'
    ],
    dest: '<%= paths.destination %>' + 'responsive/common/js/app.js'
  },
  servicePortal: {
    src: [
      '<%= paths.source %>' + 'responsive/javascripts/netconomy/DatepickerHelper.js',
      '<%= paths.source %>' + 'responsive/javascripts/netconomy/Datepicker.js',
      '<%= paths.source %>' + 'responsive/javascripts/netconomy/DatepickerLeadTimes.js',

      '<%= paths.source %>' + 'responsive/javascripts/custom-serviceportal.js'
    ],
    dest: '<%= paths.destination %>' + 'responsive/common/js/app-serviceportal.js'
  },
  css: {
    options: {
      sourceMap: true
    },
    src: [
      // Main CSS file combined from accelerator (style) and ib styles
      '<%= paths.destination %>' + 'responsive/theme-' + '<%= themeName %>' + '/css/style.css',
      '<%= paths.destination %>' + 'responsive/theme-' + '<%= themeName %>' + '/css/screen-crp.css'
    ],
    dest: '<%= paths.destination %>' + 'responsive/theme-' + '<%= themeName %>' + '/css/main.css'
  }
};
