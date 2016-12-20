// association PostId
// vote
"use strict";

module.exports = function(sequelize, DataTypes) {
	var Vote = sequelize.define("Vote", {

		vote: DataTypes.STRING
	},
	{
		classMethods:{
			associate: function (models) {
				//the model association name refers to the title of the table not the variable name
				Vote.belongsTo(models.Post)
			}
		}
	});
	return Vote;
};