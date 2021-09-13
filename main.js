var app = new Vue({
	el: '#app',
	data: {
		isStyle: '',
		Text_1:'',
        Text_2:'',
        Text_3:'',
        Text_4:''
    },
	methods: {
		toStyle1: function(){
             this.isStyle = 'isStyle_1';
             $('#spaces .spaceBox:nth-child(2)').css('display', 'none');
             $('#spaces .spaceBox:nth-child(4)').css('display', 'none');
             $('#spaces .spaceBox:nth-child(1)').css('width','100%');
             $('#spaces .spaceBox:nth-child(3)').css('width','100%');
             
	},
	toStyle2: function(){
             this.isStyle = 'isStyle_2';
             $('#spaces .spaceBox:nth-child(4)').css('display', 'none');
             $('#spaces .spaceBox:nth-child(2)').css('display', 'block');
             $('#spaces .spaceBox:nth-child(1)').css('width','40%');
             $('#spaces .spaceBox:nth-child(2)').css('width','60%');
             $('#spaces .spaceBox:nth-child(3)').css('width','100%');
             
	},
	toStyle3: function(){
             this.isStyle = 'isStyle_3';
             $('#spaces .spaceBox:nth-child(2)').css('display', 'block');
             $('#spaces .spaceBox:nth-child(4)').css('display', 'block');
             $('#spaces .spaceBox:nth-child(1)').css('width','40%');
             $('#spaces .spaceBox:nth-child(2)').css('width','60%');
             $('#spaces .spaceBox:nth-child(3)').css('width','60%');
             $('#spaces .spaceBox:nth-child(4)').css('width','40%');
             
	},
	toStyle4: function(){
             this.isStyle = 'isStyle_4';
             $('#spaces .spaceBox:nth-child(2)').css('display', 'block');
             $('#spaces .spaceBox:nth-child(4)').css('display', 'none');
             $('#spaces .spaceBox:nth-child(1)').css('width','100%');
             $('#spaces .spaceBox:nth-child(2)').css('width','60%');
             $('#spaces .spaceBox:nth-child(3)').css('width','40%');
            
	},
	deleteAll: function(){
		     this.Text_1 = '';
		     this.Text_2 = '';
		     this.Text_3 = '';
		     this.Text_4 = '';
	}
}
})