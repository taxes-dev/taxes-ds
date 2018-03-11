(function(window, $) {

    function nav(selector) {
            let nav_items = $('.' + TAXESDS_CSS_NAMESPACE + '--nav__items', selector);
            let nav_width = nav_items.outerWidth();
            nav_items.css('left', (nav_width * -1) + 'px');
            $('.' + TAXESDS_CSS_NAMESPACE + '--nav__mobile-trigger', selector).on('click', function(evt) {
                $(this).siblings('.' + TAXESDS_CSS_NAMESPACE + '--nav__items').toggleClass('-active');
                evt.stopPropagation();
            });
            $(window).on('click', function() {
                $('.txs--nav__items', selector).removeClass('-active');
            });
    }

    window.taxesMobileNav = nav;
})(this, jQuery);