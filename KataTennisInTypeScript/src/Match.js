var Match = (function () {
    function Match(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        if(!player1) {
            throw "Player1 Is Required";
        }
        if(!player2) {
            throw "Player2 Is Required";
        }
        this.player1Score = 0;
        this.player2Score = 0;
    }
    Match.prototype.PlayRound = function () {
        var player1Chance = this.player1.Play();
        var player2Chance = this.player2.Play();
        if(player1Chance == player2Chance) {
            this.PlayRound();
        } else {
            if(player1Chance > player2Chance) {
                this.player1Score = 15;
            } else {
                this.player2Score = 15;
            }
        }
    };
    return Match;
})();
