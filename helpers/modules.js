module.exports = {
	Discord : require('discord.js'),
	parser : require('discord-command-parser'),
	generateEmbed : require('better-embed'),
	Cleverbot : require('cleverbot-node'),
	moment : require('moment'),
	fs : require('fs'),
	dbHandler : require('./userDatabaseHandler'),
	embeds : require('./embeds'),
	sql : require('sqlite3').verbose(),
	path : require('path'),
	color : require('./colorPicker'),
	LastFM : require('lastfm-node-client'),
	lastfmHelper : require('./lastfm'),
	momentTz: require('moment-timezone'),
	albumArt : require('album-art'),
	time : require('./time'),
	chalk : require('chalk')
}