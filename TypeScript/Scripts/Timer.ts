namespace Timer
{
    window.onload = () =>
    {
        var timer = new Timer();
        timer.start('startButton', 'pauseButton', 'clearButton');
    };
    class Timer
    {
        timerId: number = -1;
        interval: number = 25;
        ms: number = 0;
        seconds: number = 0;
        minutes: number = 0;

        public  start(startButton: string, pauseButton: string, clearButton: string)
        {
            document.getElementById(startButton).addEventListener("click", this._startTimer, false);
            document.getElementById(pauseButton).addEventListener("click", this.pauseTimer, false);
            document.getElementById(clearButton).addEventListener("click", this.clearTimer, false);

        }
        private _startTimer = () =>
        {
            if (this.timerId === -1)
            {
                this.timerId = window.setInterval(this.turnTimerOn.bind(this), this.interval);
            }

        };
        private _displayTimer = () =>
        {
            document.getElementById('milliseconds').innerHTML = this.ms.toString();
            document.getElementById('seconds').innerHTML = this.seconds.toString();
            document.getElementById('minutes').innerHTML = this.minutes.toString();
        };
        public pauseTimer = () =>
        {
            window.clearInterval(this.timerId);
            this.timerId = -1;
        };
        public clearTimer = () =>
        {
            this.pauseTimer();
            this.ms = 0;
            this.seconds = 0;
            this.minutes = 0;
            this._displayTimer();
        };

        private changeColor()
        {
            document.getElementById("body").style.backgroundColor = this.getRandomColor();
        }
        private getRandomColor(): string
        {
            const hex = Math.floor(Math.random() * 0xFFFFFF);
            return `#${("000000" + hex.toString(16)).substr(-6)}`;
        }

        private turnTimerOn()
        {
            this.ms += this.interval;
            if (this.ms >= 1000)
            {
                this.ms = 0;
                this.seconds += 1;
                this.changeColor();
            }
            if (this.seconds >= 60)
            {
               
                this.ms = 0;
                this.seconds = 0;
                this.minutes += 1;
            }
            this._displayTimer();
        };
    }
}