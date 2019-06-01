var gift_codes = [
  {unique: "5d5d43ae-2402-4b6b-b819-c7242d6004f1"},
  {unique: "4c7ae685-aa2a-41a8-8407-fcddfa24dc2b"},
  {unique: "14440fc7-5ae5-430c-b61f-d21463b81630"},
  {unique: "ef61529d-c92a-43c6-bdb2-99c05fa59e2b"},
  {unique: "b8e30d63-98f1-439c-966b-07eb74202810"},
  {unique: "814e2f28-d53f-46a5-873b-77ea025e8f30"},
  {unique: "731fe9a3-de6c-42c0-8f74-e34ad0833a3e"},
  {unique: "a2566c12-34b8-4e5d-a9c9-8d85f520cd81"},
  {unique: "64f8c248-d110-4108-9881-97676b52a73a"},
  {unique: "c4d5fe9d-8465-4a17-a44e-cef417607ddd"},
  {unique: "8e276d5c-bafb-499b-a324-82c80118d259"},
  {unique: "bd582aef-b8ad-4f5f-9c89-4e258c6684d7"},
  {unique: "3536a20d-8634-45ac-90a5-9f2fdff30a81"},
  {unique: "f8d21217-19e4-416e-a348-a3a92417bf89"},
  {unique: "bfd71887-4baf-4893-893a-11417a8fce23"},
  {unique: "13d7d8d4-ef9a-4cdc-88cf-9d0657ac3801"},
  {unique: "dc72f93b-e990-4bea-8048-18fa91fbc890"},
  {unique: "2287e2d2-9828-454f-8c26-4f5323e2c8de"},
  {unique: "8a4cea37-e2be-491a-bbca-eb4d4f39e1b2"},
  {unique: "ce120f63-3fed-4187-b315-832b4628e9d0"},
  {unique: "b6eb97a9-8b2e-4137-9d62-39fc0a28741a"},
  {unique: "c03e7c17-cd21-4c81-b4be-4302ef51f7e0"}]

class Player {
  constructor (nick, mail, special_code) {
    this.nick = nick;
    this.mail = mail;
    this.special_code = special_code;
    this.verified = false;
  }

  verify_user(){
    gift_codes.forEach(code => {
      if(code.unique.localeCompare(this.special_code) == 0) {
        this.verified = true;
      }
    });
  }
}

var player1 = new Player('Lukor', 'mail1', "bfd71887-4baf-4893-893a-11417a8fce23")
var player2 = new Player('Jakisz', 'mail2', "8a4cea37-e5be-491a-bbca-eb4d4f39e1b2") // it's a code with a slight error for testing
var player3 = new Player('Yashikuto', 'mail3', "")

var players = [player1, player2, player3];

(function verifyAllUsers() {
  players.forEach(player => {
    player.verify_user();
  });
})();

