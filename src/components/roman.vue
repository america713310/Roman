<template>
   <div class="container pt-0"> 
       <h2>Римские цифры</h2>
        <label for="exampleInputEmail1">{{Header}}</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" :placeholder="PlaceholderText" v-model="text">
            <small id="emailHelp" class="form-text text-muted"></small>
         <label for="exampleInputPassword1">Перевод</label>
            <h3>{{MorzeText()}}</h3>
        <button class="btn btn-outline-success mr-3" @click="isRoman = !isRoman">{{ BtnText }}</button>
        <h3>{{Calc}}</h3>
   </div>
</template>

<script>
export default { 
  data () {
    return {
       text: "",
       isRoman: false,
       placeholder: ""
    }
  },
  methods: {
      MorzeText: function(){
        let _romanMap = new Map();
        let _answer = 0;
        _romanMap.set(["I", "V", "X", "L", "C", "D", "M"], [1, 5, 10, 50, 100, 500, 1000]);
        
        if (!this.isRoman) {
            _answer = 22;
        }
        else {
            for (let i = 0; i < this.text.length; i++)
            {
                for (let el of _romanMap) 
                {
                    for (let j = 0; j < el[0].length; j++)
                    {
                        if (i == this.text.length - 1) 
                        {
                            if (this.text[i] == el[0][j])
                            {
                                _answer += el[1][j];
                            }
                        }
                        else 
                        {
                            if (this.text[i] == el[0][j])
                            {
                                let _current = el[1][j];
                                let _next = el[1][j+1];
                                if (_next > _current)
                                {
                                    _answer -= _current;
                                }
                                else 
                                {
                                    _answer += _current;
                                }
                            }
                        }
                    }
                }
            }
        }
        return _answer;
        }
    },
    computed: {
        BtnText() {
            return this.isRoman ? 'Сменить' : 'Сменить'
        },
        PlaceholderText() {
            return this.isRoman ? 'XXVII' : '1999'
        },
        Header() {
            return !this.isRoman ? 'Напишите число' : 'Напишите число римскими цифрами' 
        },
        Calc() {
            let _romanMap = new Map();
        let _answer = 0;
        _romanMap.set(["I", "V", "X", "L", "C", "D", "M"], [1, 5, 10, 50, 100, 500, 1000]);
        
        if (!this.isRoman) {
            _answer = 22;
        }
        else {
            for (let i = 0; i < this.text.length; i++)
            {
                for (let el of _romanMap) 
                {
                    for (let j = 0; j < el[0].length; j++)
                    {
                        if (i == this.text.length - 1) 
                        {
                            if (this.text[i] == el[0][j])
                            {
                                _answer += el[1][j];
                            }
                        }
                        else 
                        {
                            if (this.text[i] == el[0][j])
                            {
                                let _current = el[1][j];
                                let _next = el[1][j+1];
                                if (_next > _current)
                                {
                                    _answer -= _current;
                                }
                                else 
                                {
                                    _answer += _current;
                                }
                            }
                        }
                    }
                }
            }
        }
        return _answer;
        }
    }
}
</script>

<style>
    .imgContainer {
    float:left;
}
    .logo-image {
    height: 45px;
    width: 60px;
}
</style>
