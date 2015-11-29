module.exports = {
	options: {
		sourceMap: true
	},
	dist: {
		files: [{
			expand: true,
			cwd: 'assets/sass',
			src: [
				'**/*.scss'
			],
			dest: 'assets/dist/css',
			ext: '.css'
		}]
	}
};