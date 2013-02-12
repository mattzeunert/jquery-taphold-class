// Adds the specified class to the element when it is tapped on continously.
// This is similar to :active in CSS but for mobile devices.
// Depends on jQuery Mobile
// Usage: $(element).tapholdClass("active-element-class");
(function($){
    $.fn.tapholdClass = function(cls){
        $(this).each(function(){
            var element = $(this);
            var delay = 140;
            var doAddClass = false;
            element.on("vmousedown", function(){
                doAddClass = true;
                setTimeout(function(){
                    if (doAddClass)
                    {
                        element.addClass(cls);
                    }
                }, delay);
            });
            element.on("vmouseup scrollstart", function(){
                    element.removeClass(cls);
                    doAddClass = false;
            });
            element.on("taphold", function(){
                element.removeClass(cls);
                doAddClass = false;
            });
            return this;
        });
    };
})(jQuery);