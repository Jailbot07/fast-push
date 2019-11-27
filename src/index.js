const Snap = require(`snapsvg`);

function move(el, transform) {
  Snap(el).animate({ transform }, 1000, mina.easeinout);
}

const map = Snap.select("svg");

const regions = map.selectAll(".region");

regions.forEach(region => {
  region.hover(
    e => move(e.currentTarget, `t0,-45r0`),
    e => move(e.currentTarget, `t0,0r0`)
  );
});
