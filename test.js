var mongoose = require('mongoose');

var Mockgoose = require('./Mockgoose')(mongoose).then(function() {

	mongoose.connect('mongodb://localhost:27017');

	mongoose.connection.on('connected', function () {
	  console.log('Mongoose open');
	  console.log('mongoose.isMocked',mongoose.isMocked);

        var test1 = mongoose.model('test1', new mongoose.Schema({ name: String, type: String }));

        test1.create({name:'a3',type:1111},function (err, data) {
            console.log(data);

            test1.find().exec(function(err, rs) {
                console.log('rs:',rs);
            });
        });


	});
});
