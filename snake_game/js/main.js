//--------------------------食物------------------------------------
//自调用函数, 防止命名冲突
;(function() {
	var position = 'absolute';
	var elements = [];

	//食物构造函数
	function Food(options) {
		options = options || {};
		this.x = options.x || 0;
		this.y = options.y || 0;
		this.width = options.height || 20;
		this.height = options.height || 20;
		this.color = options.color || 'green';
	}

	//渲染
	Food.prototype.render = function(map) {
		remove();

		//获取坐标
		this.x = Tools.getRandom(0, map.offsetWidth/this.width-1)*this.width;
		this.y = Tools.getRandom(0, map.offsetHeight/this.height-1)*this.height;

		//创建食物
		var div = document.createElement('div');
		map.appendChild(div);
		elements.push(div);

		//设置div样式
		div.style.width = this.width + 'px';
		div.style.height = this.height + 'px';
		div.style.backgroundColor = this.color;
		div.style.position = position;
		div.style.left = this.x + 'px';
		div.style.top = this.y + 'px';
	}

	function remove() {
		for (var i = elements.length-1; i >= 0; i--) {
			//删除div
			elements[i].parentNode.removeChild(elements[i]);
			//删除数组中的元素
			elements.splice(i, 1);

		}
	}

	window.Food = Food;
})()


//--------------------------蛇------------------------------------
;(function() {
    var position = 'absolute';
    var elements = [];

    //蛇的构造函数
    function Snake(options) {
        options = options || {};
        this.width = options.width || 20;
        this.height = options.height || 20;
        this.direction = options.direction || 'right'; //蛇的移动方向
        this.body = [
            { x: 3, y: 2, color: 'red' }, { x: 2, y: 2, color: 'green' }, { x: 1, y: 2, color: 'green' }
        ]; //蛇的身体, 第一个是蛇头
    }

    //渲染
    Snake.prototype.render = function(map) {
        remove();
        for (var i = 0; i < this.body.length; i++) {
            var objects = this.body[i];

            //创建元素并添加至map中
            var div = document.createElement('div');
            map.appendChild(div);
            //记录当前蛇
            elements.push(div);

            //设置样式
            div.style.position = position;
            div.style.width = this.width + 'px';
            div.style.height = this.height + 'px';
            div.style.left = objects.x * this.width + 'px';
            div.style.top = objects.y * this.height + 'px';
            div.style.backgroundColor = objects.color;
        }
    }

    //控制蛇的移动
    Snake.prototype.move = function(food, map) {
        remove();
        // 控制蛇的身体移动（当前蛇节 到 上一个蛇节的位置）
        for (var i = this.body.length - 1; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }

        // 控制蛇头的移动
        // 判断蛇移动的方向
        var head = this.body[0];
        switch (this.direction) {
            case 'right':
                head.x += 1;
                break;
            case 'left':
                head.x -= 1;
                break;
            case 'top':
                head.y -= 1;
                break;
            case 'bottom':
                head.y += 1;
                break;
        }

        //看蛇头是否与食物重合
        var headX = head.x * this.width;
        var headY = head.y * this.height; 
        if (headX === food.x && headY === food.y) {
            //蛇新增一节
            var last = this.body[this.body.length-1];
            this.body.push({
                x: last.x,
                y: last.y,
                color: last.color
            });

            // 随机在地图上重新生成食物
            food.render(map);
        }

    }

    function remove() {
        for (var i = elements.length - 1; i >= 0; i--) {
            // 删除div
            elements[i].parentNode.removeChild(elements[i]);
            // 删除数组中的元素
            elements.splice(i, 1);
        }
    }

    window.Snake = Snake;
})()



//--------------------------游戏对象------------------------------------
;(function() {
    var that;

    function Game(map) {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
        that = this;
    }

    Game.prototype.start = function() {
        //把蛇和食物渲染出来
        this.food.render(this.map);
        this.snake.render(this.map);
        runSnake();
        bindKey()
    }

    function runSnake() {
        //让蛇自动移动起来
        var timerId = setInterval(function() {
            that.snake.move(that.food, that.map);
            that.snake.render(that.map);

            //当蛇遇到边界游戏结束
            var maxX = this.map.offsetWidth / this.snake.width;
            var maxY = this.map.offsetHeight / this.snake.height;
            var headX = this.snake.body[0].x;
            var headY = this.snake.body[0].y;
            if (headX < 0 || headX >= maxX) {
                alert('Game Over');
                clearInterval(timerId);
                var game1 = new Game(map);
                game1.start();
            }

            if (headY < 0 || headY >= maxY) {
                alert('Game Over');
                clearInterval(timerId);
                var game1 = new Game(map);
                game1.start();
            }
        }.bind(that), 300);
    }

    //使用键盘控制蛇头方向
    function bindKey() {
        document.addEventListener('keydown', function(e) {
            switch (e.keyCode) {
                case 37:
                    if (this.snake.direction === 'right') {
                        this.snake.direction = 'right';
                    } else {
                        this.snake.direction = 'left';
                    }
                    break;
                case 38:
                    if (this.snake.direction === 'bottom') {
                        this.snake.direction = 'bottom';
                    } else {
                        this.snake.direction = 'top';
                    }
                    break;
                case 39:
                    if (this.snake.direction === 'left') {
                        this.snake.direction = 'left';
                    } else {
                        this.snake.direction = 'right';
                    }
                    break;
                case 40:
                    if (this.snake.direction === 'top') {
                        this.snake.direction = 'top';
                    } else {
                        this.snake.direction = 'bottom';
                    }
                    break;
            }
        }.bind(that), false)
    }

    window.Game = Game;
})()


//--------------------------游戏入口------------------------------------

;(function(){
	var map = document.getElementById('map');
    var game = new Game(map);
    game.start();
})()
