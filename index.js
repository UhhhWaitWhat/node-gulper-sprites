var sprite = require('css-sprite').stream;
var es = require('event-stream');
var gulp = require('gulp');

module.exports = function(glob) {
	return {
		name: 'sprites',
		output: 'styles',
		glob: glob,
		streamer: function(input) {
			var output = es.through();
			var timer = 0;
			var end = false;

			input.on('end', function() {
				end = true;
				time();
			});

			input.on('data', time);

			function time() {
				clearTimeout(timer);
				timer = setTimeout(function() {
					gulp.src(glob).pipe(sprite({
						base64: true,
						style: 'sprite.css',
						prefix: 'sprite'
					})).pipe(output);
				}, 200);
			}

			return output;
		}
	};
};