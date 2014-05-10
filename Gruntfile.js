module.exports = function( grunt ) {

	// configure task(s)
	grunt.initConfig( {

		connect: {
		// connect begin
			templateServer: {
			// templateServer begin
				options: {
					  hostname: "localhost"
					, port: 44210
					, keepalive: true
					, middleware:	function (connect, options) {
										return [
											  function (req, res, next) {
												res.setHeader('Access-Control-Allow-Origin', '*');
												res.setHeader('Access-Control-Allow-Methods', '*');
												next();
											  }
											// Serve static files.
											, connect.static(options.base)
											// Make empty directories browsable.
											, connect.directory(options.base)
										];
							    	}
				}
			// templateServer end
			}
		// connect end
		}	

	} );

	// load task(s)
	grunt.loadNpmTasks( "grunt-contrib-connect" );

	// register task(s)
	grunt.registerTask( "templateServer", "connect:templateServer" );

};
