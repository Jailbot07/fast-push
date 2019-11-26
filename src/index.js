const Snap = require(`imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js`);
const $ = require(`jquery`);
$(".region").attr('fill', "pink")
    .attr('transform', "skewX(-20), scale(1, 0.8), translate(300, 10)");

$(".region > path").on('mouseenter', function() {
        $(this).attr('transform', "translate(-10, -10)")
            .parent().append($(this));
    }).on('mouseleave', function() {
        $(this).attr('transform', "translate(0, 0)");
    }).attr('fill', "url(#diagonalHatch)");

const regions = Snap(".region > path");
regions.drag(function() {console.log(this)}, function() {console.log(this)}, function() {console.log(this)});
console.log(1);
