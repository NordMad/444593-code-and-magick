'use strict';

var getMaxTime = function (times) {
  var max = -1;
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }
  return max;
};

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = '#000';
  ctx.strokeRect(110, 20, 420, 270);
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = '#fff';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 240, 30);
  ctx.fillText('Список результатов:', 225, 50);

  var histogramHeight = 150;
  var step = histogramHeight / getMaxTime(times);
  var barWidth = 40;
  var indent = 90;
  var initialX = 150;
  var initialY = 250;
  var lineHeight = 20;

  for (var j = 0; j < times.length; j++) {
    var time = times[j];
    var name = names[j];
    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var r = 0.3 + 0.7 * Math.random();
      ctx.fillStyle = 'rgba(0, 0, 255, ' + r + ')';
    }
    ctx.fillRect(initialX + indent * j, initialY, barWidth, -time * step);
    ctx.fillStyle = '#000';
    ctx.fillText(name, initialX + indent * j, initialY + lineHeight);
    ctx.fillText(Math.floor(time), initialX + indent * j, initialY - (lineHeight + histogramHeight));
  }
};
