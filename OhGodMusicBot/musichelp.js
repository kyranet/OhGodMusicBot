exports.run = (client, msg) => {
	const p = client.config.prefix;
	const tosend = [
		`${p}join : "Join Voice channel of msg sender"`,
		`${p}add : "Add a valid youtube link to the queue"`,
		`${p}queue : "Shows the current queue, up to 15 songs shown."`,
		`${p}play : "Play the music queue if already joined to a voice channel"`,
		'',
		'the following commands only function while the play command is running:'.toUpperCase(),
		`${p}pause : "pauses the music"`,
		`${p}resume : "resumes the music"`,
		`${p}skip : "skips the playing song"`,
		`${p}time : "Shows the playtime of the song."`,
		'volume+(+++) : "increases volume by 2%/+"',
		'volume-(---) : "decreases volume by 2%/-"'
	];
	return msg.channel.send(tosend, { code: 'xl' });
};

exports.conf = {
	enabled: true,
	runIn: ['text'],
	aliases: [],
	permLevel: 0,
	botPerms: [],
	requiredFuncs: []
};

exports.help = {
	name: 'musichelp',
	description: 'Displays the OhGodMusicBot help.',
	usage: '',
	usageDelim: '',
	extendedHelp: ''
};
