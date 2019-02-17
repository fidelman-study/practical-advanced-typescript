var Library = /** @class */ (function () {
    function Library() {
    }
    return Library;
}());
var library = new Library();
// sometime later & elsewhere in our codebase
var shortTitles = library.titles.filter(function (title) { return title.length < 5; });
