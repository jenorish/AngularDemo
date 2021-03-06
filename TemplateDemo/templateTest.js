/**
 * Created by Amit Thakkar on 27/3/14.
 */
'use strict';

var templateTestApp = angular.module('templateTest', []);
templateTestApp.directive('myTemplate', function () { // Registering myTemplate directive to templateTest module
    return {
        /*
         * Restrict restricting to directive must be use as:
         * E stands for Element
         * C stand for Class name
         * M stands for Comment
         * A stands for Attribute
         * Here we are defining directive with all the type, if we don't provide restrict field then default value is
         * 'A' means directive can be use as attribute only.
         * */
        restrict: "ECMA", // directive can be use as attribute, element, class and comment.
        replace: true, // replace indicates that we want to replace whole div or only inner HTML, default value is false.
        template: "<div>this is template directive test</div>" // DOM element's inner content should be replace with this.
        // If you want to provide template content from HTML file use templateUrl option instead of template
    };
});