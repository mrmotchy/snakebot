module.exports = async (client) => {
  client.Ready = true;
  client.user.setActivity("+info", { type: "STREAMING", url:"https://www.twitch.tv/captain_motchy" }).then(() => {
    client.Manager.init(client.user.id);
    client.log("Successfully Logged in as " + client.user.tag);
  });
  client.RegisterSlashCommands();
};