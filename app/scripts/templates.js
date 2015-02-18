angular.module('templates-main', ['../app/views/about.tpl.html', '../app/views/main.tpl.html']);

angular.module("../app/views/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/views/about.tpl.html",
    "<p>This is the about view.</p>\n" +
    "");
}]);

angular.module("../app/views/main.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/views/main.tpl.html",
    "<div class=\"container-fluid main-view\">\n" +
    "  <div class=\"row current-score\">\n" +
    "    <div class=\"col-lg-6 col-md-6 left-guy\">\n" +
    "      <div class=\"current-point\">\n" +
    "        3\n" +
    "      </div>\n" +
    "      <div class=\"name\">\n" +
    "        IvanP\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-lg-6 col-md-6 right-guy\">\n" +
    "      <div class=\"current-point\">\n" +
    "        <div class=\"serve\">\n" +
    "          SERVING\n" +
    "        </div>\n" +
    "        9\n" +
    "      </div>\n" +
    "      <div class=\"name\">\n" +
    "        IgorP\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-lg-12 col-md-12 tip\">\n" +
    "      A WIN FOR <span class=\"left-guy\">IVANP</span> TAKES HIM TO RANK 3\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <!--<div class=\"row stats\">-->\n" +
    "    <!--<div class=\"col-lg-12 col-md-12 headline\"><h1>STATISTICS</h1></div>-->\n" +
    "    <!--<div class=\"col-lg-4 col-md-4 score-block\">-->\n" +
    "      <!--<h2>LAST SCORE</h2>-->\n" +
    "      <!--<div class=\"score clearfix\">-->\n" +
    "        <!--<div class=\"col-lg-5 col-md-5 points\">9</div>-->\n" +
    "        <!--<div class=\"col-lg-2 col-md-2 points\">-</div>-->\n" +
    "        <!--<div class=\"col-lg-5 col-md-5 points\">11</div>-->\n" +
    "        <!--<div class=\"col-lg-5 col-md-5\"><span class=\"left-guy\">IgorP</span></div>-->\n" +
    "        <!--<div class=\"col-lg-2 col-md-2\"></div>-->\n" +
    "        <!--<div class=\"col-lg-5 col-md-5 right\"><span class=\"right-guy\">IvanP</span></div>-->\n" +
    "      <!--</div>-->\n" +
    "    <!--</div>-->\n" +
    "    <!--<div class=\"col-lg-4 col-md-4 score-block\">-->\n" +
    "      <!--<h2>HEAD TO HEAD</h2>-->\n" +
    "      <!--<div class=\"score clearfix\">-->\n" +
    "        <!--<div class=\"col-lg-5 col-md-5 points\">22</div>-->\n" +
    "        <!--<div class=\"col-lg-2 col-md-2 points\">-</div>-->\n" +
    "        <!--<div class=\"col-lg-5 col-md-5 points\">23</div>-->\n" +
    "        <!--<div class=\"col-lg-5 col-md-5\"><span class=\"left-guy\">IgorP</span></div>-->\n" +
    "        <!--<div class=\"col-lg-2 col-md-2\"></div>-->\n" +
    "        <!--<div class=\"col-lg-5 col-md-5 right\"><span class=\"right-guy\">IvanP</span></div>-->\n" +
    "      <!--</div>-->\n" +
    "    <!--</div>-->\n" +
    "    <!--<div class=\"col-lg-4 col-md-4 score-block\">-->\n" +
    "      <!--<h2>CURRENT RANKING</h2>-->\n" +
    "      <!--<div class=\"score clearfix\">-->\n" +
    "        <!--<div class=\"col-lg-5 col-md-5 points\">3</div>-->\n" +
    "        <!--<div class=\"col-lg-2 col-md-2 points\"></div>-->\n" +
    "        <!--<div class=\"col-lg-5 col-md-5 points\">4</div>-->\n" +
    "        <!--<div class=\"col-lg-5 col-md-5\"><span class=\"left-guy\">IgorP</span></div>-->\n" +
    "        <!--<div class=\"col-lg-2 col-md-2\"></div>-->\n" +
    "        <!--<div class=\"col-lg-5 col-md-5 right\"><span class=\"right-guy\">IvanP</span></div>-->\n" +
    "      <!--</div>-->\n" +
    "    <!--</div>-->\n" +
    "  <!--</div>-->\n" +
    "</div>\n" +
    "");
}]);
