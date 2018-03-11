(function(window, $) {

    function tabs(selector) {
        $(selector).find('.' + TAXESDS_CSS_NAMESPACE + '--tabs__headers__header').on('click', function(evt) {
            let target = $(evt.target);
            let tab_id = target.attr('data-target');
            target.siblings('.' + TAXESDS_CSS_NAMESPACE + '--tabs__headers__header').removeClass('-active');
            target.addClass('-active');
            target.closest('.' + TAXESDS_CSS_NAMESPACE + '--tabs').find('.' + TAXESDS_CSS_NAMESPACE + '--tabs__tabs__tab').each(function() {
                let current = $(this);
                if (current.attr('id') === tab_id) {
                    current.addClass('-active');
                } else {
                    current.removeClass('-active');
                }
            });
            evt.stopPropagation();
        });    
    }

    window.taxesTabs = tabs;
})(this, jQuery);
