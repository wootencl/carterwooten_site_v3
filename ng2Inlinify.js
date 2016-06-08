var ng2TemplateParser = require('gulp-inline-ng2-template/parser');
var through = require('through2');
var htmlMinifier = require('html-minifier');
var sass = require('node-sass');

//Setting options:
var ng2TemplateParserOptions = {
  target: 'es5',
  useRelativePaths: true,
  templateProcessor: minifyTemplate,
  styleProcessor: sassProcessor
};

module.exports = function (file) {
  return through(function (buf, enc, next){
    ng2TemplateParser({contents: buf, path: file}, ng2TemplateParserOptions)((err,result) => {
      this.push(result);
      process.nextTick(next);
    });
  });
};

function minifyTemplate(ext, file, cb) {
	try {
		var minifiedFile = htmlMinifier.minify(file, {
      collapseWhitespace: true,
      caseSensitive: true,
      removeComments: true,
      removeRedundantAttributes: true
    });
    cb(null, minifiedFile);
	} catch (err) {
		cb(err);
	}
};

function sassProcessor(ext, file, cb) {
	if (ext[0] === '.scss') {
		sass.render({
			data: file
		}, (err, result) => {
			if (err) {
				console.log(err.status); 
		    console.log(err.column);
		    console.log(err.message);
		    console.log(err.line);
		    cb(err);
			} else {
				cb(null, result.css);
			}
		});
	}
};