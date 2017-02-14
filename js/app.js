var app=angular.module("myApp",[]);
	app.controller("shopCar",["$scope",function($scope){
		$scope.shop=[
			{
				img:"images/0.jpg",
				num:1,
				pirce:16000,
			},
			{
				img:"images/1.jpg",
				num:1,
				pirce:16000,
			},
			{
				img:"images/2.jpg",
				num:1,
				pirce:16000,
			},
			{
				img:"images/3.jpg",
				num:1,
				pirce:16000,
			}
		]
		$scope.recus=function(index){
			this.shop[index].num-=1;
			if(this.shop[index].num<=0){
				this.shop[index].num=1;
			}
		}
		$scope.add=function(index){
			this.shop[index].num+=1;
		}
		$scope.sums=function(){
			var sum=0;
			for(var i=0;i<this.shop.length;i++){
				sum+=this.shop[i].num;
			}
			return sum
		}
		$scope.getpirces=function(){
			var sunpirce=0;
			for(var i=0;i<this.shop.length;i++){
				sunpirce+=this.shop[i].num*this.shop[i].pirce;
			}
			return sunpirce
		}
	}])