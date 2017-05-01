var Timer;
(function (Timer_1) {
    window.onload = function () {
        var timer = new Timer();
        timer.start('startButton', 'pauseButton', 'clearButton');
    };
    var Timer = (function () {
        function Timer() {
            var _this = this;
            this.timerId = -1;
            this.interval = 25;
            this.ms = 0;
            this.seconds = 0;
            this.minutes = 0;
            this.startTimer = function () {
                if (_this.timerId === -1) {
                    _this.timerId = window.setInterval(_this.turnTimerOn.bind(_this), _this.interval);
                }
            };
            this.displayTimer = function () {
                document.getElementById('milliseconds').innerHTML = _this.ms.toString();
                document.getElementById('seconds').innerHTML = _this.seconds.toString();
                document.getElementById('minutes').innerHTML = _this.minutes.toString();
            };
            this.pauseTimer = function () {
                window.clearInterval(_this.timerId);
                _this.timerId = -1;
            };
            this.clearTimer = function () {
                _this.pauseTimer();
                _this.ms = 0;
                _this.seconds = 0;
                _this.minutes = 0;
                _this.displayTimer();
            };
        }
        Timer.prototype.start = function (startButton, pauseButton, clearButton) {
            document.getElementById(startButton).addEventListener("click", this.startTimer, false);
            document.getElementById(pauseButton).addEventListener("click", this.pauseTimer, false);
            document.getElementById(clearButton).addEventListener("click", this.clearTimer, false);
        };
        Timer.prototype.changeColor = function () {
            document.getElementById("body").style.backgroundColor = this.getRandomColor();
        };
        Timer.prototype.getRandomColor = function () {
            var hex = Math.floor(Math.random() * 0xFFFFFF);
            return "#" + ("000000" + hex.toString(16)).substr(-6);
        };
        Timer.prototype.turnTimerOn = function () {
            this.ms += this.interval;
            if (this.ms >= 1000) {
                this.ms = 0;
                this.seconds += 1;
                this.changeColor();
            }
            if (this.seconds >= 60) {
                this.ms = 0;
                this.seconds = 0;
                this.minutes += 1;
            }
            this.displayTimer();
        };
        ;
        return Timer;
    }());
})(Timer || (Timer = {}));
//# sourceMappingURL=Timer.js.map